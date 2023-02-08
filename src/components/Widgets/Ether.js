import Title from "./Title";
import TVProgramsList from "./TVProgramsList"
/**
 * Функция выводит блок с телепрограммой
 * @returns разметка блока виджета программы передач
 */
function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

export default EtherWidget;