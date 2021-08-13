import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="link">
        Inicio
      </Link>
      <Link to="/calculadora" className="link">
        Calculadora
      </Link>
      <Link to="/alarmas" className="link">
        Alarmas
      </Link>
    </div>
  );
};

export default Header;
