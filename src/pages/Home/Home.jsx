import React from "react";
import Card from "../../component/Card";

export default function Home({logo, alt, logoAdd, logoList, alt2}) {
    return (
    <>
        <div className="title">
            <img src={logo} alt={alt} />
        </div>
        <div className="container">
            <h1>Bienvenue sur votre outil de gestion <span>HRnet</span> !</h1>
            <div className="container-button">
                <Card logo={logoAdd} alt={alt2} title={"Créer un employé"}/>
                <Card logo={logoList} alt={alt2} title={"Voir la liste des employés"}/>
            </div>
            <p className="version">Powered by React <span>{React.version}</span></p>
        </div>
        {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </>
)}