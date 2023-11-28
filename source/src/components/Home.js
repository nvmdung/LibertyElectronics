import Item2 from "./Item2";
import style from '../css/Home.css';

function Home({avatars}){  
    return(
        <>
        <div >  
        <h1>Trang chuyên bán phụ kiện và laptop uy tín</h1>
        <table>
            <tbody>
                {
                    avatars.map(a => (
                        <Item2 key={a.id} avatar={a}/>
                    ))
                }
            </tbody>
        </table>            
        </div>  
    </>
    )
}export default Home;