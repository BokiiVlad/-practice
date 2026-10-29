import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [erorr, setErorr] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gallery, setGallery] = useState([]);

  const getQuery = (query) => {
    setQuery(query);
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
                per_page:1,
                client_id: import.meta.env.VITE_API_KEY,
              },
            },
          );
          setGallery(response.data.results);
        }
      } catch (error) {
        setErorr(true);
      } finally {
        setLoader(false);
      }
    };
    getPictures();
  }, [query]);

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

  return (
    <section>
      {/* <LoadMoreButton/> */}
      <SearchBar onSubmit={getQuery} />
     {gallery.length > 0 ? <ImageGallery gallery={gallery}/> : <p>
     No images found</p>}
      {/* <Loader/> */}
      {/* <ErrorMessage/> */}
      {/* <ImageModal/> */}
    </section>
  );
}

export default App;
