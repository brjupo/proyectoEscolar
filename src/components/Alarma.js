import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Alarma = (props) => {
  const didMount = () => {
    console.log(
      "Replicando DidMount [de una nueva Alarma] al crear una nueva alarma a las: " +
        props.alarma
    );
  };
  const willUnmount = () => {
    return () => {
      console.log("Replicando WillUnmount al eliminar una alarma. ¡Adios!");
    };
  };

  useEffect(didMount, []);
  useEffect(willUnmount, []);

  return (
    <div className="alarma">
      <div className="horaAlarma">{props.alarma}</div>
      <div onClick={props.borrarAlarmaDeLista} className="quitarAlarma">
        X
      </div>
    </div>
  );
};

Alarma.propTypes = {
  alarma: PropTypes.string.isRequired,
};

export default Alarma;
