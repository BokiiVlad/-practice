import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [erorr, setErorr] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gallery,setGallery] = useState([]);

 

  const getQuery = (query) => {
    setQuery(query);
  };

  useEffect(()=>{
    const getPictures = async () => {

      try {
        setLoader(true);
        setErorr(false);
        const response = await axios.get("https://api.unsplash.com/photos/?client_id={}");
        setGallery(response.data);
      } catch (error) {
        setErorr(true);
      } finally{
        setLoader(false);
      }
      } 
      getPictures();
  },[])

 

  return (
    <section>
      {/* <LoadMoreButton/> */}
      <SearchBar onSubmit={getQuery} />
      <ImageGallery />
      {/* <Loader/> */}
      {/* <ErrorMessage/> */}
      {/* <ImageModal/> */}
    </section>
  );
}

export default App;
