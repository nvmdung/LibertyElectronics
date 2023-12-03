function Lenovo({lenovoProduct}){
    return(
        <div>
        <h1>LENOVO</h1>
        {lenovoProduct.map(pro => (
            <div>
                {pro.name}
                <div><img src={pro.image[0]} width="10%" alt="image"/></div>
            </div>
        ))}
        </div>
    );
}
export default Lenovo;