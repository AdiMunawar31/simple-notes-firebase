import firebase, { database } from '../../firebase'

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {

        dispatch({ type: "CHANGE_LOADING", value: true })

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Success', user);

                dispatch({ type: "CHANGE_LOADING", value: false })
                resolve(true)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

                dispatch({ type: "CHANGE_LOADING", value: false })
                reject(false)
            })
    })
}


export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {

        dispatch({ type: "CHANGE_LOADING", value: true })

        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const { email, uid, emailVerified, refreshToken } = userCredential.user;
                const dataUser = { email, uid, emailVerified, refreshToken }

                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_ISLOGIN", value: true })
                dispatch({ type: "CHANGE_USER", value: dataUser })
                resolve(dataUser)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_ISLOGIN", value: false })
                reject(false)
            })
    })
}

export const addNotesAPI = (data) => (dispatch) => {
    database.ref('notes/' + data.userId).push({
        title: data.title,
        content: data.content,
        date: data.date
    });
}