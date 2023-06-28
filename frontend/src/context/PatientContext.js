import { createContext, useReducer } from 'react'

export const PatientContext = createContext()

export const patientsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PATIENTS':
            return {
                patients: action.payload
            }
            case 'CREATE_PATIENT':
                return {
                    patients: [action.payload, ...state.patients]
                }
    }
}

export const PatientContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(patientsReducer, {
        patients: null
    })

   //dispatch({type: 'SET_PATIENTS', payload: [{}, {}]})


    return (
        <PatientContext.Provider value= {{state, dispatch}}>
            {children}
        </PatientContext.Provider>
    )
}




