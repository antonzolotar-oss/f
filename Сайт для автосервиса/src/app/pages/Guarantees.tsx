import { Link } from "react-router";
import { Shield, ArrowRight, Calendar } from "lucide-react";
import { guarantees } from "../data/guarantees";

export function Guarantees() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Гарантии качества</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Мы несём ответственность за качество выполненных работ и используемых запчастей
        </p>

        {/* Introduction */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-3 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Наши гарантийные обязательства</h2>
              <p className="text-neutral-700 mb-3">
                Modern Auto Repair предоставляет гарантию на все виды выполненных работ и установленные запчасти.
                Мы уверены в качестве нашего сервиса и готовы нести полную ответственность за результат.
              </p>
              <p className="text-neutral-700">
                Срок гарантии зависит от типа выполненных работ, категории установленных деталей и условий эксплуатации
                автомобиля. Все гарантийные обязательства фиксируются в документах, которые выдаются клиенту после
                завершения работ.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((guarantee) => (
            <Link
              key={guarantee.id}
              to={`/guarantee/${guarantee.id}`}
              className="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-amber-500 transition-all"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{guarantee.icon}</div>
                <h2 className="text-xl font-bold text-neutral-900 mb-3">{guarantee.title}</h2>
                <p className="text-neutral-600 mb-4 text-sm">{guarantee.shortDescription}</p>

                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{guarantee.period}</span>
                </div>

                <div className="flex items-center gap-2 text-amber-600 font-semibold">
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Как воспользоваться гарантией?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-neutral-900 mb-3">1. Обнаружили проблему?</h3>
              <p className="text-neutral-700 text-sm mb-4">
                Если в течение гарантийного срока вы заметили неисправность, связанную с выполненными работами,
                свяжитесь с нами по телефону или через форму обратной связи.
              </p>

              <h3 className="font-bold text-neutral-900 mb-3">2. Предоставьте документы</h3>
              <p className="text-neutral-700 text-sm mb-4">
                Приготовьте наряд-заказ и чеки, подтверждающие выполнение работ. Они понадобятся для оформления
                гарантийного случая.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-neutral-900 mb-3">3. Мастер приедет к вам</h3>
              <p className="text-neutral-700 text-sm mb-4">
                Наш специалист выедет на место, проведёт диагностику и определит, является ли случай гарантийным.
              </p>

              <h3 className="font-bold text-neutral-900 mb-3">4. Бесплатное устранение</h3>
              <p className="text-neutral-700 text-sm">
                Если проблема попадает под гарантийные обязательства, мы устраним её бесплатно в кратчайшие сроки.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-neutral-50 rounded-lg p-6">
            <h3 className="font-bold text-neutral-900 mb-2">Важно знать</h3>
            <p className="text-neutral-700 text-sm">
              Гарантия не распространяется на естественный износ деталей, повреждения в результате ДТП,
              неправильной эксплуатации или ремонта в других сервисах. Подробные условия каждой гарантии
              можно узнать, нажав на соответствующую карточку.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
