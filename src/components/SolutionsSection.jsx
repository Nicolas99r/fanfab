import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import Creatividad from '../Assets/creatividad.jpg'
import Colab from '../Assets/colaboracion.jpg'
import Expertos from '../Assets/expertos.jpg'

function SolutionsSection() {
  return (
    <SolutionsStyles id='Servicios'>
        <h2>Soluciones a tu manera</h2>
        <div className="container">
            <motion.section
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .6}}
            >
                <div className="content">
                    <motion.div 
                        className='description'
                        initial={{opacity: 0, y: -100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: .6}}
                    >
                            <h3>Autenticidad y creatividad</h3>
                            <p>Nos esforzamos por ofrecerte <span>soluciones auténticas </span>y creativas, que reflejen tu personalidad y conecten con tu audiencia.</p>
                    </motion.div>
                    <img src={Creatividad} alt="Creatividad" loading="lazy"/>
                </div>
            </motion.section>
            <motion.section
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .6}}
            >
                <div className="content">
                    <motion.div className='description'
                        initial={{opacity: 0, y: -100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: .6}}>
                        <h3>Trabajo en colaboración</h3>
                        <p>Trabajamos de la mano de nuestros clientes para <span> entender sus gustos y necesidades</span>, y así poder ofrecerles una experiencia de servicio excepcional y a la medida de sus expectativas.</p>
                    </motion.div>
                    <img src={Colab} alt="Colaboración" loading="lazy"/>
                </div>
            </motion.section>
            <motion.section
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .6}}
            >
                <div className="content">
                    <motion.div className='description'
                        initial={{opacity: 0, y: -100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: .6}}>
                        <h3>Equipo de expertos</h3>
                        <p>Nuestro equipo de expertos altamente capacitados se esfuerza por mantenerse actualizado y <span>a la vanguardia de las tendencias</span> en cultura popular y multimedia.</p>
                    </motion.div>
                    <img src={Expertos} alt="Expertos" loading="lazy"/>
                </div>
            </motion.section>
        </div>
    </SolutionsStyles>
  )
}

export default SolutionsSection

const SolutionsStyles = styled.div`
    overflow-x: hidden;
    height: 300vh;
    width: 100%;

    background-color: #D0D0D0;
    color: #0D0D0D;
    z-index: 1;


    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
    }

    h2 {
        position: absolute;
        font-family: 'Jura', sans-serif;
        font-size: 5rem;
        font-weight: bold;
        margin: 5rem 3rem;
        width: 50%;
        opacity: .25;
        z-index: 2;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    .container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        section {
            min-width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 4rem;
            
            @media (max-width: 768px) {
                flex-direction: column;
                height: 100vh;
                padding: 1rem;
                margin-top: 15rem;
            }

            .content {
                height: 80vh;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                
                @media (max-width: 768px) {
                    flex-direction: column-reverse;
                    height: auto;
                    align-items: center;
                    justify-content: center;
                }
                
                .description {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: flex-end;
                    width: 50%;
                    text-align: right;
                    padding: 0 2rem 0 0;
                    
                    @media (max-width: 768px) {
                        text-align: center;
                        width: 90%;
                        padding: 0;
                        align-items: center;
                        justify-content: center
                    }

                    h3 {
                        font-size: 4rem;
                        font-weight: 200;
                        
                        @media (max-width: 768px) {
                            font-size: 3rem;
                        }
                    }

                    p {
                        width: 90%;
                        padding: 1rem 0;
                        font-size: 1.5rem;
                        font-weight: 200;

                        span {
                            color: #0487D9;
                            font-weight: 300;
                        }
                    }
                }

                img {
                    height: 100%;
                    width: 40%;
                    object-fit: cover;

                    
                    @media (max-width: 768px) {
                        width: 80%;
                    }
                }
            }
        }
    }

    .container section:nth-child(2) .content {
        flex-direction: row-reverse;

        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }

        .description {
            text-align: left;
            padding: 0 0 0 2rem;
            align-items: flex-start;
            justify-content: flex-start;

            @media (max-width: 768px) {
                text-align: center;
                padding: 0;
                align-items: center;
                justify-content: center;
            }
        }
    }
`