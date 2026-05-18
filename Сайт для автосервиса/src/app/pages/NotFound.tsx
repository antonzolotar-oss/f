import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-9xl font-bold text-neutral-300 mb-4">404</div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Страница не найдена</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}
