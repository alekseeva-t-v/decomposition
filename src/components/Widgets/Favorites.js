import Title from "./Title";
import DefinitionsList from "./DefinitionsList";

/**
 * Функция выводит блок часто посещаемых страниц
 * @returns разметка блока виджета популярных страниц
 */
function FavoritesWidget({ title, items }) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}

export default FavoritesWidget;
