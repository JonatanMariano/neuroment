
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Quest1 from '../pages/Quest1';
import LayoutStart from '../layout/Start/LyoutStart';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route element={<LayoutStart />}>
                <Route path="/login" element={<Login />} />
                <Route path="/quest1" element={<Quest1 />} />
            </Route>
        </Routes>
    )
}