import React from 'react';
const BrowseBooksTab = ({ books, onBorrow, canBorrow, onAddBookClick, isAdmin }) => {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Available Books</h2>
          {isAdmin && (
            <button
              onClick={onAddBookClick}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Book
            </button>
          )}
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onBorrow={onBorrow}
              canBorrow={canBorrow}
            />
          ))}
        </div>
      </div>
    );
  };

  export default BrowseBooksTab;
  