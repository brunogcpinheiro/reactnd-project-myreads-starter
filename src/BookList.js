import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
  render() {
    const { books, changeShelf } = this.props;

    return (
      <div>
        <div className="list-books-content">
          <BookShelf
            books={books}
            shelf="currentlyReading"
            title="Currently Reading"
            changeShelf={changeShelf}
          />
          <BookShelf
            books={books}
            shelf="wantToRead"
            title="Want To Read"
            changeShelf={changeShelf}
          />
          <BookShelf
            books={books}
            shelf="read"
            title="Read"
            changeShelf={changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default BookList;
