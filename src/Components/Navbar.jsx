import React, { useEffect, useState } from 'react'
import {MdDarkMode, MdOutlineDarkMode, MdRefresh, MdFormatListBulleted} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgMenuGridR} from 'react-icons/cg'

const Navbar = ({menu, SearchNotes, value, setmenu}) => {

    const [theme, settheme] = useState('light')

    const toggletheme = () => {
        theme === 'light' ? settheme('dark') : settheme('light')
    }

    useEffect(()=> {
        document.body.className = theme
    },[theme])

  return (
    <div className='Navbar'>
        <div className='nav-con1'>
            <div className='logo'>
                <img src="../Images/logo.png" alt="logo" />
                <p>Keep</p>
            </div>
        </div>
        <div className='nav-con2'>
            <AiOutlineSearch className='seach-icon' />
            <input value={value} onChange={(e) => SearchNotes(e.target.value)} type="text" placeholder='Search' />
        </div>
        <div className='nav-con3'>
            <MdRefresh onClick={()=> document.location.reload()} className='nav-icons ref' />
            {
                menu ?
                <MdFormatListBulleted onClick={()=> setmenu(!menu)}className='nav-icons' />
                :
                <CgMenuGridR onClick={()=> setmenu(!menu)}className='nav-icons' />
            }
            {
                theme === 'light' ?
                <MdDarkMode onClick={()=> toggletheme()} className='nav-icons'/>
                :
                <MdOutlineDarkMode onClick={()=> toggletheme()} className='nav-icons lightmode'/>
            }
        </div>
    </div>
  )
}

export default Navbar