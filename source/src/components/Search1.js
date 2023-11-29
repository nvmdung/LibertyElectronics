function Search1({value, onSearch1}){
    return(
        <div>
            <input placeholder="Enter name to search" value={value} 
                onChange={(e) => onSearch1(e.target.value)}/>
        </div>
    );
}

export default Search1;