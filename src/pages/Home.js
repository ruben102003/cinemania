import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel';
import pelicula1 from '../components/img/pelicula1.jpg';
import pelicula2 from '../components/img/pelicula2.jpg';
import pelicula3 from '../components/img/pelicula3.jpg';
import pelicula4 from '../components/img/pelicula4.jpg';
import pelicula5 from '../components/img/pelicula5.jpg';
import pelicula6 from '../components/img/pelicula6.jpeg';
import pelicula7 from '../components/img/pelicula7.jpg';
import pelicula8 from '../components/img/pelicula8.jpg';
import pelicula9 from '../components/img/pelicula9.jpg';
import pelicula10 from '../components/img/pelicula10.jpg';
import pelicula11 from '../components/img/pelicula11.jpg';
import pelicula12 from '../components/img/pelicula12.jpg';
import bebidaPalomitasImg from '../components/img/bebida y palomitas o comida.jpg'; // Reemplaza con la ruta correcta
import palomitasImg from '../components/img/bebida y palomitas.jpg'; // Reemplaza con la ruta correcta
import tarjetaImg from '../components/img/tarjetas.jpg'; // Reemplaza con la ruta correcta
import comboImg from '../components/img/combo.jpg'; // Reemplaza con la ruta correcta
import publicidad1 from '../components/img/publicidad1.jpg'; // Reemplaza con la ruta correcta
import publicidad2 from '../components/img/publicidad2.jpg'; // Reemplaza con la ruta correcta
import publicidad3 from '../components/img/publicidad3.jpg';
import publicidad4 from '../components/img/publicidad4.jpg';

// Películas del carrusel
const movies = [
  { image: pelicula1, title: 'Movie 1' },
  { image: pelicula2, title: 'Movie 2' },
  { image: pelicula3, title: 'Movie 3' },
  { image: pelicula4, title: 'Movie 4' },
  { image: pelicula5, title: 'Movie 5' },
  { image: pelicula6, title: 'Movie 6' },
  { image: pelicula7, title: 'Movie 7' },
  { image: pelicula8, title: 'Movie 8' },
  { image: pelicula9, title: 'Movie 9' },
  { image: pelicula10, title: 'Movie 10' },
];

// Películas recientes
const recentMovies = [
  { image: pelicula1, title: 'Padre No Hay Más Que UNO 4' },
  { image: pelicula2, title: 'Inside Out 2' },
  { image: pelicula8, title: 'DEADPOOL Y LOBEZNO' },
  { image: pelicula9, title: 'GRU 4: MI VILLANO FAVORITO' },
  { image: pelicula11, title: 'TWISTERS' },
  { image: pelicula12, title: 'Koati' },
];

// Próximamente en el cine
const upcomingMovies = [
  { image: pelicula3, title: 'BORDERLANDS' },
  { image: pelicula4, title: 'LA TRAMPA' },
  { image: pelicula5, title: 'ALIEN: ROMULUS' },
];

// Ofertas actuales
const offers = [
  { image: bebidaPalomitasImg, title: 'Bebidas y Palomitas o Comida', description: 'Disfruta de una oferta especial: bebidas más palomitas o comida a un precio reducido durante la película.' },
  { image: palomitasImg, title: 'Cubos de Palomitas Grandes', description: 'Llévate un cubo de palomitas grandes con un descuento especial.' },
  { image: tarjetaImg, title: 'Tarjeta de Descuento', description: 'Compra una tarjeta de descuento y ahorra en tus próximas entradas al cine.' },
  { image: comboImg, title: 'Combo Especial', description: 'Aprovecha nuestro combo especial con palomitas y bebida a precio reducido.' }
];

// Publicidad
const ads = [
  { image: publicidad1, title: '' },
  { image: publicidad2, title: '' },
  { image: publicidad3, title: '' },
  { image: publicidad4, title: '' },
];

const Home = () => {
  const limitedMovies = movies.slice(0, 10);

  return (
    <main>
      <div className="main-content">
        <div className="left-content">
          <section className="carousel">
            <h2>Carrusel de Películas</h2>
            <div className="carousel-container">
              <Carousel movies={limitedMovies} />
            </div>
          </section>
          <section className="recent-movies">
            <h2>Películas Recientes</h2>
            <div className="movies-container">
              {recentMovies.map((movie, index) => (
                <div key={index} className="movie">
                  <img src={movie.image} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          </section>
          <section className="upcoming-movies">
            <h2>Próximamente en el Cine</h2>
            <div className="upcoming-movies-container">
              {upcomingMovies.map((movie, index) => (
                <div key={index} className="upcoming-movie">
                  <img src={movie.image} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          </section>
          <section className="offers">
            <h2>Ofertas Actuales</h2>
            <div className="offers-container">
              {offers.map((offer, index) => (
                <div key={index} className="offer">
                  <img src={offer.image} alt={offer.title} />
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="ads">
          {ads.map((ad, index) => (
            <div key={index} className="ad">
              <img src={ad.image} alt={ad.title} />
              <h3>{ad.title}</h3>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
};

export default Home;
