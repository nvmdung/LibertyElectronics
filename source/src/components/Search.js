// Import CSS vào component Search
import '../css/Search.css';

function Search({ onSearch }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <input type="text" placeholder="Search..." onChange={handleSearch} />
  );
}
export default Search;