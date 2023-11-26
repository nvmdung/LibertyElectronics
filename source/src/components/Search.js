function Search({value, onSearch}){
    return(
        <div>
            <input placeholder="enter name to search" value={value} 
                onChange={(e) => onSearch(e.target.value)}/>
        </div>
    );
}

export default Search;