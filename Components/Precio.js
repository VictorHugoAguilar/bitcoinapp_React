const Precio = props => {
    // console.log(props);

    const {
        quote,
        last_updated
    } = props.precio;

    // Obtenemos el precio y lo dejamos solo a dos decimales
    const precio = Number.parseFloat(quote.USD.price).toFixed(2);

    return (
        <div className="card text-white bg-danger mb-3">
            <div className="card-header">Precio de Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: {precio} U$D</h4>
                <p className="card-text">
                    <small className="font-weight-light font-italic">
                        Last updated {last_updated}
                    </small>
                </p>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">Ultima hora: </span>
                        {quote.USD.percent_change_1h}%
                    </p>
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">
                            Ultima 24 hora:{" "}
                        </span>
                        {quote.USD.percent_change_24h}%
                    </p>
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">
                            Ultimos 7 días:{" "}
                        </span>
                        {quote.USD.percent_change_7d}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Precio;
