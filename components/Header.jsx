export const Header = () => {
  return (
    <header className="fixed mt-5 flex justify-center w-full z-10 ">
      <nav>
        <ul className="flex gap-5 bg-white rounded-3xl p-5 drop-shadow-lg">
          <li>
            <a href="#about">О нас</a></li>
          <li>Мероприятия</li>
          <li>Адрес</li>
          <li>Отзывы</li>
        </ul>
      </nav>
    </header>
  );
}