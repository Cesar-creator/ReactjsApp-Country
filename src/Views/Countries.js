import React from 'react'
import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { CountryCard } from '../components/CountryCard'
import { AppContext, useContext } from '../context/useAppContext'

export const Countries = ({ handleSearch, handleFilter, handleShowFilter, regions, filterCategory, theme }) => {
    const { searchedCountries } = useContext(AppContext)
    return (
        <section className='countries-page'>
            <div className='container'>
                <header>
                    <Search handleSearch={handleSearch} theme={theme}/>
                    <Filter
                        handleFilter={handleFilter}
                        handleShowFilter={handleShowFilter}
                        regions={regions}
                        filterCategory={filterCategory}
                        theme={theme}
                    />
                </header>

                {searchedCountries && searchedCountries.length > 0 ? (
                    <ul className='countries'>
                        {searchedCountries.map(country => (
                            <li key={country.name.common}>
                                <CountryCard country={country} theme={theme}  />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>There is no countries...</p>
                )}
            </div>
        </section>
    )
}
