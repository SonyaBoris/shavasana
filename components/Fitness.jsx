import Image from "next/image";

const Fitness = () => {
  return (
    <section >
      <h2>Выездные обучения</h2>
      <p className="mb-3">
        Мы рады сообщить всем, что наша школа обучения фитнес инструкторов Bella Vita
        вводит новый формат выездных обучений
      </p>
      <p className="mb-3">Самое главное преимущество- это полное погружение в обучающий процесс. Ты никуда не торопишься, находишься в состоянии здесь и сейчас. Свободное время проводишь в красивом месте наедине с природой и питаясь полезной свежей едой, приготовленной с радостью и любовью </p>
      <div className="flex flex-col gap-10 justify-between my-10">
        <div className="my-10">
          <h3 className="mb-3">Названия курсов:</h3>
          <ul className="flex flex-col gap-2 mb-5">
            <li>Инструктор групповых программ ( аэробика, степ, силовые, функциональный тренинг)</li>
            <li>Инструктор Пилатес</li>
            <li>Инструктор Йоги и йоги в гамаках</li>
            <li>Занятия для беременных</li>
            <li>Занятия для пожилых людей</li>
            <li>Стретчинг</li>
            <li>Латина</li>
          </ul>
          <a className='bg-[var(--accent-color)] text-white p-4 rounded-2xl' href=" https://t.me/Shavasanaaaa">Оставить заявку</a>
        </div>
        <div className="flex justify-between mb-10">
          <Image
            className="rounded max-w-[30%] h-full lg:block hidden"
            width={738}
            height={360}
            src="/images/fit6.jpg"
            priority="true"
            alt="Тренировка" />
          <Image
            className="rounded w-full lg:max-w-[30%] h-full"
            width={738}
            height={360}
            src="/images/fit4.jpg"
            priority="true"
            alt="Тренировка" />
          <Image
            className="rounded  max-w-[30%] h-full lg:block hidden"
            width={738}
            height={360}
            src="/images/fit5.jpg"
            priority="true"
            alt="Тренировка" />
        </div>
      </div>
    </section>
  );
}

export default Fitness;