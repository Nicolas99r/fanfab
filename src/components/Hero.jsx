import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BgLines from '../Assets/bglines.svg';
import BgHero from '../Assets/bghero.jpg';
import GoButton from './GoButton';
import DescriptionSection from './DescriptionSection';

const Hero = () => {
  return (
    <>
      <HeroSec>
        <div className='bgHero'>
          <img src={BgHero} alt='background section' loading="lazy" />
        </div>
        <motion.div 
          initial={{opacity: 0, x:500}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          >
          <TextHero className='container'>
            <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2}}
                exit={{ x: '-100%' }}
              >
                ¿Quieres destacar?
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              FanFab <span>es tu lugar</span>
            </motion.h1>
            <GoButton />
          </TextHero>
        </motion.div>
          <DescriptionSection />
      </HeroSec>
    </>
  );
};

export default Hero;

const HeroSec = styled.div`

  overflow: hidden;
  height: 200vh;
  width: 100%;
  background-image: url(${BgLines});
  background-size: cover;
  background-repeat: no-repeat;

  .bgHero {
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    opacity: 0.1;
    justify-content: flex-end;

    img {
      width: 60%;
    }
  }
`;

const TextHero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5rem;

  p {
    color: white;
    font-weight: 200;
    font-size: 4rem;
    text-align: left;
  }

  h1 {
    font-weight: 200;
    font-size: 4rem;
    text-align: left;
    color: #0487d9;

    span {
      color: white;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 3rem;
      text-align: center;
      margin: 0;
    }

    h1 {
      font-size: 3rem;
      text-align: center;
      margin: 8rem 0 0 0;
      padding: 0;
    }
  }
`;
