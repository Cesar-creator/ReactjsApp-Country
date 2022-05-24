import React, { useState, useRef, useEffect, useCallback } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AppContext, useContext } from '../context/useAppContext'

export const Filter = ({ handleFilter, handleShowFilter, regions, filterCategory, theme }) => {

    const { setShowFilter, showFilter } = useContext(AppContext)

    const [filterText] = useState('Filter by Region')

    const filterBtnRef = useRef(null)

    const doSomething = useCallback(
        function doSomething(e) {
            if (e.target.closest('.filter-btn') === filterBtnRef.current) {
                handleShowFilter()
            } else {
                setShowFilter(false)
            }
        },
        [handleShowFilter, setShowFilter]
    )

    useEffect(() => {
        window.addEventListener('click', doSomething)

        return () => {
            window.removeEventListener('click', doSomething)
        }
    }, [doSomething])

    return (
        <div className={`filter ${theme === 'light' ? "textLight" : "textDark"}`}>
            <button className={`filter-btn ${theme === 'light' ? "divLight" : "divDark"}`} ref={filterBtnRef}>
                <span className='filter-text'>
                    {filterCategory ? filterCategory : filterText}
                </span>
                <MdOutlineKeyboardArrowDown />
            </button>
            {showFilter && (
                <div className={`list-container ${theme === 'light' ? "divLight" : "divDark"}`}>
                    <ul className='regions-list'>
                        {regions.map(region => (
                            <li
                            className={`${theme === 'light' ? "regionL" : "regionD"}`}
                                key={region}
                                data-region={region}
                                onClick={handleFilter}>
                                {region}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
