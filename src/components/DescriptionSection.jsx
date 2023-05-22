import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

function DescriptionSection() {
  return (
    <>
      <motion.div
        initial = {{opacity: 0, scale: 1, x: 500}}
        whileInView={{opacity: 1, scale: 1, x: 0}}
        transition={{duration: .6}}
      >
        <TextSection>
            <p>Somos una empresa apasionada por ofrecerte <b>soluciones multimedia</b> innovadoras y personalizadas, donde podrás <b>expresar tus gustos</b> y valores a través de elementos de la <b>cultura pop.</b></p>
        </TextSection>
      </motion.div>
    </>
  )
}

export default DescriptionSection

const TextSection = styled.div`
    width: 75vw;
    height: 40vh;
    text-align: left;
    font-size: 3rem;
    font-weight: 200;

    padding: 30vh 3rem;

    b {
        font-weight: 400;
    }

    @media (max-width: 768px) {
        margin: auto;
        font-size: 2rem;
        text-align: center;
    }
`