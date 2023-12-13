import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
} from "firebase/auth"

import { auth } from "../firebase.config"
import { useState, useEffect, createContext } from "react"
import { validateErrorFirebase } from "../helpers/validateErrorFirebase"

const AuthContext = createContext()

function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [gettingUser, setGettingUser] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const signUpWithEmail = async (email, password) => {
		try {
			setLoading(true)
			const response = await createUserWithEmailAndPassword(auth, email, password)
			const userCredential = response.user
			setUser(userCredential)
		} catch (error) {
			setError(validateErrorFirebase(error.code))
			console.error(error)
			return null
		} finally {
			setLoading(false)
		}
	}

	const signInWithEmail = async (email, password) => {
		setLoading(true)
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			const { user } = userCredential
			setError(null)
			setUser(user)
		} catch (error) {
			console.error(error.message)
			setError(validateErrorFirebase(error.code))
		} finally {
			setLoading(false)
		}
	}

	const logout = () => {
		try {
			signOut(auth)
		} catch (error) {
			console.error(error.message)
			setError(validateErrorFirebase(error.code))
		}
	}

	const signInWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider()
		return signInWithPopup(auth, googleProvider)
	}
	const signInWithFacebook = () => {
		const facebookProvider = new FacebookAuthProvider()
		return signInWithPopup(auth, facebookProvider)
	}

	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email)
	}

	useEffect(() => {
		setGettingUser(true)
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			currentUser ? setUser(currentUser) : setUser(null)
			setGettingUser(false)
		})

		return () => unsubscribe()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
				gettingUser,
				signUpWithEmail,
				signInWithEmail,
				logout,
				signInWithGoogle,
				signInWithFacebook,
				resetPassword,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider }
