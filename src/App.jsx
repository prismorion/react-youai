import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import HomeWork from '../pages/HomeWork/HomeWork';
import ChatAI from '../pages/ChatAI/ChatAI';
import Profile from '../pages/Profile/Profile';
import CoursePage from '../pages/CoursePage/CoursePage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
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

                <Route path="/courses/:id" element={
                <ProtectedRoute>
                    <CoursePage />
                </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
