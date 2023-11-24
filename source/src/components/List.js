import Item from "./Item";

function List({laptops, onDelete}){
    return(
        <>
            <div className='container'>  
            <h1>List laptop</h1>
            <table className='table table-hover'>
                <tbody>
                    {
                        laptops.map(d => (
                            <Item key={d.id} laptop={d} onDelete={onDelete}/>
                        ))
                    }
                </tbody>
            </table>            
            </div>  
        </>
    );
}

export default List;