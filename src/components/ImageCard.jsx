import css from "./ImageCard.module.css";

function ImageCard({ card: { urls, user } }) {
  return <img className={css.image} src={urls.small} alt={user.name} />;
}
export default ImageCard;
