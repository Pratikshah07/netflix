import '../index.css';


function Header(props){

    return(
        <div className="header_wrapper">
            <div className="header">
                <img className="img_logo" src={props.logo} alt="Logo"/>
                <button className="btn_header">Sign In</button>
            </div>


        </div>

    )
}

export default Header;