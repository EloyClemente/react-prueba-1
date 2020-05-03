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
                              <Route path="/react-prueba-1/inicio"   component={ VistaInicio } />                            
                              <Route path="/react-prueba-1/registro" component={ VistaRegistro } />
                              <Route path="/react-prueba-1/curso"    component={ VistaCurso } />                          
                              <Route path="/react-prueba-1/contacto" component={ VistaContacto } />                                
                              <Redirect from="/react-prueba-1" to="/react-prueba-1/inicio" />        
                        </Switch>

                  </div>
            </BrowserRouter>
      );
}

export default App;

