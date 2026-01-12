## 📚 Library Management System (Frontend Task)

A role-based Library Management System built using React that allows users to browse and borrow books, while admins can manage inventory and track borrowings.
This project was developed as part of a frontend interview assignment with a focus on clean architecture, reusable components, and maintainable code.

## 🚀 Features
👤 Authentication (Mocked)

Login as User or Admin

Role-based UI and access control

## 📖 User Features

Browse available books

Borrow books (maximum 2 books at a time)

View borrowed books

Return borrowed books

Real-time stock updates

🛠️ Admin Features

Add new books to the library

Update book stock

View complete inventory

Track all active borrowings (user, book, date)

## 🔔 UX Enhancements

Toast notifications for actions & errors

Disabled actions for invalid states

Responsive UI (mobile, tablet, desktop)

## 🧱 Tech Stack

React (Functional Components)

Custom Hooks

Tailwind CSS

Lucide Icons

Mocked Backend Logic

Clean Git History

🗂️ Project Structure
src/
├── components/
│   ├── auth/
│   │   └── LoginScreen.jsx
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Notification.jsx
│   │   └── AddBookModal.jsx
│   └── books/
│       ├── BookCard.jsx
│       ├── BorrowedBookCard.jsx
│       ├── BrowseBooksTab.jsx
│       ├── MyBooksTab.jsx
│       ├── InventoryTab.jsx
│       └── TrackingTab.jsx
├── hooks/
│   ├── useLibrary.js
│   └── useNotification.js
├── data/
│   ├── mockBooks.js
│   └── mockUsers.js
├── App.jsx
└── main.jsx

🧠 Architecture Decisions
🔹 Custom Hooks

useLibrary
Handles all business logic:

Borrow / return books

Stock updates

Admin inventory actions

useNotification
Centralized notification handling to keep UI clean.

🔹 Separation of Concerns

UI components are stateless

Business logic lives in hooks

Mock data isolated for easy backend replacement

⚠️ Business Rules Implemented

A user can borrow maximum 2 books

Books cannot be borrowed if stock is 0

Returning a book restores stock

Admin-only access to inventory & tracking

Stock cannot be negative

▶️ How to Run Locally
# Install dependencies
npm install

# Start development server
npm run dev