import fetch from "isomorphic-unfetch";

// Importamos componentes
import MasterPage from "../Components/MasterPage";
import Precio from "../Components/Precio";
import Noticias from "../Components/Noticias";

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio precio={props.precioBitcoin} />
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
                <Noticias noticias={props.noticiasBitcoin}/>
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {

    const url = 'https://api.coinmarketcap.com/v2/ticker/'

    const urlNot = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-11&sortBy=publishedAt&apiKey=5de8c4c624a6470ca320c459fb0308a5&language=es'

    const precio = await fetch(url);

    const noticias = await fetch(urlNot);

    const resPrecio = await precio.json();

    const resNoticias = await noticias.json();

    return {
        precioBitcoin: resPrecio.data[1].quotes.USD,
        noticiasBitcoin: resNoticias.articles
    }
}

export default Index;
