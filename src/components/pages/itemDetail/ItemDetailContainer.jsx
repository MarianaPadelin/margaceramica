import { useState, useEffect, useContext } from "react"
import {ItemDetail} from "./ItemDetail"
import {useParams} from "react-router-dom"
import { database } from "../../../firebaseConfig"
import {collection, getDoc, doc} from "firebase/firestore"
import Loader from "../../common/Loader"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"



const ItemDetailContainer = () => {
      const[seleccionado, setSeleccionado] = useState({})

      const { id } = useParams();
      const { agregarProductos, cantidad} = useContext(CartContext)
      const cantidadDeProductos = cantidad(id)

      const onAdd = (cantidad) => {
          let data = {
            ...seleccionado,
            quantity: cantidad,
          };

          agregarProductos(data)
       const Toast = Swal.mixin({
         toast: true,
         position: "center",
         showConfirmButton: false,
         timer: 2000,
         timerProgressBar: true,

         color: "cadetBlue",
         didOpen: (toast) => {
           toast.addEventListener("mouseenter", Swal.stopTimer);
           toast.addEventListener("mouseleave", Swal.resumeTimer);
         },
       });

       Toast.fire({
         icon: "success",
         title: "El producto se agregó al carrito",
       });
          
        };

      useEffect(() => {
        let coleccion = collection(database, "products")
        let refDoc = doc(coleccion, id)
        getDoc(refDoc).then((elemento) => {setSeleccionado({...elemento.data(), id: elemento.id})}).catch((err)=>{console.log(err)})



      }, [id]);


        return (
          <div>
            {seleccionado.id ? (<ItemDetail seleccionado={seleccionado} agregarProductos={agregarProductos} cantidadDeProductos={cantidadDeProductos} onAdd={onAdd}/>) : (<Loader />) }
          </div>
          
        )

      
      }



export default ItemDetailContainer