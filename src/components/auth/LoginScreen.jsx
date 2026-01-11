import React from 'react';
import { Book } from 'lucide-react';
import { MOCK_USERS } from "../../data/mockUsers";


const LoginScreen = ({ onLogin }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Library System</h1>
            <p className="text-gray-600">Choose your account to continue</p>
          </div>
  
          <div className="space-y-3">
            {MOCK_USERS.map(user => (
              <button
                key={user.id}
                onClick={() => onLogin(user)}
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
              >
                <span className="text-3xl">{user.avatar}</span>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-800">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {user.role}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default LoginScreen;