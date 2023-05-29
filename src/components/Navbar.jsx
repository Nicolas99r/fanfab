import React, {useState} from 'react'
import styled from 'styled-components'

import logo from '../Assets/fanFab.png'
import BurgerButton from './BurgerButton'
import logoBg from '../Assets/logoFanFab.png'

function Navbar() {

  //para cambiar el bg al hacer scroll
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 64){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleLinkClick = () => {
    setClicked(false); // Cerrar el panel de enlaces al hacer clic en un enlace
  };

  return (
    <div className={color ? 'header-bg' : ''}>
      <NavContainer>
          <img src={logo} alt='logo FanFab'/>
          <div className={`links ${clicked ? 'active' : ''}`}>
            <a href='/#Inicio' onClick={handleLinkClick}>Inicio</a>
            <a href='/#Nosotros' onClick={handleLinkClick}>Nosotros</a>
            <a href='/#Servicios' onClick={handleLinkClick}>Servicios</a>
            <a href='/#Trabajo' onClick={handleLinkClick}>Nuestro Trabajo</a>
          </div>
          <div className='burger'>
            <BurgerButton clicked={clicked} handleClick={handleClick}/>
          </div>
          <BgDiv className={`initial ${clicked ? 'active' : ''}`} backgroundImage={logoBg}/>
      </NavContainer>
    </div>
  )
}

export default Navbar

const NavContainer = styled.nav`
  max-width: 1480px;
  position: fixed;
  height: 64px;
  width: 100%;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 98;

  img {
    height: 90%;
    margin-left: 10px;
    padding: 10px;
  }

  .burger {
    z-index: 100;

    @media(min-width: 768px){
      display: none;
    }
  }

  .links {
    position: absolute;
    top: -700px;
    left: 2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    padding-right: 20px;
    transition: all .5s ease;
    a {
      position: relative;
      padding: 5px 0;
      font-weight: 700;
      margin: 0 10px 0 10px;
      transition: all .3s cubic-bezier(0.11, 0.7, 0, 1);
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: #F20544;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }

    a:hover {
      color: #0487D9;
    }

    @media(min-width: 768px) {
      position: initial;
      margin: 0;
    }
  }

  .links.active {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;

    a {
      font-size: 3rem;
      display: block;
      color: #0D0D0D;
      font-weight: 200;
      margin: .5rem;
    }
  }
`

const BgDiv = styled.div`
  position: absolute;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  top: -2000px;
  left: 2000px;
  z-index: 99;
  transition: all .6s ease;

  &.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0 0 0 20%;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(203, 190, 184, 0.9);
    border-radius: 0 0 0 20%;
  }

  @media (mmax-width: 768px) {
    max-width: 100vw 
  }
`