import { useState } from 'react';
import { computed } from 'mobx';
import { useObserver } from 'mobx-react-lite';
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

  const handleCheckboxChange = (checked: boolean | undefined) => {
    setFormData(prev => ({ ...prev, remember: checked ?? false}));
  };

  const handleSubmit = async () => {
    await authStore.login(formData, formData.remember);
  };
  const isFormValid = computed(() =>{
    const { email, password, remember } = formData;
    const hasEmail = email.trim().length > 0;
    const hasPassword = password.trim().length > 0;
    const isRememberChecked = remember === true;
    return{
      hasEmail,
      hasPassword,
      isRememberChecked,
      isFormComplete: hasEmail && hasPassword && isRememberChecked,
      isFormValid: hasEmail && hasPassword && isRememberChecked 
    };
  })

  return useObserver(() => ({
    formData,
    handleInputChange,
    handleSubmit,
    handleCheckboxChange,
    isLoading: authStore.isLoading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
    validation: isFormValid.get(),
  }));
};