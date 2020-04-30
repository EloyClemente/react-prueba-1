import React, { useState }  from 'react'


function Registro()
{
	const [ datos, setDatos ] = useState({ user: '', pass: '' })
	const [ imprimir, setImprimir ] = useState('vacio')



	function handleInputChange(event)
	{
		setDatos({ ...datos, [event.target.name] : event.target.value })
	}


	function enviarDatos(event)
	{
		event.preventDefault()
		setImprimir([ datos.user ] + [ datos.pass ])
	}


	return(
		<div>
			<p>Página de contacto</p>
			<form onSubmit={ enviarDatos }>
				<input type="text" 
					  name="user" 
					  placeholder="Nombre"
					  onChange={ handleInputChange }
				/>
				<input type="password" 
					  name="pass" 
					  placeholder="Contraseña"
					  onChange={ handleInputChange }
				/>
				<input type="submit" value="Enviar"/>
			</form>
			<p>{ imprimir }</p>
		</div>
	)
}

export default Registro