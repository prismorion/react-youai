import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import HomeWork from '../pages/HomeWork/HomeWork';
import ChatAI from '../pages/ChatAI/ChatAI';
import Profile from '../pages/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
                } />

                <Route path="/home-work" element={
                <ProtectedRoute>
                    <HomeWork />
                </ProtectedRoute>
                } />

                <Route path="/chat-ai" element={
                <ProtectedRoute>
                    <ChatAI />
                </ProtectedRoute>
                } />

                <Route path="/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
