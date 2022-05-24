import React from 'react'
import { BsMoonFill } from 'react-icons/bs'

export const Header = ({ switchTheme, theme }) => {
  return (
    <header className={`header ${theme === 'light' ? "divLight" : "divDark"}`}>
      <div className='container'>
        <div className='content'>
          <h1 className='visually-hidden'>Country Api App</h1>
          <h2 className='title'>Where in the world?</h2>

          <button className={`toggle-mode-btn ${theme === 'light' ? "textLight" : "textDark"}`} onClick={switchTheme}>
            <BsMoonFill />
            <span className='darkmode-text'>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
