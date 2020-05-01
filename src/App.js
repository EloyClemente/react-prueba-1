import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Navegacion from './components/Navegacion/Navegacion'
import Inicio from './views/Inicio'
import Registro from './views/Registro'
import Curso from './views/Curso'
import Contacto from './views/Contacto'


function App() {
      return (
            <BrowserRouter>
                  <div className="App">

                        <Navegacion/>

                        <Switch>
                              <Route path="/react-prueba-1/inicio">
                                    <Inicio/>
                              </Route>
                              <Route path="/react-prueba-1/registro">
                                    <Registro/>
                              </Route>
                              <Route path="/react-prueba-1/curso">
                                    <Curso/>
                              </Route>
                              <Route path="/react-prueba-1/contacto">
                                    <Contacto/>
                              </Route>
                        </Switch>

                  </div>
            </BrowserRouter>
      );
}

export default App;

