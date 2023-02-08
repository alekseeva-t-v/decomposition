/**
 * Функция выводит блок рекламного баннера
 * @returns разметка блока с баннером
 */
function Banner(props) {
  const {containerClass, imgClass, src, alt } = props;

  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

export default Banner;