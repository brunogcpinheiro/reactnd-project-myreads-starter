import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    query: '',
    filtered: [],
    error: false
  };
  
  updateQuery = query => {
    this.setState(() => ({
      query,
    }));
    
    if (query) {
      BooksAPI.search(query).then(books => {
        books.length > 0 
          ? this.setState({filtered: books, error: false}) 
          : this.setState({ filtered: [], error: true });
      }); 
    }
  }
  
  render() {
    const { query, filtered, error } = this.state;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={query} 
              onChange={e => this.updateQuery(e.target.value)} 
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!error ? filtered.map(book => (
              <div className="book" key={book.id}>
                <div className="book-top">
                  <div 
                    className="book-cover" 
                    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                  </div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            )) : <div>No results. Please search again!</div>}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;