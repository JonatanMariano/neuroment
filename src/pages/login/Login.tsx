import React from 'react';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { useLogin } from '../../hooks/auth/useLogin';
import { observer } from 'mobx-react-lite';
import Logo from '../../assets/logo/logoNeuroment.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const { formData, handleInputChange, handleSubmit, isLoading, error, handleCheckboxChange, validation } = useLogin();

  const Header = () => {
    return (
      <div className='flex flex-column align-items-center'>
        <img src={Logo} alt="NeuroMent Logo" className='w-15rem' />
        <h2 className='m-0'>Login</h2>
      </div>
    );
  }


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation.isFormValid) {
      return;
    }
    try {
      await handleSubmit();
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <Card header={Header} className="loginContainer">
      <form onSubmit={onSubmit}>
        <FloatLabel className="mb-4 ">
          <InputText
            className='w-full'
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>

        <FloatLabel className='mb-3'>
          <Password inputId="Senha" className='inputPassword' value={formData.password} onChange={handleInputChange('password')} toggleMask promptLabel='Digite sua senha...' />
          <label htmlFor="Senha" >Senha</label>
        </FloatLabel>
        <div className='flex align-items-center justify-content-between mb-3'>
          <div className='flex align-items-center gap-2'>
            <Checkbox 
              checked={formData.remember} 
              onChange={(e) => handleCheckboxChange(e.checked)} 
              disabled={isLoading}
            />
            <label htmlFor="remember" className="cursor-pointer">
              Lembrar-me
            </label>
          </div>
          <Link to="/forgot-password" className="text-sm">
            Esqueceu sua senha?
          </Link>
        </div>
        <Button 
          label="Entrar" 
          type="submit" 
          loading={isLoading} 
          className="w-full bg-blue-500" 
          disabled={!validation.isFormValid || isLoading} 
        />
        
        {error && (
          <div className="text-red-500 mt-2 p-2 border-round bg-red-50 border border-red-200">
            {error}
          </div>
        )}
        <div className='flex w-full align-items-center justify-content-center gap-2 text-sm'>
          <p>Não tem uma conta?</p>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
        
      </form>
    </Card>
  );
};
export default observer(Login);