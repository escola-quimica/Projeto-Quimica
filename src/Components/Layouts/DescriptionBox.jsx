import { Button } from "../Layouts/Button";
import "./DescriptionBox.css";

const DescriptionBox = ({
  photo,
  alt,
  title,
  text,
  hasActions,
  className,
  style,
  ref,
  layoutType,
}) => {
  const isPhotoOnLeft = layoutType === "photo-left";

  return (
    <div
      className={`description-sigle ${className} ${
        isPhotoOnLeft ? "photo-left" : "photo-right"
      }`}
      style={style}
      ref={ref}
    >
      <div className="img-description">
        <img src={photo} alt={alt} className="round-image" />
      </div>
      <div className="text-description">
        <h1>{title}</h1>
        <p>{text}</p>
        {hasActions && <Button text="Entrar" className={"buttonDescription"} />}
      </div>
    </div>
  );
};

export default DescriptionBox;