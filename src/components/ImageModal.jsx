import Modal from "react-modal";

function ImageModal({ swapModal, srcObj: { user, urls },openModal }) {
  return (
    <Modal isOpen={openModal} onRequestClose={swapModal}>
      <img src={urls.regular} alt={user.name} />
    </Modal>
  );
}
export default ImageModal;
