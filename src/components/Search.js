import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const Search = ({ handleSearch }) => {
  return (
    <label className='search'>
      <span className='visually-hidden'>Search:</span>
      <AiOutlineSearch className='icon' />
      <input
        type='search'
        placeholder='Search for a country...'
        onChange={handleSearch}
      />
    </label>
  )
}
