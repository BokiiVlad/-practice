import ImageCard from "./ImageCard";

function ImageGallery({ gallery }) {
  return (
    <ul>
      {gallery.map((el) => {
        return (
          <li key={el.id}>
              <ImageCard card={el} />
          </li>
        );
      })}
    </ul>
  );
}
export default ImageGallery;
