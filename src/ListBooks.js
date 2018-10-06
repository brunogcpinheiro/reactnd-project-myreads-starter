import React, { Component } from 'react';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  render() {
    const { title, books, shelf, changeShelf } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                {books.filter(book => book.shelf === shelf).map(book => (
                  <div className="book" key={book.id}>
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                      />
                      <BookShelf changeShelf={changeShelf} book={book} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                      {book.authors.join(' & ')}
                    </div>
                  </div>
                ))}
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
