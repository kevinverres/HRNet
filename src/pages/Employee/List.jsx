import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editShowEntries, editFilteredEmployee, resetFilteredEmployee } from "../../service/hrnetSlice";

export default function List() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {employees, showEntries, filteredEmployees} = useSelector(state => state.hrnet);
    
    function move() {
        navigate("/")
    }
    function GoToPrevious() {
        alert("soon")
    }
    function GoToNext() {
        alert("soon")
    }
    function Showing(e) {
        dispatch(editShowEntries(e.target.value))
    //    console.log(e.target.value)
    }
    function search(e) {
        let search = e.target.value.toLowerCase();
        dispatch(resetFilteredEmployee())
        for (let i = 0; i < employees.length; i++) {
            const element = employees[i];
            const firstName = element.firstName.toLowerCase();
            const lastName = element.lastName.toLowerCase();
            const startDate = element.startDate.toLowerCase();
            const department = element.department.toLowerCase();
            const dateOfBirth = element.dateOfBirth.toLowerCase();
            const street = element.street.toLowerCase();
            const city = element.city.toLowerCase();
            const state = element.state.toLowerCase();
            const zipCode = element.zipCode.toLowerCase();
            if (firstName.includes(search) || lastName.includes(search) || startDate.includes(search) || department.includes(search) || dateOfBirth.includes(search) || street.includes(search) || city.includes(search) || state.includes(search) || zipCode.includes(search)) {
                dispatch(editFilteredEmployee(element))
            }
            
        }
    }
    return (
        <>
        <div id="employee-div" className="container">
            <h1>Liste des emplyés actuellement dans l'entreprise</h1>
            <div className="box-search">
                <div className="box-search-number">
                    <p>Show</p>
                    <select onChange={Showing}  id="search-number">
                        {filteredEmployees.length === 0 && (employees.map((entry, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        )))}
                        {filteredEmployees.length > 0 && (filteredEmployees.map((entry, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        )))}
                    </select>
                    <p>entries</p>
                </div>
                <div className="box-search-search">
                    <p>Search:</p>
                    <input onChange={search} type="search" name="" id="" placeholder="Entrez votre recherche ici..." />
                </div>
                
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.length === 0 && (employees.map((entry, index) => (
                        <tr key={index}>
                        <td>{entry.firstName}</td>
                        <td>{entry.lastName}</td>
                        <td>{entry.startDate}</td>
                        <td>{entry.department}</td>
                        <td>{entry.dateOfBirth}</td>
                        <td>{entry.street}</td>
                        <td>{entry.city}</td>
                        <td>{entry.state.slice(0, 2)}</td>
                        <td>{entry.zipCode}</td>
                    </tr>
                    )))}
                    {filteredEmployees.length > 0 && (filteredEmployees.map((entry, index) => (
                        <tr key={index}>
                        <td>{entry.firstName}</td>
                        <td>{entry.lastName}</td>
                        <td>{entry.startDate}</td>
                        <td>{entry.department}</td>
                        <td>{entry.dateOfBirth}</td>
                        <td>{entry.street}</td>
                        <td>{entry.city}</td>
                        <td>{entry.state.slice(0, 2)}</td>
                        <td>{entry.zipCode}</td>
                    </tr>
                    )))}
                    
                </tbody>
            </table>
            <div className="table-footer">
                {filteredEmployees.length === 0 && (<p>Showing {employees.length} to {showEntries} of {employees.length} entries</p>)}
                {filteredEmployees.length > 0 && (<p>Showing {filteredEmployees.length} to {showEntries} of {employees.length} entries</p>)}
                <div className="pagination">
                    <p className="btn-pagination" onClick={GoToPrevious}>Previous</p>
                    <p className="pagination-number">1</p>
                    <p className="btn-pagination" onClick={GoToNext}>Next</p>
                </div>
            </div>
            <button onClick={move}>Home</button>
        </div>
        </>
    )
}