import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = props => {
  const { book, changeShelf } = props;

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

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
