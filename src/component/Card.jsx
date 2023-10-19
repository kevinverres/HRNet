import { useNavigate } from "react-router-dom";

/**
 * 
 * @param {{logo: string, alt: string, title: string}} props 
 * @returns HTMLElement
 */
export default function Card({logo, alt, title}) {
    const navigate = useNavigate();
    function move(e) {
        // console.log(e.target.parentElement.childNodes[1].innerHTML)
        const text = e.target.parentElement.childNodes[1].innerHTML;
        if (text === "Créer un employé") {
            navigate("/create")
        } else if (text === "Voir la liste des employés") {
            navigate("/list")
        }
    }
    return (
        <button className="card-button" onClick={move}>
            <img src={logo} alt={alt} />
            <h1>{title}</h1>
        </button>
    )
}