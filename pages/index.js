import fetch from "isomorphic-unfetch";

// Importamos componentes
import MasterPage from "../Components/MasterPage";
import Precio from "../Components/Precio";
import Noticias from "../Components/Noticias";
import Eventos from "../Components/Eventos";

const Index = props => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio precio={props.precioBit} />
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
                <Noticias noticias={props.noticiasBitcoin} />
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
                <Eventos eventos={props.eventosBitcoin} />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const apiKeyBit = "3532f55f-e536-40c9-8bf6-e1ce278a86c8";

    const urlBit = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;

    const urlNot =
        "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-11&sortBy=publishedAt&apiKey=5de8c4c624a6470ca320c459fb0308a5&language=es";

    const apikey = "NVIUX76TF7Z7GWXGJMGF";

    const urlEvent = `https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&location.address=spain&token=${apikey}`;

    let miInit = {
        method: "GET",
        headers: {
            "X-CMC_PRO_API_KEY": `${apiKeyBit}`
        },

        mode: "cors",
        cache: "default"
    };

    // pasamos la url y los datos de la cabecera que nos haran falta
    const precioBit = await fetch(urlBit, miInit);

    const noticias = await fetch(urlNot);

    const eventos = await fetch(urlEvent);

    const resPrecioBit = await precioBit.json();

    const resNoticias = await noticias.json();

    const resEventos = await eventos.json();

    return {
        noticiasBitcoin: resNoticias.articles,
        eventosBitcoin: resEventos.events,
        precioBit: resPrecioBit.data[0]
    };
};

export default Index;
