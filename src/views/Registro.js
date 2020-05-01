import React, { useState }  from 'react'


function Registro()
{
	const [ datos, setDatos ] = useState({ email: '', password: '' })
	const [ imprimir, setImprimir ] = useState('vacio')



	function handleInputChange(event)
	{
		setDatos({ ...datos, [event.target.name] : event.target.value })
	}


	function enviarDatos(event)
	{
		event.preventDefault()
		setImprimir([ datos.email ] + [ datos.password ])
	}


	return(
		<div>
			<p>Página de contacto</p>
			<form onSubmit={ enviarDatos }>
				<input type="text" 
					  name="email" 
					  placeholder="Email"
					  onChange={ handleInputChange }
				/>
				<input type="password" 
					  name="password" 
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