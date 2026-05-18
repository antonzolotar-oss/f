import { useForm } from "react-hook-form";
import { CheckCircle, User, Phone, Car, FileText } from "lucide-react";
import { useState } from "react";

interface RequestFormData {
  name: string;
  phone: string;
  carBrand: string;
  carModel: string;
  carColor: string;
  description: string;
}

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequestFormData>();

  const onSubmit = (data: RequestFormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Оставить заявку</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Заполните форму, и наш специалист свяжется с вами в ближайшее время
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 rounded-full p-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Заявка отправлена!</h2>
            <p className="text-neutral-700">
              Спасибо за обращение. Наш менеджер свяжется с вами в течение 15 минут.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="flex items-center gap-2 text-neutral-900 font-semibold mb-2">
                <User className="w-5 h-5" />
                Ваше имя *
              </label>
              <input
                {...register("name", { required: "Введите ваше имя" })}
                id="name"
                type="text"
                placeholder="Иван Иванов"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="flex items-center gap-2 text-neutral-900 font-semibold mb-2">
                <Phone className="w-5 h-5" />
                Номер телефона *
              </label>
              <input
                {...register("phone", {
                  required: "Введите номер телефона",
                  pattern: {
                    value: /^[\d\s+()-]+$/,
                    message: "Некорректный номер телефона"
                  }
                })}
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Car Info */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-neutral-900 font-semibold mb-2">
                <Car className="w-5 h-5" />
                Информация об автомобиле *
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <input
                    {...register("carBrand", { required: "Введите марку" })}
                    type="text"
                    placeholder="Марка"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  {errors.carBrand && (
                    <p className="text-red-500 text-sm mt-1">{errors.carBrand.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("carModel", { required: "Введите модель" })}
                    type="text"
                    placeholder="Модель"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  {errors.carModel && (
                    <p className="text-red-500 text-sm mt-1">{errors.carModel.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("carColor", { required: "Введите цвет" })}
                    type="text"
                    placeholder="Цвет"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  {errors.carColor && (
                    <p className="text-red-500 text-sm mt-1">{errors.carColor.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="flex items-center gap-2 text-neutral-900 font-semibold mb-2">
                <FileText className="w-5 h-5" />
                Описание поломки *
              </label>
              <textarea
                {...register("description", {
                  required: "Опишите проблему",
                  minLength: {
                    value: 10,
                    message: "Описание должно содержать минимум 10 символов"
                  }
                })}
                id="description"
                rows={5}
                placeholder="Опишите, что случилось с вашим автомобилем..."
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-4 px-6 rounded-lg transition-colors"
            >
              Отправить заявку
            </button>

            <p className="text-sm text-neutral-500 mt-4 text-center">
              * Все поля обязательны для заполнения
            </p>
          </form>
        )}

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-100 rounded-lg p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Время ответа</h3>
            <p className="text-neutral-700 text-sm">
              Мы перезвоним вам в течение 15 минут после получения заявки
            </p>
          </div>

          <div className="bg-neutral-100 rounded-lg p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Конфиденциальность</h3>
            <p className="text-neutral-700 text-sm">
              Ваши данные защищены и не передаются третьим лицам
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
