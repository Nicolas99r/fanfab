import React, {useState} from 'react'
import styled from 'styled-components'
import logoTv from '../Assets/logoFanFab.png'
import organigrama from '../Assets/organigrama.png'

function CompanySection() {

  const [show, setShow] = useState(false)

  return (
    <>
      {show?<CompanyStyles>
        <div className="general">
          <img src={logoTv} alt="Logo Fanfab" />
          <h3>Nuestra empresa se constituye como una Sociedad por Acciones Simplificada (SAS) en Bogotá, Colombia. Como SAS, somos una empresa de naturaleza mercantil que se caracteriza por ser una entidad con un régimen simplificado de constitución y operación. Esta forma jurídica nos permite tener una estructura ágil y flexible para adaptarnos rápidamente a las necesidades del mercado.</h3>
        </div>
        <div className="obj">
            <div className="item">
                <h4>Misión</h4>
                <p>En FanFab, nos comprometemos a ofrecer soluciones multimedia innovadoras y personalizadas, que permitan a nuestros clientes expresar sus gustos y valores a través de elementos de la cultura popular. Nos esforzamos por brindar una experiencia excepcional al cliente y una calidad de producción inigualable, para lograr su completa satisfacción.</p>
            </div>
            <div className="item">
                <h4>Visión</h4>
                <p>En FanFab, nuestra visión es convertirnos en la empresa líder en soluciones multimedia personalizadas basadas en la cultura popular, a nivel local y nacional. Queremos ser reconocidos por nuestro compromiso con la calidad, la innovación y la inclusión, y ser la primera elección de nuestros clientes al buscar servicios de producción multimedia.</p>
            </div>
            <img src={organigrama} alt="orgranigrama" />
        </div>
      </CompanyStyles>:null}
      <ButtonStyle>
        <button
          className = "button-35"
          onClick={() => setShow(!show)}
        >
          ¿Más?
        </button>
      </ButtonStyle>
    </>
  )
}

export default CompanySection

const CompanyStyles = styled.div`
  position: absolute;
  height: 70vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0D0D0D;
  border-radius: 20px;
  margin-top: -30rem;
  -webkit-box-shadow: 10px 10px 47px 0px rgba(255,255,255,0.4);
  -moz-box-shadow: 10px 10px 47px 0px rgba(255,255,255,0.4);
  box-shadow: 10px 10px 47px 0px rgba(255,255,255,0.4);

  z-index: 49;

  .general {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;

    img {
      height: 100%;
      border-radius: 50%;
    }

    h3 {
      font-weight: 200;
      padding: 1rem;
      text-align: justify;
      font-size: 1.8rem;
    }
  }

  .obj {
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;

    img {
      width: 30%;
      aspect-ratio: 1/1;
    }

    .item {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      text-align: justify;

      h4 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
        font-weight: 200;
      }
    }
  }
`

const ButtonStyle = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 50;
  margin-top: 15rem;

  .button-35 {
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: Inter,sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s,-webkit-box-shadow .2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-35:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`