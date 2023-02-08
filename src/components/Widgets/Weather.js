import Title from "./Title";

/**
 * Функция выводит погоду на текущий день
 * @returns разметка блока виджета-погоды
 */
function Weather(props) {
  const {
    title,
    averageTemperature,
    morningTemperature,
    daytimeTemperature,
  } = props;

  return (
    <div className="weatherw">
      <Title title={title} />
      <div className="weather-degrees">
        <span className="weather-degrees__average">
          {averageTemperature}&deg;
        </span>
        <div className="weather-degrees__in-detail">
          <span className="weather-degrees__in-detail-morning">
            Утром {morningTemperature},
          </span>
          <span className="weather-degrees__in-detail-afternoon">
            днём {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Weather