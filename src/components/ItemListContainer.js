import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
      <div className="">
         <h1>{props.titulo}</h1>
         <h2>{props.subtitulo}</h2>
      </div>
    );
  }

  export default ItemListContainer;