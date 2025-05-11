
import '../index.css';import { FaChevronRight } from "react-icons/fa6";


function Banner(){


    return(
        <div className="banner">
            <div className="badging-indicator">NEW!
                </div>
                <div className="banner-content">

                <span>Plans now start at
                    <span className="price-label">₹199</span>
                </span>
            </div>
          <div className='action-wrapper'>
                <button className="learn-more">Learn More</button>
                <span className="material-symbols-outlined">
                <FaChevronRight size={32}/>
                </span>
                </ div>
         </div>
       
     
        

    )
};

export default Banner