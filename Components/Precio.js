const Precio = props => {
    const {
        price,
        percent_change_1h,
        percent_change_7d,
        percent_change_24h
    } = props.precio;

    // Obtenemos el precio y lo dejamos solo a dos decimales
    const precio = price.toFixed(2);

    return (
        <div className="card text-white bg-danger mb-3">
            <div className="card-header">Precio de Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: {precio} U$D</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">Ultima hora: </span>
                        {percent_change_1h}%
                    </p>
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">
                            Ultima 24 hora:{" "}
                        </span>
                        {percent_change_24h}%
                    </p>
                    <p className="card-text">
                        {" "}
                        <span className="font-weight-bold">
                            Ultimos 7 días:{" "}
                        </span>
                        {percent_change_7d}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Precio;
