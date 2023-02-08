/**
 * Функция выводит рекламное объявление, которое включает название, описание и опционально картинку
 * @returns разметка блока рекламы
 */
function Adt(props) {
  const { title, description, children } = props;

  return (
    <div className="adt">
      {children}
      <h3 className="adt-title">
        <a href="#0" className="adt-title__link">
          {title}
        </a>
      </h3>
      <p className="adt-description">
        {description}
      </p>
    </div>
  );
}

export default Adt