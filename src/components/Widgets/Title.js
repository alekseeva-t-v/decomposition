/**
 * Функция выводит заголовки виджетов
 * @returns разметка заголовка виджета
 */
function Title({ title }) {
  return (
    <h3 className="widget-title">
      <a href="#0" className="widget-title__link">
        {title}
      </a>
    </h3>
  );
}

export default Title;