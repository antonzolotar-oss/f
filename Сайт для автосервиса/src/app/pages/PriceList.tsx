import { Link } from "react-router";
import { ArrowRight, Info } from "lucide-react";
import { services, categories } from "../data/services";

export function PriceList() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Прайс-лист</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Стоимость услуг выездного автосервиса Modern Auto Repair
        </p>

        {/* Pricing Info */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Стоимость выезда мастера</h3>
              <ul className="space-y-1 text-neutral-700">
                <li>• Бесплатно в пределах города Нижний Новгород</li>
                <li>• Бесплатно в радиусе +10 км от города</li>
                <li>• От 500₽ при выезде далее 10 км от города</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{category}</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-neutral-900">Услуга</th>
                    <th className="text-left px-6 py-4 font-bold text-neutral-900">Описание</th>
                    <th className="text-right px-6 py-4 font-bold text-neutral-900">Цена от</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {services
                    .filter((service) => service.category === category)
                    .map((service, index, arr) => (
                      <tr
                        key={service.id}
                        className={`hover:bg-neutral-50 ${
                          index !== arr.length - 1 ? "border-b border-neutral-200" : ""
                        }`}
                      >
                        <td className="px-6 py-4 font-semibold text-neutral-900">{service.name}</td>
                        <td className="px-6 py-4 text-neutral-600 text-sm">{service.description}</td>
                        <td className="px-6 py-4 text-right font-bold text-amber-600">
                          {service.priceFrom.toLocaleString("ru-RU")} ₽
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/service/${service.id}`}
                            className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm"
                          >
                            Подробнее
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Important Note */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Почему цена на услуги выездного автосервиса не может быть фиксированной?
          </h2>
          <p className="text-neutral-700 mb-4">
            Каждый автомобиль — это индивидуальный механизм со своим характером, конструкцией и историей.
            Мы никогда не называем цену «с потолка», потому что на итоговую стоимость влияют три важных обстоятельства:
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">🔧 Сложность работы</h3>
              <p className="text-neutral-700">
                Простая операция и трудоёмкий ремонт требуют разного количества времени, инструментов и квалификации мастера.
                Например, замена масла предсказуема, а вот замена стойки стабилизатора на закисшем крепеже может превратиться
                в кропотливую работу.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-neutral-900 mb-2">📍 Дальность выезда</h3>
              <p className="text-neutral-700">
                Выездной формат подразумевает, что мастер тратит время и топливо на дорогу до вас.
                Чем дальше вы находитесь, тем больше ресурсов уходит только на то, чтобы добраться до места.
                Мы стараемся формировать цену так, чтобы дальняя поездка оставалась выгодной и для вас, и для нас.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-neutral-900 mb-2">🚘 Марка и модель автомобиля</h3>
              <p className="text-neutral-700">
                Инженерные решения у разных производителей отличаются. Доступ к одному и тому же узлу на корейском,
                немецком или японском автомобиле может кардинально различаться. Это влияет на время работы и на стоимость
                расходных материалов.
              </p>
            </div>
          </div>

          <p className="text-neutral-700 font-semibold">
            💬 Мы всегда озвучиваем итоговую сумму до начала работ, чтобы вы могли принять взвешенное решение.
            Это честно, прозрачно и без сюрпризов.
          </p>
        </div>
      </div>
    </div>
  );
}
