// Import CSS vào component Search
import '../css/Search.css';

function Search({ value, onSearch }) {
  return (
    <div className='container-search'>
      <input
        placeholder="enter name to search"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      {/* Ví dụ sử dụng FontAwesome icon */}
      <i className="icon-search fas fa-search"></i>
    </div>
  );
}

export default Search;