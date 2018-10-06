import React, { Component } from 'react';

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
                      <div className="book-shelf-changer">
                        <select
                          onChange={e => changeShelf(book, e.target.value)}
                          value={book.shelf}>
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
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
