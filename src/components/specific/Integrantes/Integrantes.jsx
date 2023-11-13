import React from 'react';
import styles from './integrantes.module.css'; 

const CardsIntegrantes = () => {
  const integrantesData = [
    {
      id: 1,
      name: 'Duhart Neme Alejo',
      age: 20,
      profession: 'Programador Full Stack Junior',
      description: 'Estudiante de Rolling Code y Intento de Programador de videojuegos.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/ytmfqebe5lmw4fn8xwp7.jpg',
    },
    {
      id: 2,
      name: 'Roger Narcoti Matias',
      age: 28,
      profession: 'Desarrollador Full Stack Trainee',
      description: 'Apasionado por el ingles, la Programacion y en aprender cosas nuevas.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/s4ecuplh0neelbwgu2eu.jpg',
    },
    {
      id: 3,
      name: 'Mendez Gabriel Dario',
      age: 28,
      profession: 'Programador',
      description: 'Apasionado programador dedicado a crear soluciones innovadoras y eficientes.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/pjrjnhzlclwxbw8mtxbb.jpg',
    },
  ];

  return (
    <div className={styles.cardsIntegrantesContainer}>
      {integrantesData.map((integrante) => (
        <div key={integrante.id} className={styles.cardIntegrante}>
          <img src={integrante.image} alt={`Persona ${integrante.id}`} />
          <h2>{integrante.name}</h2>
          <p>Age: {integrante.age}</p>
          <p>Profession: {integrante.profession}</p>
          <p>{integrante.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsIntegrantes;