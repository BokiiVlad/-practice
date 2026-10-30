import ImageCard from "./ImageCard";

function ImageGallery({ gallery,getSrc,swapModal }) {
  return (
    <ul>
      {gallery.map((el) => {
        return (
          <li key={el.id}>
              <ImageCard card={el} onClick={()=>{getSrc(el);swapModal()}}/>
          </li>
        );
      })}
    </ul>
  );
}
export default ImageGallery;
