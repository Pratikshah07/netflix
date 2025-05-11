import tv from "../images/tv.png"
import device from "../images/device-pile.png"
import children from "../images/children.png"
import mobile from "../images/mobile.jpg"
import small from "../images/small.png"
import '../index.css';


function Section(){
  return(
    <div>
        <hr/>
        <div className="section">
               
            <div className="section-content"> 
                <h1>Enjoy on your TV.</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='img-container'>
                <img src={tv} alt="Television" className="img"/>
                </div>
        </div>  
        <hr/>
        <div className="section">
            <div className='img-container'>
                <img src={device} alt="device" className="img"/>
                </div>
          <div className="section-content"> 
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</p>
            </div>
           
        </div>
        <hr/>

        <div className="section">
               
            <div className="section-content"> 
                <h1>Create profiles for children.</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them – free with your membership.

                </p>
            </div>
            <div className='img-container'>
            <img src={children} alt="childen cartoons" className="img"/>
            </div>
        </div>
        <hr/>

        <div className="section">
            <div className='img-container'>
                
              <img src={mobile} alt="mobile" className="img"/>
              <div><img src={small} className="small-img" alt="banner"></img></div>
            </div>
          <div className="section-content"> 
                <h1>Download your programmes to watch offline.</h1>
                <p>Available on all plans except Basic with adverts.</p>
            </div>
           
        </div>
        <hr/>
 </div>

)
}

export default Section;