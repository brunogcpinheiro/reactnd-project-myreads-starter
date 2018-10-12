import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, changeShelf } = props;

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
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BookList;
