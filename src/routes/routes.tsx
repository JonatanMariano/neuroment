
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Quest1 from '../pages/Quest1';
import Quest2 from '../pages/Quest2';
import Quest3 from '../pages/Quest3';
import Quest4 from '../pages/Quest4';
import Quest5 from '../pages/Quest5';
import LayoutStart from '../layout/Start/LyoutStart';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route element={<LayoutStart />}>
                <Route path="/login" element={<Login />} />
                <Route path="/quest1" element={<Quest1 />} />
                <Route path="/quest2" element={<Quest2 />} />
                <Route path="/quest3" element={<Quest3 />} />
                <Route path="/quest4" element={<Quest4 />} />   
                <Route path="/quest5" element={<Quest5 />} />
            </Route>
        </Routes>
    )
}