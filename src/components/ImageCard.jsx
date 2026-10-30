import css from "./ImageCard.module.css";

function ImageCard({ card: { urls, user }, onClick }) {
  return (
    <img
      className={css.image}
      src={urls.small}
      alt={user.name}
      onClick={onClick}
    />
  );
}
export default ImageCard;
