import { Link } from "react-router-dom";
import '../../styles/Style.scss'

export default function Error404(){
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups ! La page que vous demander n'existe pas.</p>
            <Link className="link-style" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}