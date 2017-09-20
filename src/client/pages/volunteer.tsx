import * as React from 'react';
import { MainHeader } from '../components/header'
import { Intro } from '../components/intro'

export class Volunteer extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Intro />
        <div className="container">
          <div className="filters">
             <div className="container">
                 <div className="filter">
                     <h3>Derrumbes, Albergues, Hospitales y Voluntariado Sismo CDMX</h3>
                 </div>
             </div>
         </div>
         <div className="map-container">
             <iframe src="https://www.google.com/maps/d/embed?mid=1_-V97lbdgLFHpx-CtqhLWlJAnYY" height="480"></iframe>
         </div>

         <div className="filters">
             <div className="container">
                 <div className="filter">
                     <h3>Daños y derrumbes, Centros de Acopio, Alberges Oficiales Sismo CDMX</h3>
                 </div>
             </div>
         </div>
         <div className="map-container">
             <iframe src="https://www.google.com/maps/d/embed?mid=13B_gbt3e5RWk_6xQoQ15xxhGOFs" height="480"></iframe>
         </div>
      </div>
    </div>
    );
  }
}
