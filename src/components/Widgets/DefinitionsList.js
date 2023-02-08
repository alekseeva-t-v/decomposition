/**
 * Функция выводит блок со списком-определений
 * @returns разметка блока списка в формате: понятие - определение
 */
function DefinitionsList({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li  className="widget-list__item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
  );
}

export default DefinitionsList;