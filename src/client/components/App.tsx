import * as React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="mainHeader">
          <div className="container">
            <h2 className="logo">¿Como Ayudar?</h2>
            <nav className="mainNav">
              <a className="modal__link" href="#" data-modal="about">Acerca de</a>
              <a className="hide-mobile"  href="contactos.html">Contactos de Emergencia</a>
              <a className="hide-mobile" href="https://github.com/eldelentes/comoayudarmx" target="_blank">Contribuir <i className="fa fa-github"></i></a>
            </nav>
          </div>
        </header>
        <section className="intro">
          <div>
            <h2 className="intro__title">Ayuda Sismo 19 de Septiembre</h2>
            <h4 className="intro__location"><i className="fa fa-globe"></i>CDMX, Puebla, Morelos</h4>
            <div className="buttons">
              <a className="button" href="#cards">¿Cómo ayudar?</a>
              <a className="button modal__link" href="#" data-modal="new">Públicar <i className="fa fa-edit"></i></a>
            </div>
          </div>
        </section>
        <section className="cards" id="cards">
          <div className="cards__intro">
            <h3>¿Cómo ayudar a los afectados del Sismo?</h3>
            <p>A continuación encontrarás diferentes organizaciones, centros de acopio o formas de ayudar a los afectados o rescatistas del sismo.</p>
            <p>Si cónoces alguna otra forma de ayudar <a className="modal__link" data-modal="new" href="#">Contáctanos</a></p>
          </div>
          <div className="filters">
            <div className="container">
              <div className="filter">
                <label htmlFor="donation_type">Filtrar por tipo de donación</label>
                <select className="filter" id="donation_type">
                  <option selected disabled>Selecciona una opción</option>
                </select>
              </div>

              <div className="filter">
                <label htmlFor="location">Filtrar por locación</label>
                <select className="filter" id="location">
                  <option selected disabled>Selecciona una opción</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <div id="cards_container" className="container">
        </div>
        <section className="modal" data-modal="about">
          <a href="#" className="modal__close">Cerrar</a>
          <div className="modal__container">
            <h2>Acerca de Como Ayudar</h2>
            <p>Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.</p>
            <p>Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en <a href="https://github.com/eldelentes/comoayudarmx"><i className="fa fa-github"></i>Github</a></p>
            <hr />
            <p> Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:</p>
            <a href="https://twitter.com/comoayudarmx" target="_blank" className="modal__button"><i className="fa fa-twitter"></i>@comoayudarmx</a> o <a className="modal__email" href="mailto:comoayudarmx@gmail.com">comoayudarmx@gmail.com</a>
          </div>
        </section>

        <section className="modal" data-modal="new">
          <a href="#" className="modal__close">Cerrar</a>
          <div className="modal__container">
            <h2>Públicar Forma de Ayuda</h2>
            <p>Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:</p>
            <a href="https://twitter.com/comoayudarmx" target="_blank" className="modal__button"><i className="fa fa-twitter"></i>@comoayudarmx</a> o <a className="modal__email" href="mailto:comoayudarmx@gmail.com">comoayudarmx@gmail.com</a>
          </div>
        </section>
      </div>
    );
  }
}