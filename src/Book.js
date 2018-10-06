import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = props => {
  const { books, changeShelf, shelf } = props;
  return (
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
            <ShelfChanger changeShelf={changeShelf} book={book} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      ))}
    </li>
  );
};

export default Book;
