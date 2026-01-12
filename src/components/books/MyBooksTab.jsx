import React from 'react';
import { Book } from 'lucide-react';
import BorrowedBookCard from './BorrowedBookCard';

const MyBooksTab = ({ borrowedBooks, onReturn }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Borrowed Books</h2>
        {borrowedBooks.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">You haven't borrowed any books yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {borrowedBooks.map(borrow => (
              <BorrowedBookCard
                key={borrow.id}
                borrow={borrow}
                onReturn={onReturn}
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  export default MyBooksTab;