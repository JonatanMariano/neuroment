import { useState } from 'react';
import { authStore } from '../../store/auth/authStore';
import type { LoginFormData } from '../../types/formLogin/auth';

export const useLogin = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    remember: false,
  });

  const handleInputChange = (field: keyof LoginFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'remember' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    await authStore.login(formData, formData.remember);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isLoading: authStore.isLoading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
  };
};