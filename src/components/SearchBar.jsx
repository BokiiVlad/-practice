import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.query.value.trim();
    if (!value) {
      toast.error("This didn't work.");
      return;
    }
    onSubmit(value);
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
