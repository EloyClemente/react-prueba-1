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
						to="/inicio" 
						activeClassName="link-activo">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/registro" 
						activeClassName="link-activo">
						Registro
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/curso" 
						activeClassName="link-activo">
						Curso
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/contacto" 
						activeClassName="link-activo">
						Contacto
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navegacion