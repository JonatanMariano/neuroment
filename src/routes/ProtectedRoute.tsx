import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/StoreProvider';

export function ProtectedRoute() {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}