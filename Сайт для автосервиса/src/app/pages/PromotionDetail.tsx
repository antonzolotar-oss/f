import { useParams, Link } from "react-router";
import { Calendar, Tag, CheckCircle } from "lucide-react";
import { promotions } from "../data/promotions";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PromotionDetail() {
  const { id } = useParams();
  const promotion = promotions.find((p) => p.id === id);

  if (!promotion) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Акция не найдена</h1>
          <Link to="/promotions" className="text-amber-600 hover:text-amber-700">
            Вернуться к списку акций
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
          <div className="relative">
            <ImageWithFallback
              src={promotion.imageUrl}
              alt={promotion.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-6 right-6 bg-amber-500 text-neutral-900 px-6 py-3 rounded-lg font-bold text-2xl">
              {promotion.discount}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">{promotion.title}</h1>

            <div className="flex items-center gap-6 mb-6 text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Действует до {promotion.validUntil}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>Промокод: {promotion.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed">{promotion.fullDescription}</p>
            </div>

            {/* Terms */}
            <div className="bg-neutral-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Условия акции</h2>
              <ul className="space-y-3">
                {promotion.terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                to="/request"
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Оставить заявку
              </Link>
              <Link
                to="/promotions"
                className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Другие акции
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
