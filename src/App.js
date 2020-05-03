import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navegacion from './components/Navegacion/Navegacion'
import VistaInicio from './views/VistaInicio'
import VistaRegistro from './views/VistaRegistro'
import VistaCurso from './views/VistaCurso'
import VistaContacto from './views/VistaContacto'


function App() {
      return (
            <BrowserRouter>
                  <div className="App">

                        <Navegacion/>

                        <Switch>
                              <Route path="/react-prueba-1/inicio">
                                    <VistaInicio/>
                              </Route>

                              <Route path="/react-prueba-1/registro">
                                    <VistaRegistro/>
                              </Route>

                              <Route path="/react-prueba-1/curso">
                                    <VistaCurso/>
                              </Route>

                              <Route path="/react-prueba-1/contacto">
                                    <VistaContacto/>
                              </Route>          

                              <Redirect from="/react-prueba-1" to="/react-prueba-1/inicio" />        
                        </Switch>

                  </div>
            </BrowserRouter>
      );
}

export default App;

