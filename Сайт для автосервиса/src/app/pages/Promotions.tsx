import { Link } from "react-router";
import { Calendar, Tag } from "lucide-react";
import { promotions } from "../data/promotions";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Promotions() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Акции и специальные предложения</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Воспользуйтесь нашими выгодными предложениями и сэкономьте на качественном обслуживании автомобиля
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promotion) => (
            <Link
              key={promotion.id}
              to={`/promotions/${promotion.id}`}
              className="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-amber-500 transition-all"
            >
              <div className="relative">
                <ImageWithFallback
                  src={promotion.imageUrl}
                  alt={promotion.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-neutral-900 px-4 py-2 rounded-lg font-bold">
                  {promotion.discount}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-3">{promotion.title}</h2>
                <p className="text-neutral-600 mb-4">{promotion.shortDescription}</p>

                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>Действует до {promotion.validUntil}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-amber-600 font-semibold">
                  <Tag className="w-4 h-4" />
                  <span>Подробнее →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">Как воспользоваться акцией?</h3>
          <ol className="list-decimal list-inside space-y-2 text-neutral-700">
            <li>Выберите интересующую вас акцию и ознакомьтесь с условиями</li>
            <li>Оставьте заявку через форму или позвоните нам</li>
            <li>Укажите промокод или название акции при оформлении</li>
            <li>Получите скидку на выбранную услугу</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
