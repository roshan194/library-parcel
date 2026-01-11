import React, { useState} from "react";
import LoginScreen from "./components/auth/LoginScreen";


const App = () => {
    const [user, setUser] = useState(null);
    
    const handleLogin = (selectedUser) => {
        setUser(selectedUser);
    };
    
    return (
        <div className="App">
        {!user ? (
            <LoginScreen onLogin={handleLogin} />
        ) : (
            <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
            <p className="text-gray-700">You are logged in as a {user.role}.</p>
            </div>
        )}
        </div>
    );
}
export default App;