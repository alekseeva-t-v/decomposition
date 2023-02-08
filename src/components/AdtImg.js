/**
 * Функция выводит картинку для рекламного блока
 * @returns разметка блока с картинкой для рекламного объявления
 */
function AdtImg(props) {
  const { containerClass, imgClass, src, alt } = props;

  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

export default AdtImg;
