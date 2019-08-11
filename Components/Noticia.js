const Noticia = props => {
    const {
        author,
        content,
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage
    } = props.noticia;

    let imagen = "";
    if (urlToImage != null && urlToImage!=='') {
        imagen = <img src={urlToImage} alt={title} className="card-img-top" />;
    } else {
        imagen = (
            <img
                src="https://licorespinto.es/wp-content/uploads/2018/06/sin-foto-812.jpg"
                alt={title}
                className="card-img-top"
            />
        );
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">{imagen}</div>
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p>{description}</p>
                <p className="card-text">{source.name}</p>
                <a href={url} target="_blank" className="btn btn-success btn-block">Más información</a>
            </div>
            <div className="card-footer text-muted">
              <small className="text-muted">Publicado: {publishedAt}</small>
            </div>
        </div>
    );
};

export default Noticia;
