

const Boton = (props) => {
    return (
        <button className="boton" onClick={props.manejarClick} value={props.valor}>
            {props.texto}
        </button>
    )
}

// Boton.propTypes = {
//     texto: PropTypes.string.isRequired,
//     handleClick: PropTypes.func.isRequired
// }

export default Boton;