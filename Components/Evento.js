const Evento = (props) => {

    const { url, name, description } = props.info;
    //console.log(props)

    let titulo = name.text;
    if(titulo.length > 101){
        titulo= titulo.substr(0,100) + "...";
    }

    let descripcion = description.text;
    if (descripcion){
        descripcion=descripcion.substr(0,250) + "...";
    }

    return ( 
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h4 className="mb-3">{titulo}</h4>
            <p className="mb-1">{descripcion}</p>
        </a>
     );
}
 
export default Evento;