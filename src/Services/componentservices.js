import firebase from './firebase'

export async function getDataByFB () {
const localSnap = await firebase.firestore().collection('productos').get()
console.log(localSnap.docs)
    return localSnap.docs
            
}

export async function getOnlyDataByFB(data) {
    return await firebase.firestore().doc(`/productos/${data}`).get()
    
}

export  async function actualizarData(id,data) {

    const snapMofif = await firebase.firestore().doc(`/productos/${id}`).set(data)
    
    return snapMofif

}

export async function deleteData (id) {
    return await firebase.firestore().doc(`/productos/${id}`).delete()
}