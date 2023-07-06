import './gridtwelve.css';
import '../App.css';
import Card from './Card.js';
import leamonD from '../Images/lemondessert.jpg'
import greekS from '../Images/greeksalad.jpg'
import bruchetta from '../Images/bruchetta.svg'
function Main(){
    return(
        <main className='parent'>
            <div className='segment four'>
                <h2 className='stylesh4'>Specials</h2>
            </div>
            <div className='segment ninetotwelve'>
                <button className='stylesbutton'><h3>Online Menu</h3></button>
            </div>
            <div className='segment four'>
                <Card imgSrc= {greekS} Heading='Greek' Price='$5.00' description='fdslfopdfoghjgfhjgfhjfgjgfj
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf'/>
            </div>
            <div className='segment fivetoeight'>
                <Card imgSrc= {bruchetta} Heading='Brochette' Price='$5.00' description='fdslfopdfoghjgfhjgfhjfgjgfj
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf'/>
            </div>
            <div className='segment ninetoeleven'>
                <Card imgSrc= {leamonD} Heading='Lemon dessert' Price='$5.00' description='fdslfopdfoghjgfhjgfhjfgjgfj
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf
                fgjfgjfgdopfkdofkokfsdfodkf'/>
            </div>


        </main>
)
}
export default Main;