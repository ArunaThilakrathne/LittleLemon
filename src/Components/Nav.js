import './gridtwelve.css'
function Nav(props){
    return(
        <div className="parent">
        <nav className='segment twelve'>
        <ul>
     
           <img src={props.img} alt="logo"/>
            <li className="linone"><a href="">HOME</a></li>
            <li className="linone"><a href="">ABOUT</a></li>
            <li className="linone"><a href="">MENU</a></li>
            <li className="linone"><a href="">RESERVATIONS</a></li>
            <li className="linone"><a href="">ORDER ONLINE</a></li>
            <li className="linone"><a href="">LOGIN</a></li>
       
        </ul>
    </nav>
    </div>

    )
}
export default Nav;
