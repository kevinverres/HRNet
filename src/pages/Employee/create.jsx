import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../service/hrnetSlice";
import { useNavigate } from "react-router-dom";
import Selector from "../../component/Selector";
import Date from "../../component/Date";

export default function Create({logo, alt}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state, department} = useSelector(state => state.hrnet);
    function move() {
        navigate("/")
    }

    function saveEmployee(e) {
        e.preventDefault();
        const firstName = e.target[0].value
        const lastName = e.target[1].value
        const dateOfBirth = e.target[2].value
        const startDate = e.target[3].value
        const street = e.target[5].value
        const city = e.target[6].value
        const state = e.target[7].value
        const zipCode = e.target[8].value
        const department = e.target[9].value
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
        // console.log(employee)
        dispatch(addEmployee(employee))
        navigate("/")
    }
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
                    <input required id="date-of-birth" type="text" />

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
        </>
    )
}