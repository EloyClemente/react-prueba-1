import React, { useState }  from 'react'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export const AuthContext = React.createContext()


function Registro()
{
	const firebase = useFirebaseApp()
	const user     = useUser()

	const [ email, setEmail ]       = useState('')
	const [ password, setPassword ] = useState('')


	const crearCuenta = async ()=> { await firebase.auth().createUserWithEmailAndPassword(email, password) }
	const login       = async ()=> { await firebase.auth().signInWithEmailAndPassword(email, password) }
	const logout      = async ()=> { await firebase.auth().signOut() }


	return(
		<div>
			<br/>
			<p>Página de contacto</p>
			<br/>

			{ user && <p>{ user.email }</p>}
			
			<br/>

			{ !user &&

				<div>
					<input type="text" 
						  name="email" 
						  placeholder="Email"
						  onChange={ (event)=> setEmail(event.target.value) }
					/>
					<input type="password" 
						  name="password" 
						  placeholder="Contraseña"
						  onChange={ (event)=> setPassword(event.target.value) }
					/>
					<input type="submit" value="Crear cuenta" onClick={ crearCuenta }/>
					<input type="submit" value="Iniciar sesión" onClick={ login }/>
				</div>
			}

			{ user && <button onClick={ logout }>Cerrar sesión</button> }

		</div>
	)
}

export default Registro