import React, { useState } from 'react'
import styled from 'styled-components'
import logoTv from '../Assets/logoFanFab.png'

function TelentSection() {

  const [show, setShow] = useState(false)

  return (
    <>
      {show?<TalentStyles>
        <div className="general">
          <img src={logoTv} alt="Logo Fanfab" />
          <h3>En FanFab, valoramos a nuestro equipo de colaboradores y nos comprometemos a ofrecer un entorno laboral seguro y beneficios que cumplan con las normas laborales colombianas. A continuación, te brindamos información sobre aspectos importantes relacionados con nuestro talento humano:</h3>
        </div>
        <div className="obj">
            <div className="item">
                <h4>Seguridad Social</h4>
                <p>Afiliamos a nuestros empleados al Sistema General de Seguridad Social en Salud de acuerdo con las leyes colombianas. Garantizamos su acceso a una Entidad Promotora de Salud (EPS) reconocida y realizamos los aportes correspondientes.</p>
                <p>La seguridad de nuestros colaboradores es primordial. Por ello, nos aseguramos de afiliar a todos nuestros empleados a una Administradora de Riesgos Laborales (ARL) para protegerlos de accidentes laborales y enfermedades profesionales.</p>
            </div>
            <div className="item">
                <h4>Tipo de Contrato</h4>
                <p>Ofrecemos contratos a término indefinido, los cuales proporcionan estabilidad laboral y cumplen con las disposiciones legales vigentes en Colombia.</p>
                <p>Para proyectos específicos o empleos temporales, utilizamos contratos a término fijo. Estos contratos establecen claramente la duración y condiciones de la relación laboral.</p>
            </div>
            <div className="item">
                <h4>Pensión</h4>
                <p>Cumplimos con la afiliación de nuestros empleados al Sistema General de Pensiones. Tanto los colaboradores como la empresa realizan los aportes correspondientes para garantizar su bienestar en el futuro.</p>
                <p>Como parte de nuestro compromiso con el bienestar de nuestros empleados, los afiliamos a una Caja de Compensación Familiar reconocida. A través de la CCF, nuestros colaboradores pueden acceder a beneficios adicionales como subsidios de vivienda, educación, recreación y más.</p>
            </div>
        </div>
      </TalentStyles>:null}
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

export default TelentSection

const TalentStyles = styled.div`
  position: absolute;
  height: 70vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0D0D0D;
  border-radius: 20px;
  margin-top: -50rem;
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
    align-items: flex-start;
    justify-content: space-around;
    padding: 2rem;

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
  margin-top: -5rem;

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