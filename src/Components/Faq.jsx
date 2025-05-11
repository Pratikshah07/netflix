import '../index.css';
import { FaChevronRight, FaPlus } from "react-icons/fa6";

function Faq(){

    return(
        <div className="faq-container">
        <div>
            <h2 className="faq-title">
                Frequently Asked Questions
            </h2>
        </div>
            <div className="faqlist-container">
                <ul>
                    <li className="list-faq"><h3 className="h3-faq">What is Netflix?<span id="i-1" className="material-symbols-outlined">
                        <FaPlus color='white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">How much does Netflix cost?<span id="i-2" className="material-symbols-outlined">
                        <FaPlus className='text-white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">What's different on Basic with adverts?<span id="i-3" className="material-symbols-outlined">
                        <FaPlus className='text-white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">Where can I watch?<span id="i-4" className="material-symbols-outlined">
                        <FaPlus className='text-white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">How do I cancel?<span id="i-5" className="material-symbols-outlined">
                        <FaPlus className='text-white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">What can I watch on Netflix?<span id="i-6" className="material-symbols-outlined">
                       <FaPlus className='text-white'/>
                        </span></h3></li>
                    <li className="list-faq"><h3 className="h3-faq">Is Netflix good for children?<span id="i-7" className="material-symbols-outlined">
                       <FaPlus className='text-white'/>
                    </span></h3></li>
                </ul>
                    <p className="faq-par">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-container">
                        <input className="input-hero2" placeholder="Email address" />
                    <button className="get-started">Get Started
                     <FaChevronRight size={20} className="ml-2" />
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    )

}
export default Faq;