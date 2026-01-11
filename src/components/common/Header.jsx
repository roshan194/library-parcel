import { Book, LogOut } from 'lucide-react';
const Header = ({ currentUser, activeTab, setActiveTab, onLogout, borrowedCount }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Library Management</h1>
              <p className="text-xs text-gray-500">
                {currentUser.role === 'admin' ? 'Admin Dashboard' : 'User Portal'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <span className="text-2xl">{currentUser.avatar}</span>
              <div className="text-sm">
                <div className="font-medium text-gray-800">{currentUser.name}</div>
                <div className="text-xs text-gray-500">{currentUser.role}</div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>

        <div className="flex gap-1 -mb-px">
          <button
            onClick={() => setActiveTab('books')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'books'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Browse Books
          </button>
          <button
            onClick={() => setActiveTab('my-books')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'my-books'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            My Books ({borrowedCount}/2)
          </button>
          {currentUser.role === 'admin' && (
            <>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'inventory'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Inventory
              </button>
              <button
                onClick={() => setActiveTab('tracking')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'tracking'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Borrowing Tracking
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;