import res from '../Images/restauranfood.jpg';
import './gridtwelve.css';
import '../App.css';
function Header(){
    return(
    <header className='parent'>
    <div className='segment four'>
    <h1 className='stylesh1'>Little Lemon</h1>
    </div>
    <div className='segemnt four'>
    <h2 className='stylesh2'>Chicago</h2>
    </div>
    <img className='segment ninetotwelve' src={res} alt="restaurant" width="55%" />
    <div className='segment four'>
    <p className='stylesp'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    Lorem ipsum Lorem ipsum Lorem  ipsum Lorem ipsum</p></div>
    <div className='segment four'>
    <button className='stylesbutton'><center><h3>Reserve a table</h3></center></button>
    </div>
</header>

    )
}
export default Header;