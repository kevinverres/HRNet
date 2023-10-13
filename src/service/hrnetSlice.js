import { createSlice } from "@reduxjs/toolkit";

export const hrnetSlice = createSlice({
    name : 'Hrnet',
    initialState: {
        employees: [
            {
                firstName: "kevinr",
                lastName: "lastName",
                dateOfBirth: "dateOfBirth",
                startDate: "startDate",
                department: "department",
                street: "street",
                city: "city",
                state: "state",
                zipCode: "zipCode"
            },
            {
                firstName: "kevin1",
                lastName: "lastName1",
                dateOfBirth: "dateOfBirth1",
                startDate: "startDate1",
                department: "department1",
                street: "street1",
                city: "city1",
                state: "state1",
                zipCode: "zipCode1"
            },
            {
                firstName: "firstName2",
                lastName: "lastName2",
                dateOfBirth: "dateOfBirth2",
                startDate: "startDate2",
                department: "department2",
                street: "street2",
                city: "city2",
                state: "state2",
                zipCode: "zipCode2"
            },
            {
                firstName: "firstName3",
                lastName: "lastName3",
                dateOfBirth: "dateOfBirth3",
                startDate: "startDate3",
                department: "department3",
                street: "street3",
                city: "city3",
                state: "state3",
                zipCode: "zipCode3"
            }
        ],
        filteredEmployees: [],
        totalCount: 4,
        currentPage: 1,
        siblingCount: 0,
        pageSize: 1,
        department: [
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal"
        ],
        state: [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ]
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload
        },
        setfilteredEmployees: (state, action) => {
            state.filteredEmployees.push(action.payload)
            state.totalCount += 1
        },
        resetfilteredEmployees: (state, action) => {
            state.filteredEmployees = []
            state.totalCount = 0
        }
    }
})

export const { addEmployee, editShowEntries, setCurrentPage, setPageSize, setfilteredEmployees, resetfilteredEmployees } = hrnetSlice.actions

export default hrnetSlice.reducer