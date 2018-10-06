import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { title, books, changeShelf, shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book books={books} changeShelf={changeShelf} shelf={shelf} />
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
