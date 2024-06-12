import { createContext, useReducer } from "react";
import { contactoReducer } from "../reducer/contactosReducer";
import { TIPOS_REDUCER } from "../constants";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let valorInicial = {
    contactos: JSON.parse(localStorage.getItem("contacto")) || [],
  };
  // TO DO: NO TRAE DEL LOCALSTORAGE LA LISTA.
  const [state, dispatch] = useReducer(contactoReducer, valorInicial);
  console.log("AppProvider ~ state:", state);

  const altaContacto = (contacto) => {
    dispatch({
      type: TIPOS_REDUCER.ALTA_CONTACTO,
      payload: contacto,
    });
  };

  const modificarContacto = (contacto) => {
    dispatch({
      type: TIPOS_REDUCER.MODIFICAR_CONTACTO,
      payload: contacto,
    });
  };

  const eliminarContacto = (contacto) => {
    dispatch({
      type: TIPOS_REDUCER.ELIMINAR_CONTACTO,
      payload: contacto,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        altaContacto,
        modificarContacto,
        eliminarContacto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
