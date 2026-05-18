import { Mail, Phone } from "lucide-react";

export function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">О нас</h1>

        {/* Company Info */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Modern Auto Repair</h2>
          <p className="text-lg text-neutral-700 mb-4">
            Modern Auto Repair — это профессиональный выездной автосервис, работающий в Нижнем Новгороде и области.
            Мы специализируемся на диагностике и ремонте автомобилей любых марок и моделей прямо у вас на дому,
            на работе или в любом другом удобном для вас месте.
          </p>
          <p className="text-neutral-700 mb-4">
            Наша команда состоит из опытных специалистов с многолетним стажем работы. Мы используем современное
            оборудование и оригинальные запчасти, что гарантирует высокое качество выполненных работ.
          </p>
          <p className="text-neutral-700">
            Выбирая Modern Auto Repair, вы экономите время и получаете качественный сервис без необходимости
            посещать стационарный автосервис. Мы ценим ваше время и делаем всё возможное, чтобы ремонт
            был выполнен быстро и профессионально.
          </p>
        </div>

        {/* Contacts */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Контакты</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">Электронная почта</h3>
                <a href="mailto:info@modernautorepair.ru" className="text-amber-600 hover:text-amber-700">
                  info@modernautorepair.ru
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">Телефон</h3>
                <a href="tel:+78314567890" className="text-amber-600 hover:text-amber-700">
                  +7 (831) 456-78-90
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm.84 12.15h-2.38c-.51 0-.97-.37-1.09-.86l-.36-1.39c-.08-.32-.38-.54-.71-.54h-2.74c-.33 0-.63.22-.71.54l-.36 1.39c-.12.49-.58.86-1.09.86H4.09c-.63 0-1.14-.51-1.14-1.14 0-.28.1-.55.29-.76l4.49-5.17c.35-.4.86-.63 1.4-.63h5.74c.54 0 1.05.23 1.4.63l4.49 5.17c.19.21.29.48.29.76 0 .63-.51 1.14-1.14 1.14z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">ВКонтакте</h3>
                <a
                  href="https://vk.com/modernautorepair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700"
                >
                  vk.com/modernautorepair
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">Адрес офиса</h3>
                <p className="text-neutral-700">
                  г. Нижний Новгород, ул. Гагарина, д. 23, офис 15
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Yandex Map */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Наш офис на карте</h2>
          <div className="w-full h-96 bg-neutral-100 rounded-lg overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=43.995905%2C56.326887&z=12&pt=43.995905,56.326887,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Карта офиса Modern Auto Repair"
            />
          </div>
          <p className="text-sm text-neutral-600 mt-4">
            * Офис работает для консультаций по предварительной записи. Все ремонтные работы выполняются на выезде.
          </p>
        </div>
      </div>
    </div>
  );
}
