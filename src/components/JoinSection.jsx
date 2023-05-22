import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import job1 from '../Assets/ux.jpg'
import job2 from '../Assets/dev.jpg'
import job3 from '../Assets/motion.jpg'
import job4 from '../Assets/editor.jpg'
import more from '../Assets/icons8-flecha-50.png'

function JoinSection() {
  return (
    <JoinWorks>
        <motion.div 
            className="title"
            initial = {{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            <h2>Únete a nosotros</h2>
        </motion.div>
        <motion.div 
            className="jobsSec"
            initial = {{opacity: 0, x: 500}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
        >
            <div className="top">
                <motion.a 
                    href='#' 
                    className="job job-1"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                >
                    <h3>UI/UX Designer</h3>
                    <h4>Remoto</h4>
                </motion.a>
                <motion.a  
                    href='#' 
                    className="job job-2"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                >
                    <h3>Fullstack Web Developer</h3>
                    <h4>Remoto</h4>
                </motion.a>
            </div>
            <div className="bottom">
                <motion.a 
                    href='#' 
                    className="job job-3"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                >
                    <h3>Motion Graphics Designer</h3>
                    <h4>Remoto</h4>
                </motion.a>
                <motion.a 
                    href='#' 
                    className="job job-4"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                >
                    <h3>Audiovisual Editor</h3>
                    <h4>Remoto</h4>
                </motion.a>
                <a href="" className="more">
                    <img src={more} alt="" />
                    
                    <p>Ver más</p>
                </a>
            </div>
        </motion.div>
    </JoinWorks>
  )
}

export default JoinSection

const JoinWorks = styled.div`

    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        display: flex;
        width: 100%;

        h2 {
            font-family: 'Jura', sans-serif;
            font-size: 5rem;
            font-weight: bold;
            width: 60%;
            margin: 5rem 3rem 2rem 3rem;
            opacity: .25;
        }
    }

    .jobsSec {
        width: 80%;
        height: 65%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        
        .top, .bottom {
            width: 100%;
            height: 45%;
            display: flex;
            align-items: center;


            .job {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30%;
                height: 100%;
                margin: 0 3rem;
                border: 2px solid white;

                h3, h4 {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    font-size: 2rem;
                    font-weight: 200;
                    padding: .5rem;
                }

                h4 {
                    text-align: right;
                }
            }

            .job::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.6);
                pointer-events: none;
            }

            .job-1, .job-2, .job-3, .job-4  {
                background-size: cover;
                background-repeat: no-repeat;
            }

            .job-1 {
                background-image: url(${job1})
            }
            .job-2 {
                background-image: url(${job2})
            }
            .job-3 {
                background-image: url(${job3})
            }
            .job-4 {
                background-image: url(${job4})
            }
        }

        .top {
            justify-content: flex-end;
        }

        .bottom {
            .more {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1/1;
                padding: 1rem;
                border-radius: 50%;

                img {
                    filter: invert(100%);
                    animation: arrowLoop 2s ease-in-out infinite;
                }

                //codigo de la flechita
                @keyframes arrowLoop {
                    0% {
                        transform: translateX(5px);
                    }
                    50% {
                        transform: translateX(-5px);
                    }
                    100% {
                        transform: translateX(5px);
                    }
                }
                //termina el codigo de la flechita

                p {
                    padding: 0 0 .5rem 0;
                    text-transform: uppercase;
                }
            }
        }
    }

`