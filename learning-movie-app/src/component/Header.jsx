import logo from '../assets/img/react.svg'
import '../style/header.css'

function Header(){
    return(
        <div className="w-full h-30 flex justify-center items-center">
            <img className='react-logo' src={logo} alt="react logo" />
        </div>
    )
}

export default Header