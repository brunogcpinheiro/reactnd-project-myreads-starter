import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = props => {
  const { title, books, changeShelf, shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.shelf === shelf).map(book => (
            <Book
              book={book}
              changeShelf={changeShelf}
              shelf={shelf}
              key={book.id}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};

export default BookShelf;
