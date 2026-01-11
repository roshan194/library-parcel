import React, { useState} from "react";
import LoginScreen from "./components/auth/LoginScreen";
import Header from "./components/common/Header";
import { INITIAL_BOOKS } from "./data/mockBooks.js";
import BrowseBooksTab from "./components/books/BrowseBooksTab";
import MyBooksTab from "./components/books/MyBooksTab";
import InventoryTab from "./components/books/InventoryTab";
import TrackingTab from "./components/books/TrackingTab";




const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [books, setBooks] = useState(INITIAL_BOOKS);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [showAddBook, setShowAddBook] = useState(false);
    const [notification, setNotification] = useState(null);
    const [activeTab, setActiveTab] = useState('books');
    const [newBook, setNewBook] = useState({ title: '', author: '', stock: 0 });
  
    const showNotification = (message, type = 'success') => {
      setNotification({ message, type });
      setTimeout(() => setNotification(null), 3000);
    };
  
    const handleLogin = (user) => {
      setCurrentUser(user);
      showNotification(`Welcome, ${user.name}!`);
    };
  
    const handleLogout = () => {
      setCurrentUser(null);
      setActiveTab('books');
      showNotification('Logged out successfully');
    };
  
    const getUserBorrowedCount = () => {
      return borrowedBooks.filter(b => b.userId === currentUser.id && !b.returned).length;
    };
  
    const canBorrowMore = () => {
      return getUserBorrowedCount() < 2;
    };
  
    const handleBorrow = (bookId) => {
      if (!canBorrowMore()) {
        showNotification('You can only borrow maximum 2 books at a time', 'error');
        return;
      }
  
      const book = books.find(b => b.id === bookId);
      if (book.stock <= 0) {
        showNotification('This book is not available', 'error');
        return;
      }
  
      setBooks(books.map(b => 
        b.id === bookId ? { ...b, stock: b.stock - 1 } : b
      ));
  
      setBorrowedBooks([
        ...borrowedBooks,
        {
          id: Date.now(),
          bookId,
          userId: currentUser.id,
          userName: currentUser.name,
          bookTitle: book.title,
          borrowedDate: new Date().toISOString(),
          returned: false
        }
      ]);
  
      showNotification(`Successfully borrowed "${book.title}"`);
    };
  
    const handleReturn = (borrowId) => {
      const borrowRecord = borrowedBooks.find(b => b.id === borrowId);
      
      setBorrowedBooks(borrowedBooks.map(b =>
        b.id === borrowId ? { ...b, returned: true, returnedDate: new Date().toISOString() } : b
      ));
  
      setBooks(books.map(b =>
        b.id === borrowRecord.bookId ? { ...b, stock: b.stock + 1 } : b
      ));
  
      showNotification(`Successfully returned "${borrowRecord.bookTitle}"`);
    };
  
    const handleAddBook = () => {
      if (!newBook.title || !newBook.author || newBook.stock <= 0) {
        showNotification('Please fill all fields correctly', 'error');
        return;
      }
  
      const book = {
        id: Date.now(),
        title: newBook.title,
        author: newBook.author,
        stock: parseInt(newBook.stock),
        totalStock: parseInt(newBook.stock)
      };
  
      setBooks([...books, book]);
      setNewBook({ title: '', author: '', stock: 0 });
      setShowAddBook(false);
      showNotification(`Added "${book.title}" to library`);
    };
  
    const handleUpdateStock = (bookId, newStock) => {
      const stock = parseInt(newStock);
      if (stock < 0) {
        showNotification('Stock cannot be negative', 'error');
        return;
      }
  
      setBooks(books.map(b =>
        b.id === bookId ? { ...b, stock, totalStock: Math.max(b.totalStock, stock) } : b
      ));
      showNotification('Stock updated successfully');
    };
  
    const getMyBorrowedBooks = () => {
      return borrowedBooks.filter(b => b.userId === currentUser.id && !b.returned);
    };
  
    const getAllBorrowings = () => {
      return borrowedBooks.filter(b => !b.returned);
    };
  
    if (!currentUser) {
      return <LoginScreen onLogin={handleLogin} />;
    }
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Notification notification={notification} />
  
        <Header
          currentUser={currentUser}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={handleLogout}
          borrowedCount={getUserBorrowedCount()}
        />
  
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'books' && (
            <BrowseBooksTab
              books={books}
              onBorrow={handleBorrow}
              canBorrow={canBorrowMore()}
              onAddBookClick={() => setShowAddBook(true)}
              isAdmin={currentUser.role === 'admin'}
            />
          )}
  
          {activeTab === 'my-books' && (
            <MyBooksTab
              borrowedBooks={getMyBorrowedBooks()}
              onReturn={handleReturn}
            />
          )}
  
          {currentUser.role === 'admin' && activeTab === 'inventory' && (
            <InventoryTab
              books={books}
              onUpdateStock={handleUpdateStock}
            />
          )}
  
          {currentUser.role === 'admin' && activeTab === 'tracking' && (
            <TrackingTab activeBorrowings={getAllBorrowings()} />
          )}
        </main>
  
        <AddBookModal
          show={showAddBook}
          onClose={() => setShowAddBook(false)}
          onAdd={handleAddBook}
          newBook={newBook}
          setNewBook={setNewBook}
        />
      </div>
    );
  };
  
export default App;