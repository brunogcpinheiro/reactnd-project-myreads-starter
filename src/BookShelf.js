import React from 'react';

const BookShelf = props => {
  const { changeShelf, book } = props;
  return (
    <div className="book-shelf-changer">
      <select
        onChange={e => changeShelf(book, e.target.value)}
        value={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelf;
