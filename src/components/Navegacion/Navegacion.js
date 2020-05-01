import React from 'react'
import { NavLink } from "react-router-dom";
import './Navegacion.css'


const Navegacion = () =>
{
	return(
		<nav className="Navegacion">
			<ul>
				<li>
					<NavLink 
						to="/react-prueba-1/inicio" 
						activeClassName="link-activo">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-1/registro" 
						activeClassName="link-activo">
						Registro
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-1/curso" 
						activeClassName="link-activo">
						Curso
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-1/contacto" 
						activeClassName="link-activo">
						Contacto
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navegacion