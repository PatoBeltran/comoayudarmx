import * as React from 'react';

interface IAboutModalProps {
    close: () => void,
    display: boolean
}

export class AboutModal extends React.Component<IAboutModalProps, any> {
  render() {
    return (
        <section className={`modal ${this.props.display ? 'show' : ''}`} data-modal="about">
          <a onClick={() => this.props.close() } className="modal__close">Cerrar</a>
          <div className="modal__container">
            <h2>Acerca de Como Ayudar</h2>
            <p>Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.</p>
            <p>Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en <a href="https://github.com/eldelentes/comoayudarmx"><i className="fa fa-github"></i>Github</a></p>
            <hr />
            <p> Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:</p>
            <a href="https://twitter.com/comoayudarmx" target="_blank" className="modal__button"><i className="fa fa-twitter"></i>@comoayudarmx</a> o <a className="modal__email" href="mailto:comoayudarmx@gmail.com">comoayudarmx@gmail.com</a>
          </div>
        </section>
    );
  }
}