import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-screen h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Glass morphism container */}
      <Card className="relative w-full max-w-[440px] mx-4 z-10 p-8 sm:p-10 backdrop-blur-2xl bg-surface/80 border-white/5 animate-slide-up shadow-2xl">
        {/* Glow behind card */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 rounded-[1.1rem] -z-10 opacity-50 blur-sm"></div>
        
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          {/* Header */}
          <div className="mb-2 text-center">
            <h2 className="text-3xl font-bold text-text-main mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-text-muted text-sm">Enter your credentials to continue</p>
          </div>

          <div className="flex flex-col gap-5">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ex.com"
              required
            />
            
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123"
              required
            />
          </div>

          <Button type="submit" size="lg" className="mt-4">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;