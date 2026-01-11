import React from 'react';

const BookCard = ({ book, onBorrow, canBorrow }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 mb-1">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            book.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {book.stock > 0 ? `${book.stock} Available` : 'Not Available'}
          </div>
        </div>
  
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${(book.stock / book.totalStock) * 100}%` }}
            />
          </div>
          <span className="text-xs">{book.stock}/{book.totalStock}</span>
        </div>
  
        <button
          onClick={() => onBorrow(book.id)}
          disabled={book.stock === 0 || !canBorrow}
          className={`w-full py-2 rounded-lg font-medium transition-colors ${
            book.stock === 0 || !canBorrow
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {book.stock === 0 ? 'Out of Stock' : !canBorrow ? 'Limit Reached' : 'Borrow Book'}
        </button>
      </div>
    );
  };

  
  export default BookCard;