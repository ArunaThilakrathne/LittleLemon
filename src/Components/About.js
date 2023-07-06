import './gridtwelve.css';
import '../App.css';
import chefsA from '../Images/Mario and Adrian A.jpg';
import chefsB from '../Images/Mario and Adrian b.jpg';
function About(){
    return(
        <div className='parent'>
        <div className='segment four'>
        <h1 className='stylesh5'>Little Lemon</h1>
        </div>
        <div className='segemnt eighttoeleven' style={{gridRowStart:'3' , gridRowEnd:'6'}}>
        <img  src={chefsB} alt="restaurant" width="55%" />
        </div>
        <div className='segemnt ninetotwelve' style={{gridRowStart:'1' , gridRowEnd:'4'}}>
        <img  src={chefsA} alt="restaurant" width="55%"/>
        </div>
        <div className='segemnt four'>
    <h2 className='styleshb' >Chicago</h2>
    </div>
        <div className='segment four'>
        <p className='stylespb'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem  ipsum Lorem ipsum</p></div>
    </div>
)
}
export default About;