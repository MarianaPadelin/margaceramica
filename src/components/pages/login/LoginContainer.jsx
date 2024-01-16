import { useFormik } from "formik"
import Login from "./Login"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { ingresar } from "../../../firebaseConfig";

const LoginContainer = () => {
    const navigate = useNavigate()

    const { handleSubmit, handleChange, errors } = useFormik({
      initialValues: {
        usuario: "",
        contraseña: "",
      },
      onSubmit: async(data) => {
            let res = await ingresar(data)
            console.log(res)
            //serUser(res)
            navigate("/")
        },
       


      validateOnChange: false,
      validationSchema: Yup.object({
        usuario: Yup.string().min(5, "debe tener más de 5 caracteres"),
        contraseña: Yup.string()
          .required()
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            "La contraseña debe tener entre 6 y 15 caracteres. Debe tener al menos una mayúscula, una minúscula, un número y un caracter especial."
          ),
      }),
    });



  return (
    <Login handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
  )
}

export default LoginContainer