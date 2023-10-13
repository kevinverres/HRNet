import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../service/hrnetSlice";
import { useNavigate } from "react-router-dom";
import Selector from "../../component/Selector";
import Date from "../../component/Date";
import { Modal } from "modal-library-kv";
import { useEffect, useState } from "react";

export default function Create({logo, alt}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state, department} = useSelector(state => state.hrnet);
    const [openModal, setOpenModal] = useState(false)
    function move() {
        navigate("/")
    }
    /**
     * Permet d'enregistrer un nouvel utilisateur
     * @param {HTMLElement} HTMLElement L'élément html contenant les informations
     */
    function saveEmployee(e) {
        e.preventDefault();
        let firstName = e.target[0].value
        let lastName = e.target[1].value
        let dateOfBirth = e.target[2].value
        let startDate = e.target[3].value
        let street = e.target[5].value
        let city = e.target[6].value
        let state = e.target[7].value
        let zipCode = e.target[8].value
        let department = e.target[9].value
        const form = document.forms["create-employee"];
        const employee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            startDate: startDate,
            department: department,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode
        };
        
        dispatch(addEmployee(employee))
        form.reset()
        setOpenModal(true);
    }
    useEffect(() => {
        if (openModal) {
            window.addEventListener('click', () => setOpenModal(false));
            return () => window.removeEventListener('click', () => setOpenModal(false));
        }
    });
    return (
        <>
            <div className="container-create">
                <img src={logo} alt={alt} />
                <form action="#" id="create-employee" onSubmit={saveEmployee}>
                    <h2>Create Employee</h2>
                    <label>First Name</label>
                    <input required type="text" id="first-name" />

                    <label>Last Name</label>
                    <input required type="text" id="last-name" />

                    <label>Date of Birth</label>
                    <Date name={"date"} id={"date-of-birth"}/>

                    <label>Start Date</label>
                    <Date name={"date"} id={"start-date"}/>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label>Street</label>
                        <input required id="street" type="text" />

                        <label>City</label>
                        <input required id="city" type="text" />

                        <label>State</label>
                        <Selector name={"state"} id={"state"} data={state}/>

                        <label>Zip Code</label>
                        <input required id="zip-code" type="number" />
                    </fieldset>

                    <label>Department</label>
                    <Selector name={"department"} id={"department"} data={department}/>
                    <input className="btn-createEmployee" type="submit" value="save" />
                </form>
                <button onClick={move}>Retour</button>
            </div>
            {openModal ? <Modal /> : null}
        </>
    )
}