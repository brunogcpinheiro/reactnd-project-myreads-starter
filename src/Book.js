import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = props => {
  const { book, changeShelf } = props;
  const noThumbnail = "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
  
  return (
    <li>
      <div className="book" key={book.id}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noThumbnail})`,
            }}
          />
          <ShelfChanger changeShelf={changeShelf} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors
            ? book.authors.join(" & ")
            : ""
          }
        </div>
      </div>
    </li>
  );
};

export default Book;
