import { useNavigate } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
function Login(){
    const navigate = useNavigate()
    
    function handleClick(){
        navigate('/')
    }
    return(
        <section className="mx-3 mt-4">
        <h1 className="meutitulo">Página de Login</h1>
        </section>
    )
}

export default Login

// versão do ECMAScript 