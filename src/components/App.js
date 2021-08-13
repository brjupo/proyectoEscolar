import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header';
import Inicio from './Inicio';
import Calculadora from './Calculadora';
import Alarmas from './Alarmas';

const App = () => {
  return (
    <BrowserRouter>
      <div className="margen">
        <Header />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/calculadora" component={Calculadora} />
        <Route exact path="/alarmas" component={Alarmas} />
      </div>
    </BrowserRouter>
  );
}

export default App;
