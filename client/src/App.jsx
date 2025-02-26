import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Chatbot from "./Components/Chatbot";
import Voice from "./Components/Voice";
import HomePage from "./Components/HomePage";
function App() {
  const [user, setUser] = useState(null); // Track logged-in user

  useEffect(() => {
    const auth = getAuth();

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("userId", user.uid); // Store UID in localStorage
      } else {
        setUser(null);
        localStorage.removeItem("userId"); // Remove UID when logged out
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={ <Chatbot />} />
          <Route path="/voice" element={<Voice />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
