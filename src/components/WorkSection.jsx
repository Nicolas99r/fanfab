import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import work1 from '../Assets/projects/about.png'
import work2 from '../Assets/projects/cajicarros.png'
import work3 from '../Assets/projects/ladob.png'
import work4 from '../Assets/projects/manchas.jpeg'
import work5 from '../Assets/projects/mobile.png'
import work6 from '../Assets/projects/secreto.png'
import work7 from '../Assets/projects/ijuly.png'

function WorkSection() {
  return (
    <OurWorks id='Trabajo'>
        <motion.div className='titleWorks'
            initial = {{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6}}
        >
            <p>En FanFab, te invitamos a explorar nuestro fascinante <span>arsenál creativo</span>, donde encontrarás una amplia gama de creaciones multimedia cautivadoras.</p>
        </motion.div>
        <motion.div 
            className='gallery'
            initial = {{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <a href="#"><img src={work1} alt="Work #1" /><p>Desarrollo Web</p></a>
            <a href="#"><img src={work2} alt="Work #2" /><p>Desarrollo de Videojuegos</p></a>
            <a href="#"><img src={work3} alt="Work #3" /><p>Productos audiovisuales</p></a>
            <a href="#"><img src={work6} alt="Work #6" /><p>Desarrollo de Videojuegos</p></a>
            <a href="#"><img src={work7} alt="Work #6" /><p>Productos audiovisuales</p></a>
            <a href="#"><img src={work4} alt="Work #4" /><p>Productos audiovisuales</p></a>
            <a href="#"><img src={work5} alt="Work #5" /><p>Desarrollo Móvil</p> </a>
        </motion.div>
    </OurWorks>
  )
}

export default WorkSection

const OurWorks = styled.div`
    overflow-x: hidden;
    font-family: 'Jura', sans-serif;
    width: 100%;
    background-color: #D0D0D0;
    color: #0D0D0D;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;
    
    .titleWorks {
        overflow-y: hidden;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        
        @media (max-width: 768px) {
            height: auto;
        }

        p {
            font-family: 'Jura', sans-serif;
            font-size: 2rem;
            text-align: right;
            width: 60%;
            margin: 2rem 4rem;

            
            @media (max-width: 768px) {
                height: auto;
            }

            span {
                color: #F20544;
                
                @media (max-width: 768px) {
                    height: auto;
                }
            }

            @media (max-width: 768px) {
                width: 90%;
                margin: 2rem 1rem;
            }
        }
    }

    .gallery {
        width: 80%;
        columns: 3 320px;
        column-gap: .5em;
        margin-top: 2rem;

        img {
            max-width: 100%;
            margin-bottom: .5em;
            display: block;
            border-radius: 10px;
            transform: scale(1);
            filter: brightness(100%);
            transition: all .5 ease;
        }
        
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .5s ease;
            z-index: 1;

            p {
                position: absolute;
                font-size: 1.5rem;
                opacity: 0;
                transition: all .5s ease;
                z-index: 2;
            }
        }

        a:hover p {
            opacity: 1;
        }

        a:hover img {
            filter: brightness(30%);
        }
    }
`