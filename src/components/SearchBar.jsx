import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
 
  const handleSubmit = (e) => {
    const form = e.target;
    if (!form.elements.query.value.trim()) {
      toast.error("This didn't work.");
    }
    e.preventDefault();
    onSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <header>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
export default SearchBar;
