function Nav(props){
    return(
    <nav>
        <ul>
            <img src={props.img}/>
            <li><a href=""/>HOME</li>
            <li><a href=""/>ABOUT</li>
            <li><a href=""/>MENU</li>
            <li><a href=""/>RESERVATIONS</li>
            <li><a href=""/>ORDER ONLINE</li>
            <li><a href=""/>LOGIN</li>
        </ul>
    </nav>
    )
}
export default Nav;
