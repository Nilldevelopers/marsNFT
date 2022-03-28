import './SlideHead.css'
import Fire from './img/fire.png'
import Death from './img/Death.png'
import Yeah from './img/yeah.png'

const SlideHead = (props) => {
    return (
        <div className={`container ${props.className}`}>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-wrap flex-row">
                    <div className={`${props.icon}`}/>
                    <h3 className="ms-5 text-white">{props.head}</h3>

                </div>
                <div className="more-opt d-flex flex-row flex-wrap align-items-center justify-content-center">
                    <a href="/">
                        <span>
                        more
                   </span>
                        <span className="ms-2 h-20">
                        <i className="fa-solid fa-angle-right "/>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default SlideHead;