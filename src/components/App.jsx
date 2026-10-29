import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [erorr, setErorr] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);

  const getQuery = (query) => {
    setQuery(query);
    setPage(1);
    setGallery([]);
  };

  const addPage = () => {
    setPage((pageNow) => pageNow + 1);
  };

  useEffect(() => {
    const getPictures = async () => {
      try {
        setLoader(true);
        setErorr(false);

        if (query.trim()) {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: query,
                page: page,
                per_page: 2,
                client_id: import.meta.env.VITE_API_KEY,
              },
            },
          );
          setGallery((prevGall)=>[...prevGall,...response.data.results]);
        }
      } catch (error) {
        setErorr(true);
      } finally {
        setLoader(false);
      }
    };
    getPictures();
  }, [query, page]);

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

  return (
    <section>
      <SearchBar onSubmit={getQuery} />
      {erorr && <ErrorMessage />}
      {gallery.length > 0 && <ImageGallery gallery={gallery} />}
      {loader && <Loader />}
      {gallery.length > 0 && !loader && (
        <LoadMoreBtn onClick={addPage} />
      )}
      {/* <ImageModal/> */}
    </section>
  );
}

export default App;
