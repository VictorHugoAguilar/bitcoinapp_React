import Noticia from "./Noticia";

const Noticias = (props) => {

    const {noticias} = props;

    // console.log(noticias)

    return ( 
        <div className="row">
            {noticias.map((noticia) => (
                <Noticia
                    key={noticia.publishedAt} 
                    noticia={noticia}
                />
            )) }            
        </div>
     );
}
 
export default Noticias;