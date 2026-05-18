import { Outlet, Link, useLocation } from "react-router";
import { Wrench, ArrowLeft } from "lucide-react";

export function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-neutral-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Wrench className="w-8 h-8 text-neutral-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Modern Auto Repair</h1>
                <p className="text-sm text-neutral-400">Выездной автосервис</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="hover:text-amber-500 transition-colors">Главная</Link>
              <Link to="/about" className="hover:text-amber-500 transition-colors">О нас</Link>
              <Link to="/promotions" className="hover:text-amber-500 transition-colors">Акции</Link>
              <Link to="/request" className="hover:text-amber-500 transition-colors">Оставить заявку</Link>
              <Link to="/price-list" className="hover:text-amber-500 transition-colors">Прайс-лист</Link>
              <Link to="/guarantees" className="hover:text-amber-500 transition-colors">Гарантии</Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex flex-wrap gap-4 mt-4">
            <Link to="/" className="text-sm hover:text-amber-500 transition-colors">Главная</Link>
            <Link to="/about" className="text-sm hover:text-amber-500 transition-colors">О нас</Link>
            <Link to="/promotions" className="text-sm hover:text-amber-500 transition-colors">Акции</Link>
            <Link to="/request" className="text-sm hover:text-amber-500 transition-colors">Заявка</Link>
            <Link to="/price-list" className="text-sm hover:text-amber-500 transition-colors">Прайс</Link>
            <Link to="/guarantees" className="text-sm hover:text-amber-500 transition-colors">Гарантии</Link>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      {!isHome && (
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Modern Auto Repair</h3>
              <p className="text-neutral-400 text-sm">Выездной автосервис в Нижнем Новгороде</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Контакты</h3>
              <p className="text-neutral-400 text-sm">mail.ru</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Режим работы</h3>
              <p className="text-neutral-400 text-sm">Пн-Вс: 8:00 - 20:00</p>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-6 pt-6 text-center text-neutral-400 text-sm">
            © 2026 Modern Auto Repair. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
