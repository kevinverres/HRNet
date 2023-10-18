import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage, setPageSize, setfilteredEmployees, resetfilteredEmployees } from "../../service/hrnetSlice";
import Pagination from "../../component/Pagination";
import React, { useEffect, useMemo } from 'react';
let spin = false

export default function List() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {employees, totalCount, currentPage, pageSize, filteredEmployees} = useSelector(state => state.hrnet);
    function move() {
        navigate("/")
    }
    /**
     * Permet de modifier le nombre d'entré visible dans le tableau
     * @param {HTMLElement} HTMLElement L'élément html retournant le nombre d'élément à afficher
     */
    function Showing(input) {
        dispatch(setPageSize(input.target.value))
        dispatch(setCurrentPage(1))
    }
    /**
     * Permet d'afficher le tableau
     */
    const currentTableData = useMemo(() => {
        let firstPageIndex = (currentPage - 1) * pageSize;
        let lastPageIndex = firstPageIndex + parseInt(pageSize);
        if (filteredEmployees.length === 0) {
            return employees.slice(firstPageIndex, lastPageIndex);
        } else {
            return filteredEmployees.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, pageSize, filteredEmployees, employees]);
    /**
     * Permet d'effectué une recherche dans le tableau employees
     * @param {HTMLElement} HTMLElement L'élément html retournant la valeur à rechercher
     */
    function search(input) {
        let search = input.target.value.toLowerCase();
        dispatch(resetfilteredEmployees())
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
                dispatch(setfilteredEmployees(element))
            }
        }
        
    }
    /**
     * Permet de faire un tri sur le tableau par ordre croisant ou décroissant
     * @param {HTMLElement}  HTMLElement L'élément html dont la class doit être modifier
     */
    function sort(data) {
        if (spin === true) {
            spin = false
            document.querySelectorAll('#sort').forEach(e => {
                if (e.className === "spin") {
                    e.className = ''
                }
            });
            data.target.className = ''
        } else {
            spin = true
            document.querySelectorAll('#sort').forEach(e => {
                if (e.className === "spin") {
                    e.className = ''
                }
            });
            data.target.className = 'spin'
        }
        if (filteredEmployees.length === 0) {
            const array = employees.filter(p => p);
            const newArray = array.sort().reverse()
            dispatch(resetfilteredEmployees())
            for (let i = 0; i < newArray.length; i++) {
                const element = newArray[i];
                dispatch(setfilteredEmployees(element))
            }
        } else {
            const array = filteredEmployees.filter(p => p);
            const newArray = array.sort().reverse()
            dispatch(resetfilteredEmployees())
            for (let i = 0; i < newArray.length; i++) {
                const element = newArray[i];
                dispatch(setfilteredEmployees(element))
            }
        }
    }

    useEffect(() => {
        if (totalCount <= 1) {
            const select = document.querySelector('#search-number')
            dispatch(setPageSize(1))
            select.value = 1
        }
    }, [totalCount, dispatch]);
    return (
        <>
        <div id="employee-div" className="container">
            <h1>Liste des employés actuellement dans l'entreprise</h1>
            <div className="box-search">
                <div className="box-search-number">
                    <p>Show</p>
                    <select onChange={Showing} id="search-number">
                        <option value="1">1</option>
                        <option value="2">2</option>
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
                        <th>
                            <div>
                                <p>First Name</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Last Name</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Start Date</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Department</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Date of Birth</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Street</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>City</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>State</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Zipe Code</p>
                                <button id="sort" className="sort" onClick={sort}>^</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map((entry, index) => (
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
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <p>Showing {pageSize} to {pageSize} of {filteredEmployees.length === 0 ? employees.length : filteredEmployees.length} entries</p>
                <Pagination
                    className="pagination-bar"
                    siblingCount={0}
                    currentPage={currentPage}
                    totalCount={totalCount}
                    pageSize={pageSize}
                    onPageChange={page => dispatch(setCurrentPage(page))}
                />
            </div>
            <button onClick={move}>Home</button>
        </div>
        </>
    )
}