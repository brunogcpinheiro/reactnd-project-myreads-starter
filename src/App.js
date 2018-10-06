import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
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
          render={() => <Search changeShelf={this.changeShelf} />}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <ListBooks
                    books={books}
                    title="Currently Reading"
                    shelf="currentlyReading"
                    changeShelf={this.changeShelf}
                  />
                  <ListBooks
                    books={books}
                    title="Want To Read"
                    shelf="wantToRead"
                    changeShelf={this.changeShelf}
                  />
                  <ListBooks
                    books={books}
                    title="Read"
                    shelf="read"
                    changeShelf={this.changeShelf}
                  />
                </div>
              </div>
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
