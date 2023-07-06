import './card.css'
import '../App.css'
function Card(props){
return(
    <div className='cparent'>
     <div className='csegemnt ctwelve'>
        <div>
    <img className='cardimgstyles'  src={props.imgSrc}/>
    </div>
    </div>
    <div className='csegment conetoeight'>
    <h1 className='styleshcard'>{props.Heading}</h1>
    </div>
    <div className='csegment cninetotwelve'>
     <h2 className='stylesCprice'>{props.Price}</h2>
     </div>
     <div className='csegment cfour'>
    <p>{props.description}</p>
    </div>
    <h3 className='csegment conetoeight'>order a delivery</h3>
    </div>
)
}
export default Card;