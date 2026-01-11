import React from 'react';
const BorrowedBookCard = ({ borrow, onReturn }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{borrow.bookTitle}</h3>
        <p className="text-sm text-gray-600 mb-4">
          Borrowed on {new Date(borrow.borrowedDate).toLocaleDateString()}
        </p>
        <button
          onClick={() => onReturn(borrow.id)}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Return Book
        </button>
      </div>
    );
};
export default BorrowedBookCard;  