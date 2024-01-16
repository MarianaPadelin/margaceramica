import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../../common/Loader";

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { nombreCategoria } = useParams();
  const { nombreLinea } = useParams();

    const imagenes = [
      {
        id: "img1",
        url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1705414748/productos/c58a9ac4-01a3-4387-88ca-9f9ae6962acd_flpcon.jpg",
      },
      {
        id: "img2",
        url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1705415691/productos/WhatsApp_Image_2024-01-16_at_11.33.18_yng8kn.jpg",
      },
      {
        id: "img3",
        url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1705415888/productos/WhatsApp_Image_2024-01-16_at_11.33.14_l9b431.jpg",
      },
     
    ];

  useEffect(() => {
    let coleccion = collection(database, "products");
    let busqueda;
    if (nombreCategoria) {
      busqueda = query(coleccion, where("category", "==", nombreCategoria));
    } else if (nombreLinea) {
      busqueda = query(coleccion, where("linea", "==", nombreLinea));
    } else {
      busqueda = coleccion;
    }

    getDocs(busqueda)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nombreCategoria, nombreLinea]);

  

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <ItemList imagenes={imagenes} items={items} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
