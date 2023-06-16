import News from './components/News';
import ExchangeRates from './components/ExcgangeRates';
import Adt from './components/Adt';
import AdtImg from './components/AdtImg';
import Search from './components/Search';
import Banner from './components/Banner';
import Widgets from './components/Widgets';
import Weather from './components/Widgets/Weather';
import Map from './components/Widgets/Map';
import Ether from './components/Widgets/Ether';
import Favorites from './components/Widgets/Favorites';
import TVProgram from './components/Widgets/TVProgram';

function App() {
  const newsСategories = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];

  const newsNames = [
    'Путин упростил получение автомобильных номеров',
    'В команде Зеленского раскрыли план реформ на Украине',
    '«Турпомощь» прокомментировала гибель десятков россиян в Анталье',
    'Суд закрыл дело Демпартии США против России>',
    'На Украине призвали создать ракеты для удара по Москве',
  ];

  const currencyRates = [
    {
      currency: 'usd moex',
      rate: '+0,09',
    },
    {
      currency: 'eur moex',
      rate: '+0,14',
    },
    {
      currency: 'нефть',
      rate: '+1.63%',
    },
  ];

  const searchСategories = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
  ];

  const mapItems = [
    {
      content: 'Расписание',
    },
  ];

  const ether = [
    {
      name: 'Управление как искусство',
      source: 'Успех',
    },
    {
      name: 'Ночь. Мир в это время',
      source: 'earthTV',
    },
    {
      name: 'Андрей Возн...',
      source: 'Совершенно секретно',
    },
  ];

  const favoritePages = [
    {
      term: 'Недвижимость',
      definition: 'о сталинках',
    },
    {
      term: 'Маркет',
      definition: 'люстры и светильники',
    },
    {
      term: 'Авто.ру',
      definition: 'привод 4х4 до 500 000',
    },
  ];

  const TVPrograms = [
    {
      time: '02:00',
      name: 'ТНТ.best',
      source: 'ТНТ International',
    },
    {
      time: '02:15',
      name: 'Джинглики',
      source: 'Карусель INT',
    },
    {
      time: '02:25',
      name: 'Наедине',
      source: 'Первый',
    },
  ];

  return (
    <>
      <header className="app-header">
        <div className="app-wrapper">
          <div className="header">
            <News newsCategories={newsСategories} newsNames={newsNames} />
            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Adt
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <AdtImg
              containerClass="adt__image-container"
              imgClass="adt-image"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Plug"
            />
          </Adt>
        </div>
      </header>

      <div className="app-main">
        <div className="app-wrapper">
          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Banner
            containerClass="banner"
            imgClass="banner-image"
            src="https://images.unsplash.com/photo-1638316132295-7b5866fda5d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Plug"
          />
        </div>
      </div>

      <footer className="app-footer">
        <div className="app-wrapper">
          <Widgets>
            <Weather
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <Map title="Карта Германии" items={mapItems} />
            <Ether title="Эфир" items={ether} />
            <Favorites
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgram
              title="Телепрограмма"
              items={TVPrograms}
            />
          </Widgets>
        </div>
      </footer>
    </>
  );
}

export default App;
