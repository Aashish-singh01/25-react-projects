import React from 'react'
import './style.css'
import menus from './data'
import MenuList from './menu-list'
import MenuItem from './menu-item'

function App({menus =[ ]}) {
  return (
    <div className='tree-container'>
      <MenuList list={menus} />
      
    </div>
  )
}

export default App