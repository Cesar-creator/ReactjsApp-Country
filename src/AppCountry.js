import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { Header } from './components/Header'
import { AppContext, useContext  } from './context/useAppContext'
import { Countries } from './Views/Countries'
import { DetailsView } from './Views/DetailsView'
import { ErrorView } from './Views/ErrorView'

export const AppCountry = () => {

  const { setShowFilter, setCountries, filteredCountries, searchingTerm, setSearchedCountries, countries, setSearchingTerm, setFilteredCountries } = useContext(AppContext)
  const url = 'https://restcountries.com/v3.1/all';
  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

  const [filterCategory, setFilterCategory] = useLocalStorage('filter', '')

  const isDefaultDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [theme, setTheme] = useLocalStorage(
    'theme',
    isDefaultDark ? 'dark' : 'light'
  )

  // Fetch Data
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setCountries(json)
      })
  }, [])

  // Searching
  useEffect(() => {
    if (filteredCountries.length > 0) {
      if (searchingTerm) {
        const filtered = filteredCountries.filter(country =>
          country.name.common.toLowerCase().includes(searchingTerm)
        )
        setSearchedCountries(filtered)
      } else {
        setSearchedCountries(filteredCountries)
      }
    }
  }, [searchingTerm, filteredCountries])

  // Filtering
  useEffect(() => {
    if (countries.length > 0) {
      if (filterCategory && filterCategory !== 'all') {
        const filtered = countries.filter(country => {
          return country.region.toLowerCase() === filterCategory
        })
        setFilteredCountries(filtered)
      } else {
        setFilteredCountries(countries)
      }
    }
  }, [filterCategory, countries])

  const handleSearch = (e) => {
    setSearchingTerm(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterCategory(e.target.dataset.region)
    handleShowFilter()
  }

  const handleShowFilter = (e) => {
    setShowFilter(prevShowFilter => !prevShowFilter)
  }

  const switchTheme = (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Router>
      <div className='site-wrapper' data-theme={theme}>
        <Header switchTheme={switchTheme} theme={theme} />
        <main className='main'>
          <Routes>
            <Route
              index
              element={
                <Countries
                  handleFilter={handleFilter}
                  handleSearch={handleSearch}
                  regions={regions}
                  handleShowFilter={handleShowFilter}
                  filterCategory={filterCategory}
                />
              }
            />
            <Route path='country'>
              <Route path=':name' element={<DetailsView />} />
            </Route>
            <Route path='*' element={<ErrorView />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
