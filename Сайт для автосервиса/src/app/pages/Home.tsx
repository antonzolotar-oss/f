import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      alt: "Автосервис Modern Auto Repair"
    },
    {
      url: "https://images.unsplash.com/photo-1504222490345-c075b6008014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      alt: "Диагностика автомобиля"
    },
    {
      url: "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      alt: "Ремонт автомобилей"
    },
    {
      url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      alt: "Профессиональный сервис"
    }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <div className="bg-neutral-100">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <Slider {...sliderSettings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
            Добро пожаловать в Modern Auto Repair
          </h2>
          <p className="text-lg text-neutral-700 mb-4 text-center">
            Профессиональный выездной автосервис в Нижнем Новгороде. Мы приедем к вам в любое удобное место и время,
            чтобы выполнить качественный ремонт вашего автомобиля.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Профессионализм</h3>
            <p className="text-neutral-600 text-sm">
              Опытные мастера с многолетним стажем работы
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Выезд на место</h3>
            <p className="text-neutral-600 text-sm">
              Бесплатный выезд в пределах города и +10км
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Удобное время</h3>
            <p className="text-neutral-600 text-sm">
              Работаем ежедневно с 8:00 до 20:00
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Быстрая связь</h3>
            <p className="text-neutral-600 text-sm">
              Оперативная консультация и запись на сервис
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Нужен ремонт автомобиля?</h2>
          <p className="text-lg text-neutral-300 mb-8">
            Оставьте заявку прямо сейчас, и наш специалист свяжется с вами в ближайшее время
          </p>
          <Link
            to="/request"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Оставить заявку
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Link
            to="/promotions"
            className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 hover:border-amber-500 transition-colors text-center"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Акции</h3>
            <p className="text-neutral-600">Выгодные предложения для вас</p>
          </Link>

          <Link
            to="/price-list"
            className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 hover:border-amber-500 transition-colors text-center"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Прайс-лист</h3>
            <p className="text-neutral-600">Стоимость наших услуг</p>
          </Link>

          <Link
            to="/guarantees"
            className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 hover:border-amber-500 transition-colors text-center"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Гарантии</h3>
            <p className="text-neutral-600">Качество и надежность</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
