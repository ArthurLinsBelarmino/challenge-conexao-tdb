import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 scroll-smooth">
      <Header />
      
      <main className="flex-1 w-full container mx-auto px-6 py-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};