import ImageCard from "./ImageCard";


function ImageGallery() {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          <ImageCard />
        </div>
      </li>
    </ul>
  );
}
export default ImageGallery;
