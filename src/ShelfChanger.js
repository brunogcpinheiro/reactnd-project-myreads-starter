import React from 'react';

const ShelfChanger = props => {
  const { book, changeShelf } = props;
  const shelfType = (book.shelf) ? book.shelf : 'none';
    
  return (
    <div className="book-shelf-changer">
      <select
        onChange={e => changeShelf(book, e.target.value)}
        value={shelfType}>
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

export default ShelfChanger;
