import { useParams, Link } from "react-router";
import { Calendar, CheckCircle, XCircle } from "lucide-react";
import { guarantees } from "../data/guarantees";

export function GuaranteeDetail() {
  const { id } = useParams();
  const guarantee = guarantees.find((g) => g.id === id);

  if (!guarantee) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Гарантия не найдена</h1>
          <Link to="/guarantees" className="text-amber-600 hover:text-amber-700">
            Вернуться к списку гарантий
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start gap-4">
              <div className="text-6xl">{guarantee.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">{guarantee.title}</h1>
                <p className="text-neutral-600">{guarantee.shortDescription}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-neutral-600 mb-1">Срок гарантии</div>
              <div className="flex items-center gap-2 text-amber-600 font-bold">
                <Calendar className="w-5 h-5" />
                <span>{guarantee.period}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-neutral-700 leading-relaxed">{guarantee.fullDescription}</p>
          </div>

          {/* Terms */}
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Условия гарантии
            </h2>
            <ul className="space-y-3">
              {guarantee.terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exceptions */}
          <div className="bg-red-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-600" />
              Гарантия не распространяется на
            </h2>
            <ul className="space-y-3">
              {guarantee.exceptions.map((exception, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{exception}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-neutral-900 mb-2">Как воспользоваться гарантией?</h3>
            <p className="text-neutral-700 text-sm mb-3">
              Если у вас возникла проблема, попадающая под гарантийные обязательства:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-700 text-sm">
              <li>Свяжитесь с нами по телефону или через форму обратной связи</li>
              <li>Подготовьте документы (наряд-заказ, чеки)</li>
              <li>Дождитесь приезда мастера для диагностики</li>
              <li>Получите бесплатное устранение проблемы</li>
            </ol>
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
              to="/guarantees"
              className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
            >
              Все гарантии
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
