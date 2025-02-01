import Image from "next/image";

export const Address = () => {
  return (
    <section className="flex gap-6">
      <Image src="/images/center.jpg" width={600} height={901.88} alt="Фото дома" />
      <div>
        <h2>Адрес</h2>
        <p>Мы находимся в Самарской области, Безенчукском районе, селе Владимировка по улице Набережной 59</p>
        <p>Из Самары можно добраться <br /> по Волге 60км
          <br />На авто 110 км
          <br />На электричке до Безенчука 1 час и далее на такси 20-25 мин</p>
      </div>
    </section>
  );
}