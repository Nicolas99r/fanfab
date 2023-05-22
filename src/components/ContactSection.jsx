import React, {useState} from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

import logoTv from '../Assets/logoFanFab.png'
import logo from '../Assets/fanFab.png'
import Instagram from '../Assets/icon-instagram.png'
import Tiktok from '../Assets/icon-tiktok.png'
import Linkedin from '../Assets/icon-linkedin.png'

function ContactSection() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias al enviar el formulario
    // Por ejemplo, enviar los datos a un servidor, mostrar un mensaje de éxito, etc.

    // Reiniciar los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <ContacStyle>
        <div className='top'>
            <motion.div 
                className="top-left"
                drag
                dragConstraints={{
                    top: -10,
                    left: -10,
                    right: 10,
                    bottom: 10
                }}
            >
                <img src={logoTv} alt="" />
                <h4>La mejor manera de expresar tus gustos</h4>
            </motion.div>
            <form className="top-right" onSubmit={handleSubmit}>
                <h3>Ponte en contacto</h3>
                <div className="inputs-box">

                    <div>
                        <input
                        className='inputbox'
                        type="text"
                        required="required"
                        placeholder='Nombre*'
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                        className='inputbox'
                        type="email"
                        required="required"
                        placeholder='Email*'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <textarea
                        className='inputbox input-large'
                        id="message"
                        required="required"
                        placeholder='Mensaje*'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <motion.button 
                    type="submit"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                >
                    Enviar
                </motion.button>
            </form>
        </div>
        <div className="bottom">
            <div className="logo-footer">
                <img src={logo} alt="" />
            </div>
            <div className="contact-info">
                <h5>Bogotá, Colombia</h5>
                <p>Cra 11 #101-80</p>
                <p>(+57) 601 650 0000</p>
            </div>
            <div className="social">
                <a href=""><img src={Instagram} alt='' /></a>
                <a href=""><img src={Tiktok} alt='' /></a>
                <a href=""><img src={Linkedin} alt='' /></a>
            </div>
        </div>
    </ContacStyle>
  )
}

export default ContactSection

const ContacStyle = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 64px 0 1rem 0;

    @media (max-width: 768px) {
        height: auto;
    }

    .top {
        height: 75%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
        }

        .top-left {
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (max-width: 768px) {
                width: 90%;    
                height: auto;
                margin-bottom: 4rem;
            }
            
            img {
                width: 50%;
                border-radius: 50%;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }

            h4 {
                font-size: 2rem;
                font-weight: 400;
                text-align: center;
                text-decoration: underline;
            }
        }
        
        .top-right {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                width: 100%;
            }

            h3 {
                font-size: 3rem;
                font-weight: 200;
                text-align: center;
            }

            div {
                width: 70%;
                height: 20%;
                padding: 1rem 2rem;
                margin: 1rem 0;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }

            .inputs-box {
                height: 70%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                div {
                    width: 70%;
                    height: 100%;
                    .inputbox {
                        all: unset;
                        outline: none;
                        background: rgba(255,255,255,0.2);
                        width: 100%;
                        height: 100%;
                        border: 2px solid #d0d0d0;
                        border-radius: 5px;
                        padding: .3rem .5rem;
                    }
                    @media (max-width: 768px) {
                        width: 100%;
                    }
        
                    .input-large {
                        height: 100%;
                    }
                }

            }

            button {
                all: unset;
                padding: .5rem 2rem;
                background-color: #F20544;
                border-radius: 25px;
                cursor: pointer;

            }

        }
    }

    .bottom {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
            margin-top: 5rem;
        }

        .logo-footer, .contact-info, .social {
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                width: 90%;
            }
        }

        .logo-footer{
            img {
                width: 70%;
            }
        }

        .contact-info {
            flex-direction: column;

            h5 {
                font-size: 1.2rem;
                padding: .5rem 0;
            }
        }

        .social {
            filter: invert(100%);

            a {
                margin: 1rem;
            }
        }
    }
`