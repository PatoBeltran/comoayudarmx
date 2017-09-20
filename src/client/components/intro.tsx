import * as React from 'react';

export class Intro extends React.Component {
  render() {
    return (
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
    );
  }
}