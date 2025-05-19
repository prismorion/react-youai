import { Navigate } from 'react-router-dom';

function getTokenFromCookie() {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];
}

export default function ProtectedRoute({ children }) {
    const token = getTokenFromCookie();
    return token ? children : <Navigate to="/login" replace />;
}
