import { useNavigate } from "react-router-dom"
import styles from './Navbar.module.css'
import Logo from '../../assets/img/logo.png'

function Navbar(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('/register')
    }
    function handleClickLogin(){
        navigate('/login')
    }
    function handleClickHome(){
        navigate('/')
    }
    return(
        <nav class="navbar navbar-expand-sm bg-warning d-flex justify-content-between ">
            <div className={styles.navbar_logo} >
                <img src={Logo} alt="Get A Pet" />
                <h2 class="text-primary">Get A Pet</h2>
            </div>
            <div class="mx-3">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a href="#"  onClick={handleClick}>Register</a>
                    </li>
                    <li class="nav-item">
                    <a href="#" onClick={handleClickLogin} >Login</a>
                    </li>
                    <li class="nav-item">
                    <a href="#" onClick={handleClickHome}>Home</a>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar