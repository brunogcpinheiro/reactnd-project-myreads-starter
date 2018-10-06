import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
      }));
    });
  }

  changeShelf = (updatedBook, newShelf) => {
    BooksAPI.update(updatedBook, newShelf).then(() => {
      updatedBook.shelf = newShelf;
      const updatedBooks = this.state.books.filter(
        book => book.id !== updatedBook.id,
      );
      updatedBooks.push(updatedBook);
      this.setState({ books: updatedBooks });
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <Search changeShelf={this.changeShelf} books={books} />}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookList books={books} changeShelf={this.changeShelf} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
