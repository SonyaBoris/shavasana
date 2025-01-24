export const Header = () => {
  return (
    <header className="fixed mt-5 flex justify-center w-full">
      <nav>
        <ul className="flex gap-5 bg-white rounded-3xl p-5">
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