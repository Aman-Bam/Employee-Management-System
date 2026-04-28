import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleLogin(email, password);
    setLoading(false);
    // Inputs are only cleared or kept depending on whether navigate happened
  };

  return (
    <div className="w-screen h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Glass morphism container */}
      <Card className="relative w-full max-w-[440px] mx-4 z-10 backdrop-blur-3xl bg-surface/80 dark:bg-surface/80 border-white/20 dark:border-white/5 animate-slide-up shadow-2xl">
        {/* Glow behind card */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-transparent to-accent/40 rounded-[1.1rem] -z-10 opacity-70 blur-sm dark:opacity-50"></div>
        
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

          <Button type="submit" size="lg" className="mt-4" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;