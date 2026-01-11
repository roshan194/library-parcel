import React from 'react';
const InventoryTab = ({ books, onUpdateStock }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Inventory Management</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map(book => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{book.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{book.author}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      book.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {book.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{book.totalStock}</td>
                  <td className="px-6 py-4 text-sm">
                    <input
                      type="number"
                      min="0"
                      defaultValue={book.stock}
                      onBlur={(e) => onUpdateStock(book.id, e.target.value)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default InventoryTab;