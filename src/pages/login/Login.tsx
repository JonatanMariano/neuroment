import React from 'react';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useLogin } from '../../hooks/auth/useLogin';

const Login = () => {
  const { formData, handleInputChange, handleSubmit, isLoading, error } = useLogin();

  const header = <h1>NeuroMent Login</h1>;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit();
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <Card header={header} className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit}>
        <FloatLabel className="mb-4">
          <InputText 
            id="email"
            type="email" 
            value={formData.email} 
            onChange={handleInputChange('email')} 
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>
        
        <FloatLabel className="mb-4">
          <InputText 
            id="password"
            type="password" 
            value={formData.password} 
            onChange={handleInputChange('password')} 
          />
          <label htmlFor="password">Senha</label>
        </FloatLabel>
        
        <Button 
          label="Entrar" 
          type="submit"
          loading={isLoading}
          className="w-full"
        />
        
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </Card>
  );
};