import { useParams, Link } from "react-router";
import { Clock, CheckCircle } from "lucide-react";
import { services } from "../data/services";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Услуга не найдена</h1>
          <Link to="/price-list" className="text-amber-600 hover:text-amber-700">
            Вернуться к прайс-листу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Header */}
          <ImageWithFallback
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-96 object-cover"
          />

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-amber-600 font-semibold mb-2">{service.category}</div>
                <h1 className="text-3xl font-bold text-neutral-900">{service.name}</h1>
              </div>
              <div className="text-right">
                <div className="text-sm text-neutral-600 mb-1">Стоимость от</div>
                <div className="text-3xl font-bold text-amber-600">
                  {service.priceFrom.toLocaleString("ru-RU")} ₽
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neutral-600 mb-6">
              <Clock className="w-5 h-5" />
              <span>Время выполнения: {service.duration}</span>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Includes */}
            <div className="bg-neutral-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Что входит в услугу</h2>
              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-neutral-900 mb-2">Обратите внимание</h3>
              <p className="text-neutral-700 text-sm">
                Указанная цена является базовой и может меняться в зависимости от марки и модели автомобиля,
                сложности работы и стоимости запчастей. Точную стоимость мастер озвучит после осмотра автомобиля.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                to="/request"
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Заказать услугу
              </Link>
              <Link
                to="/price-list"
                className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Все услуги
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
