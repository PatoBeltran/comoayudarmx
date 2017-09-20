import * as React from 'react';
import { connect } from 'react-redux';
import { load_cards } from '../actions'
import { CardItem } from '../components/cardItem'

class Cards extends React.Component<any, any> {
    componentDidMount() {
        this.props.load_cards();
    }
    render() {
        var cardComponents = this.props.cards.map((card, i) => {
            return <CardItem key={i} 
                             title={card.title}  
                             description={card.description} 
                             type={card.type}
                             location={card.locacion}
                             moreInfo={card.link} />;
        });
        return (
            <div>
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
                    {cardComponents}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        cards: state.cards,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        load_cards: () => dispatch(load_cards()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)