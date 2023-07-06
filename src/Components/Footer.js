import logo from '../Images/Logo.svg';
import './gridtwelve.css';
import '../App.css'
function Footer(){
    return(
        <footer>
        <div  className='parent'> 
        <div className='segment onetotwo'>
        <img src={logo}/>
        </div>
        <div className='segment threetofour'>
        <li className='linone'><a href="">HOME</a></li>
        <li className='linone'><a href="">ABOUT</a></li>
        <li className='linone'><a href="">MENU</a></li>
        <li className='linone'><a href="">RESERVATIONS</a></li>
        <li className='linone'><a href="">ORDER ONLINE</a></li>
        <li className='linone'><a href="">LOGIN</a></li>
        </div>
        <div className='segment fivetosix'>
            <li className='linone'><a href="">Address</a></li>
            <li className='linone'><a href="">Phone Number</a></li>
            <li className='linone'><a href="">Email</a></li>
            </div>
        <div className='segment seventoeight'>
            <li className='linone'><a href="">FaceBook</a></li>
            <li className='linone'><a href="">Instagram</a></li>
        </div>
     </div>
        </footer>
     
)
}
export default Footer;