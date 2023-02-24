import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ProportiesContext = createContext()

export const ProportiesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <ProportiesContext.Provider value={[state, dispatch]} >
            {children}
        </ProportiesContext.Provider>
    )
}

export default ProportiesProvider;