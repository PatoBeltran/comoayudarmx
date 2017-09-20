import * as React from 'react';
import { connect } from 'react-redux';
import { load_cards } from '../actions'
import { CardItem } from '../components/cardItem'

enum FilterType {
    donations,
    location
}

class Cards extends React.Component<any, any> {
    private _createFilters(cards: any[], filterType: FilterType) {
        var flags = {}, output: string[] = [];
        cards.forEach(card => {
            if (filterType == FilterType.donations) {
                if (!flags[card.location]) {;
                    flags[card.location] = true;
                    output.push(card.location);
                }
            } else if (filterType == FilterType.location) {
                if (!flags[card.type]) { 
                    flags[card.type] = true
                    output.push(card.type);  
                } 
            }
        });
        return output;
    }

    componentDidMount() {
        this.props.load_cards();
    }
    render() {
        const cardComponents = this.props.cards.map((card, i) => {
            return <CardItem key={i} 
                             title={card.title}  
                             description={card.description} 
                             type={card.type}
                             location={card.locacion}
                             moreInfo={card.link} />;
        });
        const donationTypes = this._createFilters(this.props.cards, FilterType.donations);
        const locations = this._createFilters(this.props.cards, FilterType.location);
        const donationTypeFilterOptions = donationTypes.map((f) => {
            return <option>{f}</option>
        });
        var locationFilterOptions = locations.map((f) => {
            return <option>{f}</option>
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
                                    <option defaultValue="all">Todas</option>
                                    {donationTypeFilterOptions}
                                </select>
                            </div>
                    
                            <div className="filter">
                                <label htmlFor="location">Filtrar por ubicación</label>
                                <select className="filter" id="location">
                                    <option selected disabled>Selecciona una opción</option>
                                    <option defaultValue="all">Todas</option>
                                    {locationFilterOptions}
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