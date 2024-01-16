import { useFormik } from "formik";
import { database } from "../../../firebaseConfig";
import { FormularioNuevoProducto } from "./FormularioNuevoProducto";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export const FormularioNuevoProductoContainer = () => {

    const { handleChange, handleSubmit } = useFormik({
      initialValues: {
        nombre: "",
        tamaño: "",
        stock: "",
        price: "",
        peso: "",
        linea: "",
        category: "",
        description: "",
        img: "",
        img2: "",
      },
      onSubmit: (info) => {
        Swal.fire({
          title: "¿Agregar el nuevo producto?",
          icon: "warning",
          showCancelButton: true,
          background: "lightGrey",
          confirmButtonColor: "cadetBlue",
          cancelButtonColor: "lightCoral",
          confirmButtonText: "Agregar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            let productosNuevos = collection(database, "products");
            addDoc(productosNuevos, info)

            Swal.fire({
              title: "Listo",
              text: "Producto agregado",
              icon: "success",
              background: "lightGrey",
              confirmButtonColor: "cadetBlue",
            });
          }
        });
               
      }


    });

    



//   setDoc(doc(database, "products", "LA"), {
//     title: "Los Angeles",
//     state: "CA",
//     country: "USA",
//   });
  // const rellenar = () => {
  //     let products
  //     //en products poner un formulario con los campos a rellenar
  //     let coleccion = collection(database,"products")
  //     products.forEach((elemento) => {

  //         addDoc(coleccion, elemento)

  //     })
  //     //const actualizar
  //     //const eliminar
  // }

 



  return (
    <div>
      <FormularioNuevoProducto
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
