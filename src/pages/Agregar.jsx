import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

export const Agregar = () => {
  const { id } = useParams();
  const { altaContacto, state, modificarContacto } = useContext(AppContext);
  console.log("Agregar ~ state:", state);

  const contactoEncontrado = state.contactos.find(
    (contacto) => contacto.id === id
  );

  const [nombre, setNombre] = useState(
    contactoEncontrado ? contactoEncontrado.nombre : ""
  );
  const [email, setEmail] = useState(
    contactoEncontrado ? contactoEncontrado.email : ""
  );
  const [numero, setNumero] = useState(
    contactoEncontrado ? contactoEncontrado.numero : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre, email, numero);
    const contacto = {
      id: window.crypto.randomUUID(),
      nombre,
      email,
      numero,
      favorito: false,
    };
    // pasar los datos
    if (contactoEncontrado) {
      modificarContacto(contacto);
    } else {
      altaContacto(contacto);
    }
    console.log("alta contacto");

    // resetear el formulario
    setNombre("");
    setEmail("");
    setNumero("");
  };
  return (
    <>
      <h1>Ingresá aqui tu información para agregar un usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de usuario"
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Número de Celular"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          agregar
        </button>
      </form>
    </>
  );
};
