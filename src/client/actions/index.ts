import { ActionType, Action, ModalType } from '../types';

export function toggle_modal(type: ModalType, show: boolean): any {
    var aType;
    switch(type) {
        case ModalType.About:
            aType = show ? ActionType.SHOW_ABOUT_MODAL : ActionType.HIDE_ABOUT_MODAL;
            break;
        case ModalType.HowTo:
            aType = show ? ActionType.SHOW_HOWTO_MODAL : ActionType.HIDE_HOWTO_MODAL;
            break;
    }
    return {
        type: aType,
        modal: {
            type: type,
            showing: show
        }
    }
}

export function add_card(card: any): Action {
    return {
        type: ActionType.ADD_CARD,
        card: card
    }
}

//TODO: This should not be hard coded
export function load_cards(): Action {
    return {
        type: ActionType.LOAD_CARDS,
        cards: Cards
    }
}

var Cards = [
    //{title: "Donación Topos", description: "Los Topos son una asosiación de rescatistas indepe…tencilios necesarios para el rescate de personas.", type: "Monetaria", location: "Todo el mundo.", link: "https://twitter.com/topos/status/908000616575680512"},
    {title: "Donación Topos", description: "Los Topos son una asosiación de rescatistas independientes. Tu ayuda provee de los utencilios necesarios para el rescate de personas.", type: "Monetaria", location: "Todo el mundo.", link: "https://twitter.com/topos/status/908000616575680512"},
    {title: "Donación Cruz Roja", description: "Dona a la Cruz Roja. Ellos brindan servicio médico gratuito.", type: "Monetaria", location: "Todo el mundo.", link: "https://cruzrojadonaciones.org/"},
    {title: "Acopio Estadio BBVA", description: "Acopio de viveres en el estadio de los rayados BBVA.", type: "Víveres", location: "Monterrey", link: "https://twitter.com/lucho_ibarraS/status/910306690045759488/photo/1"},
    {title: "Acopio UNAM", description: "Acopio de viveres en la UNAM.", type: "Víveres", location: "CDMX", link: "https://twitter.com/UNAM_MX/status/910289369122172928"},
    {title: "Acopio Tijuana", description: "Acopio de viveres en diferentes puntos de Tijuana..", type: "Víveres", location: "Tijuana", link: "https://twitter.com/paolapl1/status/910315456866672640"},
    {title: "Proviciones para Albergues", description: "Ayuda llevando proviciones a los diferentes albergues en la Ciudad de México.", type: "Víveres", location: "CDMX", link: "https://twitter.com/opusdeimx/status/910328567770370048"},
    {title: "This One's For Mexico", description: "Una iniciativa que permite donaciones en dolares estadounidenses para aquellos que no pueden donar en pesos mexicanos. El 100% de las donaciones van a la Cruz Roja Mexicana.", type: "Monetaria", location: "Todo el mundo.", link: "https://www.gofundme.com/ThisOnesForMexico"},
    {title: "Centro de Acopio Estadio Teodoro Mariscal", description: "¡ATENCIÓN AFICIÓN VENADOS! Hoy nos toca ayudar, el Teodoro Mariscal será Centro de acopio", type: "Víveres", location: "Mazatlan", link: "https://twitter.com/venadosbeisbol/status/910261307911409672"},
    {title: "Lista de Albergues CDMX", description: "Lista de albergues delegacionales para las personas damnificadas por el #sismo en la #CDMX.", type: "Víveres", location: "CDMX", link: "http://www.cdmx.gob.mx/comunicacion/nota/listado-de-albergues-cdmx"},
    {title: "Voluntarios CDMX", description: "Si deseas sumarte como voluntario para ayudar a los afectados por el sismo asiste al #ERUM de Secretaria de Seguridad Pública de CDMX.", type: "Trabajo Voluntario", location: "CDMX", link: "https://twitter.com/SSP_CDMX/status/910285716361445376"},
    {title: "Amazon y Cruz Roja", description: "Compra víveres, utencilios u otro material desde Amazon para la Cruz Roja", type: "Varios", location: "Todo el mundo", link: "https://goo.gl/AJrNZU"},
    {title: "Acopio León", description: "Centro de acopio ubicado en estadio de futbol del Club león", type: "Varios", location: "León", link: "https://www.facebook.com/LeonBicampeon.mx/photos/a.10150821538553678.439972.303234958677/10155868032008678/?type=1&theater"},
    {title: "Centros de Acopio Guadalajara", description: "Listado de sitios en Guadalajara para donar productos en apoyo a víctimas del terremoto.", type: "Víveres", location: "Guadalajara", link: "http://www.informador.com.mx/jalisco/2017/738544/6/instalan-centros-de-acopio-para-damnificados-por-sismo.htm"},
    {title: "Acopio Zocalo Puebla", description: "Ayuda con viveres y/o medicina en Puebla.", type: "Víveres", location: "Puebla", link: "https://twitter.com/SoftwareProfit/status/910343113532739585"},
    {title: "Acopio Club Querétaro", description: "Ayuda con viveres y/o medicina en Querétaro.", type: "Víveres", location: "Querétaro", link: "https://twitter.com/NOESIScom/status/910342495552159744"},
    {title: "Acopio FIME Monterrey", description: "Ayuda con viveres y/o medicina en FIME / UANL.", type: "Víveres", location: "Monterrey / UANL", link: "https://twitter.com/fimeme/status/910342213300756480"},
    {title: "Acopio TEC Sinaloa", description: "Ayuda con viveres y/o medicina en ITESM Sinaloa", type: "Víveres", location: "Sinaloa", link: "https://twitter.com/VicenteMata97/status/910344591689187328"},
    {title: "Fundación Mark", description: "El Hospital INP requiere ayuda de utensilios médicos", type: "Kit Médico", location: "Estado de México", link: "https://www.facebook.com/101047836613569/photos/a.604672542917760.1073741835.101047836613569/1602583389793332/?type=3&theater"},
    {title: "Diseño Voluntario", description: "Diseño para responder a la necesidad de vivienda en los lugares afectados por el pasado terremoto en el Sureste del País. Queremos que participes, no importa donde te encuentres y que juntos podamos cambiar la respuesta hacia estas emergencias. (Arquitectos e Ingenieros) a", type: "Trabajo Voluntario", location: "Todo el mundo", link: "https://docs.google.com/forms/d/e/1FAIpQLScMpF70qfV9P_63-ZRg_ZhzSM_gCXUxjIiAJu8E2KQ99a9y8Q/viewform"},
    {title: "Acopio CapitalSocialPorTi", description: "Acopio de viveres en la CDMX. Artículos primera necesidad e higiene. ", type: "Víveres", location: "CDMX", link: "https://twitter.com/TVyNovelasMex/status/910319467279904768"},
    {title: "Acopio Tecmilenio", description: "Acopio de viveres en la Universidad Tecmilenio campus Las Torres. Artículos primera necesidad e higiene. ", type: "Víveres", location: "Monterrey", link: "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.0-9/21752181_797505383789692_3532561927869413672_n.jpg?oh=c9b6b04098813e13cb0ea2f7c24dec9d&oe=5A3D868F"},
    {title: "Centro Acopio FARQ", description: "Centro de Acopio en La Facultad de Arquitectura UANL", type: "Víveres", location: "Monterrey.", link: "https://twitter.com/qt_ewok/status/910358246657073153"},
    {title: "Centro Acopio FAV", description: "Centro de Acopio en La Facultad de Artes Visuales UANL", type: "Víveres", location: "Monterrey.", link: "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-0/s480x480/21616244_1344314475691495_4475004746040701212_n.jpg?oh=d6ed0e1262d913fc70ce69694e190a52&oe=5A48CE3F"},
    {title: "Ayuda Medicinas Monterrey", description: "Ayuda con elementos de curación como alcohol, gasas, cubre bocas, agua oxigenada, solución salina, baterías.", type: "Medicamentos", location: "Monterrey.", link: "https://twitter.com/vovimayhem/status/910371427248984065"},
    {title: "Ayuda Arquitectos o Ingenieros Virtualmente", description: "Ayuda virtual apra hacer evaluaciones estructurales.", type: "Ayuda/Asesoría", location: "Todo el Mundo.", link: "https://twitter.com/YONOFUI/status/910381253144309761"},
    {title: "Voluntarios y Brigadas Universidad Panamericana", description: "Centro de Acopio en la Universidad Panamericana", type: "Varios", location: "CDMX", link: "https://facebook.com/UPMexico"},
    {title: "Paypal Cruz Roja Mexicana", description: "Pagina oficial para donar a la Cruz Roja Mexicana por medio de Paypal", type: "Monetaria", location: "Todo el Mundo.", link: "https://www.paypal.com/mx/webapps/mpp/donar/institution?name=redCross"},
    {title: "Centros de Acopio Dolores Hidalgo", description: "Centros de acopio en Guanajuato", type: "Varios", location: "Guanajuato", link: "http://comoayudar.mx/img/hidalgo.jpg"},
    {title: "Acopio Medicina Monterrey", description: "Recolección de medicina para médicos que saldrán desde Monterrey", type: "Medicamentos", location: "Monterrey", link: "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/21686379_10159419122800381_7969880375128985024_n.jpg?oh=85ad72baa5f38b27878e76b884187465&oe=5A3B08F6"},
    {title: "Nuhda Team Donations", description: "NUHDA TEAM will be collecting all in kind donations at NUHDA TI:ME Montecillo Wednesday and Thursday from 12 PM to 6 PM. All items will be delivered in Juarez during the weekend to send to Mexico City.", type: "Víveres", location: "El Paso, Texas", link: "https://www.facebook.com/permalink.php?story_fbid=243962466127294&id=138796859977189"},
    {title: "Centro de Acopio Aztlán Bar", description: "Colecta de víveres para las personas afectadas por el sismo en la CDMX. Horarios de 11 AM a 8 PM", type: "Víveres", location: "CDMX", link: "https://www.facebook.com/aztlanrb/posts/1424117287677919"},
    {title: "Centro de Acopio en Torreón", description: "Centros de Acopio en Torreón Coahuila.", type: "Víveres", location: "Torreón", link: "https://twitter.com/AnaMaciasAnaya/status/910349434315268096"},
    {title: "Centro de Acopio Parque España", description: "20 de septiembre de 10:00 a 17:00 en la explanada del Parque España de la CDMX.", type: "Varios", location: "CDMX", link: "https://www.facebook.com/indiemovradio/photos/pb.1048756795183942.-2207520000.1505889399./1543570285702588/?type=3"},
    {title: "Centro de Acopio Mexicali", description: "Centro de acopio en Méxicalí B.C.", type: "Víveres", location: "Mexicali", link: "https://twitter.com/claumeely/status/910396891640225793"},
    {title: "Acopio Carnicerías Ramos", description: "20 de septiembre a partir de las 8 de la mañana, TODAS las sucursales Ramos funcionarán como centro de acopio. ", type: "Kit Médico", location: "Monterrey", link: "https://www.facebook.com/CarnesRamos/posts/1569495539739254"},
    {title: "Aloja personas damnificadas a través de Airbnb México", description: "Ayuda a los damnificados que necesitan un lugar donde dormir a través de Airbnb México", type: "Alojamiento", location: "CDMX", link: "https://www.airbnb.com/welcome/evacuees/terremotoenmexico"},
    {title: "Donación Altruista de Sangre", description: "Indicaciones del IMSS para poder donar sangre.", type: "Sangre", location: "CDMX, Pue, Mor, Oax, EdoMex y Gro", link: "http://www.imss.gob.mx/salud-en-linea/donacion-sangre"},
    {title: "Centro de acopio Coyoacán", description: "Centro de acopio de Coyoacán en el kiosko de la alameda sur.", type: "Viveres, medicina", location: "CDMX", link: "https://twitter.com/Del_Coyoacan/status/910345167332413443"},
    {title: "Albergues en Coyoacán, CDMX", description: "Existen tres albergues en la delegación Coyoacán: La Casa de las Letras, la Territorial Culhuacanes y el CDC de Bombas.", type: "Albergue", location: "CDMX", link: "https://twitter.com/Del_Coyoacan/status/910346089001299969"},
    {title: "Donación Altruista de Sangre", description: "Indicaciones del IMSS para poder donar sangre.", type: "Sangre", location: "CDMX y Morelos", link: "http://www.imss.gob.mx/salud-en-linea/donacion-sangre"},
    {title: "Centro de Acopio Creative Dreams", description: "Colecta de víveres en oficinas de Creative Dreams.", type: "Víveres", location: "Monterrey", link: "https://www.facebook.com/Annah.Mtz/posts/10155750696949878?pnref=story"},
    {title: "Centro de Acopio Crossfit World", description: "Colecta de víveres en Crossfit World.", type: "Víveres", location: "Monterrey", link: "https://www.facebook.com/permalink.php?story_fbid=1295178293926290&id=424423427668452"},
  ];