/**
 * Функция выводит курсы валют
 * @param {object} currencyRates массив с данными по курсам валют
 * @returns разметка блока актуальных курсов валют
 */
function ExchangeRates({ currencyRates }) {
  return (
    <div className="exchange-rates-container">
      <ul className="exchange-rates">
        {currencyRates.map((item, index) => {
          return (
            <li className="exchange-rates__item" key={index}>
              <a href="#0" className="exchange-rates__item-link">
                {item.currency}
              </a>
              <span className="exchange-rates__item-rate">
                {item.rate}
              </span>
            </li>
          );
        })}
      </ul>
      <a href="#0" className="Exchange-rates__more-rates">
        &#8230;
      </a>
    </div>
  );
}

export default ExchangeRates