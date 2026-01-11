import React from 'react';
const TrackingTab = ({ activeBorrowings }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Borrowing Tracking</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Borrowed Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activeBorrowings.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                    No active borrowings
                  </td>
                </tr>
              ) : (
                activeBorrowings.map(borrow => (
                  <tr key={borrow.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{borrow.userName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{borrow.bookTitle}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(borrow.borrowedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                        Borrowed
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default TrackingTab;
  