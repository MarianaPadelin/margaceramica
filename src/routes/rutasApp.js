// import { SearchBarContainer } from "../components/layouts/navbar/search/SearchBarContainer";
import { ItemListContainer } from "../components/pages/ItemList/ItemListContainer"
import CarritoContainer from "../components/pages/carrito/CarritoContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import { FirebaseAuth } from "../components/pages/firebaseAuth/FirebaseAuth";
// import { FormularioNuevoProductoContainer } from "../components/pages/formularioNuevoProducto/FormularioNuevoProductoContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";

export const rutasApp = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/Categorias/:nombreCategoria",
    Element: ItemListContainer,
  },
  {
    id: "lineas",
    path: "/Linea/:nombreLinea",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/DetalleProducto/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/Carrito",
    Element: CarritoContainer,
  },
  {
    id: "login",
    path: "/Checkout",
    Element: CheckoutContainer,
  },
  // {
  //   id: "search",
  //   path: "/Searchbar",
  //   Element: SearchBarContainer,
  // },
  // {
  //   id: "nuevo",
  //   path: "/NuevoProducto",
  //   Element: FormularioNuevoProductoContainer,
  // },
  {
    id: "firebase-auth",
    path: "/firebase-auth",
    Element: FirebaseAuth,
  },
];

