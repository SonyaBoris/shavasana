import Image from "next/image";
import AboutCarousel from "./AboutCarousel";

export const About = () => {

  return (
    <section id="about">
      <div className="flex lg:flex-row flex-col gap-5 items-center my-10">
        <div className="flex-1">
          <h2>Центр</h2>
          <p className="mb-3">Чем наш центр отличается от турбаз и других центров?
            В него заложено столько любви, что не описать словами. Каждый сантиметр здесь пропитан вниманием и любовью.
            Мы придерживаемся принципа, что все наполнение должно быть из экологически чистых материалов.</p>
          <p>Само здание построено из лиственницы, вся внутренняя отделка из лиственницы. Мебель вся сделана из дерева, причем основная часть сделана своими руками или руками на заказ
            Керамическая посуда тоже сделана вручную с молитвою. Это авторская работа в индийском стиле с образами Шивы и Ганеша.</p>
        </div>
        <div className="flex-1">
          <Image
            className="rounded w-auto h-auto"
            src="/images/fire.jpg"
            width={738}
            height={360}
            priority="true"
            alt="Огнище" />
        </div>
      </div>
      <AboutCarousel />
      <div className="flex my-10 gap-5 items-center flex-col lg:flex-row">
        <div className="w-full">
          <h2>Детокс программы</h2>
          <p className="mb-4">Мы будем проводить программы очищения организма природными средствами!</p>
          <p className="mb-4">С удовольствием будем сотрудничать с мастерами, которые будут приезжать со своими группами</p>
          <p>Еще здесь есть возможность помочь нашей планете- посадить дерево. В этом году начинаем проектировать священную рощу.
            Рядом находится питомник растений, где можно купить саженец и посадить его, создав новую рощу.</p>
        </div>
        <div className="w-full">
          <Image className="rounded" src="/images/detocs.jpg" width={700} height={465} alt="Изображение с медитацией" loading="lazy" />
        </div>
      </div>
      <div className="flex my-10 gap-5 items-center flex-col-reverse lg:flex-row">
        <div className="w-full">
          <Image className="rounded" src="/images/detocs2.jpg" width={700} height={465} alt="Изображение с едой" loading="lazy" />
        </div>
        <div className="w-full">
          <h2>Живое питание</h2>
          <p className="mb-4">У нас живое ( биогенное ) питание.
            Кухня вегетарианская, можем готовить веганские и сыроедные блюда.
            Во первых все выращенно на нашей земле, без добавления химикатов и удобрений, это в наше время очень важно. Во-вторых мы умеем это вкусно готовить!
          </p>
          <p>Витграсс, проростки, микрозелень, квасы, льняные хлебцы, продукты квашения - это все необходимо для правильного пищеварения. И это все мы тоже делаем сами и включаем в наше ПП меню.</p>
        </div>
      </div>
    </section>
  );
}
