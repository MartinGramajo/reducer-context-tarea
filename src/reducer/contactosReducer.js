import { TIPOS_REDUCER } from "../constants"

export const contactoReducer = (state, action) => {

  switch (action.type) {

    case TIPOS_REDUCER.OBTENER_CONTACTO:

      return {
        ...state.contactos,
        contactos: action.payload
      }

    case TIPOS_REDUCER.ALTA_CONTACTO:

      console.log("contactoReducer ~ state:", state)
      localStorage.setItem("contacto", JSON.stringify([...state.contactos, action.payload]))
      return {
        ...state.contactos,
        contactos: [...state.contactos, action.payload]
      }

    case TIPOS_REDUCER.MODIFICAR_CONTACTO: {


      let arrayAux = [...state.contactos]
      console.log("contactoReducer ~ arrayAux :", arrayAux)


      let indexContacto = arrayAux.findIndex(contacto => contacto.id == action.payload.id);
      console.log("contactoReducer ~ action:", action)
      console.log("contactoReducer ~ indexContacto :", indexContacto)

      if (indexContacto !== -1) {

        arrayAux[indexContacto].nombre = action.payload.nombre;
        arrayAux[indexContacto].email = action.payload.email;
        arrayAux[indexContacto].numero = action.payload.numero;
        arrayAux[indexContacto].favorito = action.payload.favorito;

        localStorage.setItem("contacto", JSON.stringify(arrayAux))
        return {
          ...state.contactos,
          contactos: arrayAux
        }
      } else {
        return (console.log("error"))
      }
    }


    case TIPOS_REDUCER.ELIMINAR_CONTACTO:

      localStorage.setItem("contacto", JSON.stringify(state.contactos.filter(contacto => contacto.id !== action.payload.id)))
      return {}

  }


}