import './gridtwelve.css';
import '../App.css';
import Scard from './Scard.js'
function Testimonials(){
    return(
        <div className='scbackground'>
        <div className='parent'>
            <div className='center'>
                <p className='stylesh4'>Testimonials</p>
            </div>
            <div className='segment four'>
            <Scard/>
            </div>
            <div className='segemnt fivetoeight'>
            <Scard/>
            </div>
            <div className='segment ninetoeleven'>
            <Scard/>
            </div>
        </div>
        </div>
)
}
export default Testimonials;