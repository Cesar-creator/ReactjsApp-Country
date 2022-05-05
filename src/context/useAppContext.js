import { createContext, useContext, useState } from "react";


const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([])
    const [searchingTerm, setSearchingTerm] = useState('')
    const [searchedCountries, setSearchedCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    const data = {
        countries,
        setCountries,
        searchingTerm,
        setSearchingTerm,
        searchedCountries,
        setSearchedCountries,
        filteredCountries,
        setFilteredCountries,
        showFilter,
        setShowFilter
    };


    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppContextProvider,
    useContext,
    
}
