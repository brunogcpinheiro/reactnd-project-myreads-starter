import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    filtered: [],
    error: false,
  };

  updateQuery = query => {
    this.setState(() => ({
      query,
    }));

    if (query) {
      BooksAPI.search(query).then(filtered => {
        filtered.length > 0
          ? this.setState(state => ({
              filtered,
              error: false,
            }))
          : this.setState({ filtered: [], error: true });
      });
    } else {
      this.setState({ filtered: [], error: false });
    }
  };

  render() {
    const { query, filtered, error } = this.state;
    const { changeShelf, books } = this.props;

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
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!error ? (
              filtered.map(book => (
                <Book books={books} book={book} changeShelf={changeShelf} />
              ))
            ) : (
              <div>No results. Please search again!</div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
