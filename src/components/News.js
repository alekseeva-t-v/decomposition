/**
 * Функция выводит навигацию по новостям и список новостей
 * @param {object} newsCategories массив категорий новостей
 * @param {object} newsNames массив новостей, в массив можно поместить ссылки на иконки для их отображения перед заголовками
 * @returns разметка блока навигации по новостям и список новостей
 */
function News ({ newsCategories, newsNames }) {
  return (
    <div className="news">
      <nav className="news-nav">
        <ul className="news-nav-menu">
          {newsCategories.map((category, index) => {
            return (
              <li
                className={`news-nav-menu__item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <a href="#0" className="news-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="news-current-datetime">31 июля, среда 02:32</span>
      </nav>
      <div className="news-content">
        <ul>
          {newsNames.map((name, index) => {
            return (
              <li className="News-content__item" key={index}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default News