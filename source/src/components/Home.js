import Item2 from "./Item2";
import style from '../css/Home.css';

function Home({laptops}){  
    return(
        <>
        <div >  
        <h1>Welcome to Page</h1>
        <table>
            <tbody className='container'>
                {
                    laptops.map(d => (
                        <Item2 key={d.id} laptop={d}/>
                    ))
                }
            </tbody>
        </table>            
        </div>  
    </>
    )
}export default Home;