import './card.css';
import '../App.css';
function scard(props){
    return(
        <div className="csparent">
            <div className='csegment cfour'>
            <p className='stylesh3b'>Rating{props.rating}</p>
            </div>
            <div className='scardImg' >
            <div className='csegment cfour'>
            <img src='' alt='profile image'/>
            </div>
            </div>
            <div className='csegment csix'>
            <p className='stylesh3b'>Name{props.name}</p>
            </div>
            <div className='csegment twelve'>
            <p className='stylesh3b'>Review{props.review}</p>
            </div>

        </div>
    )
}

export default scard;