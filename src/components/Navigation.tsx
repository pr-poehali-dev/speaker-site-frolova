import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Жанна Фролова
          </Link>
          <div className="flex gap-6 md:gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-accent font-semibold' : 'hover:text-accent'}`}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${isActive('/about') ? 'text-accent font-semibold' : 'hover:text-accent'}`}
            >
              Обо мне
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${isActive('/contact') ? 'text-accent font-semibold' : 'hover:text-accent'}`}
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
