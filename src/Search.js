import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchedBooks: [],
    error: false,
  };
  
  updateQuery = query => {
    if(query) {
      BooksAPI.search(query).then((books) => {
        if(books.length){
          books.forEach((book, index) => {
            let myBook = this.props.books.find((b) => b.id === book.id);
            book.shelf = myBook ? myBook.shelf : 'none';
            books[index] = book;
          });
          this.setState({
            searchedBooks: books,
            error: false
          });
        }
      });
      } else {
      this.setState({
          searchedBooks: [],
          error: true
      });
    }
  };

  render() {
    const { searchedBooks, error } = this.state;
    const { changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!error ? (
              searchedBooks.map(book => (
                <Book book={book} changeShelf={changeShelf} key={book.id} />
              ))
            ) : (
              <div style={{ color: 'white' }}>No results. Please search again!</div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
