/**
 * Функция выводит блок с простым списком
 * @returns разметка блока списка
 */
function List({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ content }, index) => {
        return (
          <li className="widget-list__item" key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}

export default List