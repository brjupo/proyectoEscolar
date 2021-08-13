import React, { useEffect, useState } from "react";
import Alarma from "./Alarma";

const Alarmas = (props) => {
  const [state, setState] = useState({
    alarma: "",
    mensaje: "",
    listaAlarmas: ["08:00"],
  });

  const didUpdate = () => {
    setState({
      ...state,
      mensaje: `Cantidad de alarmas: ${state.listaAlarmas.length}`,
    });
  };

  useEffect(didUpdate, [state.listaAlarmas]);

  const handleInputChange = (event) => {
    setState({
      ...state,
      alarma: event.target.value,
    });
  };

  const handleClick = () => {
    const alarmaEnEstado = state.alarma;
    if (!alarmaEnEstado) return;
    if (state.listaAlarmas.includes(state.alarma)) {
      alert(
        "La alarma a las: " +
          state.alarma +
          " ya existe, por favor elige otro horario"
      );
      return;
    }
    const listaActualizada = [...state.listaAlarmas, alarmaEnEstado];
    setState({
      ...state,
      alarma: "",
      listaAlarmas: listaActualizada,
    });
  };

  const borrarAlarmaDeLista = (key) => {
    const copiaDeLista = [...state.listaAlarmas];
    copiaDeLista.splice(key, 1);
    setState({
      ...state,
      listaAlarmas: copiaDeLista,
    });
  };

  return (
    <div className="margen">
      <p className="mensajeAlarmas">{state.mensaje}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Clock_10-30.svg"
        className="reloj"
      ></img>
      <br />
      <input
        value={state.alarma}
        onChange={handleInputChange}
        type="time"
        className="inputHora"
      />
      <button onClick={handleClick} className="botonAgregar">
        Agregar
      </button>

      <ul className="listaAlarmas">
        {state.listaAlarmas.map((nmbr, key) => (
          <div key={key} className="alarmas">
            <Alarma
              alarma={nmbr}
              borrarAlarmaDeLista={() => borrarAlarmaDeLista(key)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Alarmas;
