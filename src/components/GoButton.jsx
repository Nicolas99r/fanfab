import React from 'react'
import styled from 'styled-components'

function GoButton() {

    const handleClick = () => {
        const element = document.getElementById('Nosotros');
        element.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <ButtonToGo>
        <div className="btn btn-one" onClick={handleClick}>
            <span>CONÓCENOS</span>
        </div>
    </ButtonToGo>
  )
}

export default GoButton

const ButtonToGo = styled.div`

    margin: 7rem 0 0 5rem;

    .btn {
        line-height: 50px;
        height: 50px;
        text-align: center;
        width: 250px;
        cursor: pointer;
    }

    .btn-one {
        color: #FFF;
        transition: all 0.3s;
        position: relative;
    }
    .btn-one span {
        transition: all 0.3s;
    }
    .btn-one::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: rgba(245,5,68,1);
        border-bottom-color: rgba(245,5,68, 1);
        transform: scale(0.1, 1);
    }
    .btn-one:hover span {
        letter-spacing: 2px;
    }
    .btn-one:hover::before {
        opacity: 1;	
        transform: scale(1, 1);	
    }
    .btn-one::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: all 0.3s;
        background-color: rgba(245,5,68,1);
    }
    .btn-one:hover::after {
        opacity: 0;	
        transform: scale(0.1, 1);
    }

    @media (max-width: 768px){
        margin: 7rem 0 0 0;
    }
`