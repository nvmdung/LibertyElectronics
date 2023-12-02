function GIGABYTE({gigabyteProduct}){
    return(
        <div>
        <h1>MSI</h1>
        {gigabyteProduct.map(pro => (
            <div>
                {pro.name}
                <div><img src={pro.image[0]} width="10%" alt="image"/></div>
            </div>
        ))}
        </div>
    );
}
export default GIGABYTE;