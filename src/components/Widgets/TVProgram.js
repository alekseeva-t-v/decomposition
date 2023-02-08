import Title from "./Title";
import TVProgramsList from "./TVProgramsList";

/**
 * Функция выводит список ТВ программ
 * @returns разметка блока виджета программы передач
 */
function TVProgram({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

export default TVProgram