import MasterPage from "../Components/MasterPage";
import fetch from "isomorphic-unfetch";

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                {console.log(props)}
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {

    const url = 'https://api.coinmarketcap.com/v2/ticker/'

    const precio = await fetch(url);

    const resPrecio = await precio.json();

    return {
        precioBitcoin: resPrecio.data[1].quotes.USD
    }
}

export default Index;
