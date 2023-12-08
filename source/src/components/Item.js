
function Item({ laptop, addCart }){ 
    return (     
        <div>
            <div>
                <img src={laptop.image[0]} width="auto" height="300px" alt="image" />
            </div>
        </div>
    );
}

export default Item;