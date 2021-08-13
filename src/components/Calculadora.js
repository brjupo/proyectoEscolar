import React from "react";
import Boton from "./Boton";
import Entrada from "./Entrada";
import Resultado from "./Resultado";

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor1: null,
      valor2: null,
      estado: "IDLE",
      operacion: "",
      resultadoOperacion: null,
    };
  }

  componentWillMount() {
    console.log("Iniciando calculadora en WillMount.... por favor, espere");
  }

  componentDidMount() {
    console.log("La calculadora ha iniciado con éxito en DidMount");
  }

  componentDidUpdate() {
    console.log("Hubo un cambio en la vista en DidUpdate");
  }

  componentWillUnmount() {
    console.log("Cerrando la calculadora en WillUmount");
  }

  validar(numero) {
    if (
      isNaN(Number(numero)) ||
      typeof numero == "undefined" ||
      numero === ""
    ) {
      return false;
    }
    return true;
  }

  setValor1 = (event) => {
    if (
      !(
        this.state.estado === "IDLE" ||
        this.state.estado === "Valor_uno_agregado"
      )
    ) {
      alert("Oprime reset, por favor");
    } else if (this.validar(event.target.value)) {
      this.setState({
        valor1: event.target.value,
        estado: "Valor_uno_agregado",
      });
    } else {
      alert("Error, por favor verifique");
    }
  };

  setValor2 = (event) => {
    if (
      !(
        this.state.estado === "Valor_uno_agregado" ||
        this.state.estado === "Valor_dos_agregado"
      )
    ) {
      alert("Primero agrega el valor 1");
    } else if (this.validar(event.target.value)) {
      this.setState({
        valor2: event.target.value,
        estado: "Valor_dos_agregado",
      });
    } else {
      alert("Error, por favor verifique");
    }
  };

  setOperacion = (event) => {
    if (
      this.state.estado === "Valor_dos_agregado" ||
      this.state.estado === "Operacion_seleccionada"
    ) {
      this.setState({
        operacion: event.target.value,
        estado: "Operacion_seleccionada",
      });
    } else {
      alert("Primero agrega el valor 2");
    }
  };

  igual = () => {
    if (
      this.state.estado === "Operacion_seleccionada" ||
      this.state.estado === "Ejecutando_operacion"
    ) {
      this.setState({
        estado: "Ejecutando_operacion",
      });
      if (this.state.operacion === "suma") {
        this.setState({
          resultadoOperacion:
            parseFloat(this.state.valor1) + parseFloat(this.state.valor2),
          estado: "Operacion_ejecutada",
        });
      } else if (this.state.operacion === "resta") {
        this.setState({
          resultadoOperacion: this.state.valor1 - this.state.valor2,
          estado: "Operacion_ejecutada",
        });
      }
    } else {
      alert("Primero elige la operación");
    }
  };

  reiniciar = () => {
    this.setState({
      valor1: null,
      valor2: null,
      estado: "IDLE",
      operacion: "",
      resultadoOperacion: null,
    });
  };

  render() {
    return (
      <div className="margen">
        <p className="pasos">Ingresa el primer número</p>
        <Entrada manejarCambio={this.setValor1} />
        <p className="pasos">Ingresa el segundo número</p>
        <Entrada manejarCambio={this.setValor2} />
        <p className="pasos">Selecciona la operación a realizar</p>
        <Boton texto="+" valor="suma" manejarClick={this.setOperacion} />
        <Boton texto="-" valor="resta" manejarClick={this.setOperacion} />
        <p className="pasos">Da clic para obtener el resultado</p>
        <Boton texto="=" valor="igual" manejarClick={this.igual} />
        <p className="pasos">El resultado es:</p>
        <Resultado resultado={this.state.resultadoOperacion} />
        <p className="pasos">Da clic para reiniciar</p>
        <Boton texto="AC" valor="reset" manejarClick={this.reiniciar} />
      </div>
    );
  }
}

export default Calculadora;
