import { Link } from "react-router-dom";
import style from '../css/Home.css'

function Ad(){
    return(
        <div>
        <Link to="/home"><button className="X"><img src="https://media.istockphoto.com/id/1188413565/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-x-tr%C3%B2n-m%C3%A0u-%C4%91%E1%BB%8F-n%C3%BAt-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ch%C3%A9o-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=2048x2048&w=is&k=20&c=DvghRu1n7oBP-whTBQ-8Hsuom48R-zggtmSeQb4Tdsw=" width="15px" height="auto"/></button></Link>
      <img src="https://laptopre.vn/upload/setting/setting-1690604689.jpg"/>
      <img src="https://images.viblo.asia/full/0dd306a2-831f-433b-96a0-827725ca37a7.png"/>
      
    </div>

    )
    
}export default Ad;