'use client'

import style from './DropdownMenu.module.css'
import { useState } from 'react'
import Menu from '@/app/components/icons/demoIcons/Menu'
import Close from '@/app/components/icons/demoIcons/Close';       

export const DropdownMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShow = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className={style.buttonSvg}>
                {
                    !showMenu ? <Menu width={35} height={35} onClick={handleShow} stroke='#000' /> : <Close fill='#000' stroke='#000' width={35} height={35} onClick={handleShow} />
                }
            </div>
            <div className={style.menu} style={{ display: showMenu ? 'block' : 'none' }}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">Sobre nosotros</a></li>
                    <li><a href="#prices">Precios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#social">Social</a></li>
                </ul>
            </div>
        </>
    )
}

export default DropdownMenu;