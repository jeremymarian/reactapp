import instance from "../Config/axios"
import firebase from '../Config/firebase'

export async function getAllProductos(buscar){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res)=>res.json())
    // return instance.get(`sites/MLA/search?q=${buscar}`)
    const querySnapshot = await firebase.firestore().collection("productos")
    .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    // return instance.get(`items/${id}`)
    const querySnapshot = await firebase.firestore().doc(`productos/${id}`).get()
    return querySnapshot
}
export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)
}
export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}