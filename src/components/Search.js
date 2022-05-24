import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const Search = ({ handleSearch, theme }) => {
  return (
    <label className='search'>
      <span className='visually-hidden'>Search:</span>
      <AiOutlineSearch className={`icon ${theme === 'light' ? "textLight" : "textDark"}`} />
      <input
        type='search'
        placeholder='Search for a country...'
        onChange={handleSearch}
        className={`input ${theme === 'light' ? "divLight" : "divDark"}`}
      />
    </label>
  )
}
