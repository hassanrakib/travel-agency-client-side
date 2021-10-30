import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const logInWithPopup = () => {
        signInWithPopup(auth, provider)
            .then(result => setUser(result.user))
            .catch(err => setError(err.message));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch(err => setError(err.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
        setIsLoading(false);
    }, [auth]);


    return { logInWithPopup, logOut, user, setUser, error, setError, isLoading, setIsLoading }

}

export default useFirebase;