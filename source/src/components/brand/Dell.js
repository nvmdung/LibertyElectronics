function DELL({dellProduct}){
    return(
        <div>
        <h1>DELL</h1>
        {dellProduct.map(del => (
            <div>
                {del.name}
                <div><img src={del.image[0]} width="10%" alt="image"/></div>
            </div>
        ))}
        </div>
    );
}
export default DELL;