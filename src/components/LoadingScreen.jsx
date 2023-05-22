import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de página
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tiempo de carga simulado (2 segundos)
  }, []);

  const screenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isLoading ? 'visible' : 'hidden'}
      variants={screenVariants}
    >
      {isLoading ? (
        <LoadingScreenContainer>
          <LoadingSpinner />
        </LoadingScreenContainer>
      ) : (
        <div>
          {/* Contenido principal de la página */}
          {/* Aquí puedes renderizar el resto de los componentes de tu aplicación */}
        </div>
      )}
    </motion.div>
  );
};

const LoadingScreenContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  /* Estilos para el spinner de carga */
`;

export default LoadingScreen;
