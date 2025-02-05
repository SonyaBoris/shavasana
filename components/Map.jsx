import React from 'react';

const Map = () => {
  return (
    <div className="relative overflow-hidden mb-10">
      <a 
        href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" 
        className="absolute text-gray-300 text-xs top-0"
      >
        Яндекс Карты
      </a>
      <a 
        href="https://yandex.ru/maps/11131/samara-oblast/house/naberezhnaya_ulitsa_59/YEAYdQNmQE0EQFtpfX1zdntrZQ==/?ll=49.341103%2C53.129197&utm_medium=mapframe&utm_source=maps&z=16.66" 
        className="absolute text-gray-300 text-xs top-4"
      >
        Набережная улица, 59 — Яндекс Карты
      </a>
      <iframe 
        src="https://yandex.ru/map-widget/v1/?ll=49.341103%2C53.129197&mode=whatshere&whatshere%5Bpoint%5D=49.346940%2C53.127736&whatshere%5Bzoom%5D=17&z=16.66" 
        width="560" 
        height="300" 
        frameBorder="1" 
        allowFullScreen={true} 
        className="relative w-full"
      ></iframe>
    </div>
  );
};

export default Map;
