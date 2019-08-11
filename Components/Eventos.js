import Evento from "./Evento";

const Eventos = props => {
    //Convertilos el objeto en arrays donde cogeremos la key del la posicion en el array
    const eventosId = Object.keys(props.eventos);

    return (
        <div className="list-group">
            {eventosId.map(key => (
                <Evento key={key} info={props.eventos[key]} />
            ))}
        </div>
    );
};

export default Eventos;
