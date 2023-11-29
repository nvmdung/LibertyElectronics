import Item3 from "./Item3";
import style from '../css/Home.css';

function Home1({avatars}){  
    return(
        <>
        <div >  
        <h1>Laptop and accessory</h1>
        <table>
            <tbody>
                {
                    avatars.map(a => (
                        <Item3 key={a.id} avatar={a}/>
                    ))
                }
            </tbody>
        </table>            
        </div>  
    </>
    )
}export default Home1;