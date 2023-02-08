import Title from './Title';
import List from './List';

/**
 * Функция выводит список разделов виджета 'Карта германии'
 * @returns разметка заголовка виджета
 */
function Map({ title, items }) {
  return (
    <div className="map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}

export default Map;
