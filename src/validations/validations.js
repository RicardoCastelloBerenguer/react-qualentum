import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email requerido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(6, "Mínimo 6 caracteres")
    .max(15, "Máximo 15 caracteres"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirmación de contraseña requerida"),
});

export const productSchema = Yup.object().shape({
  title: Yup.string()
    .required("Título requerido")
    .min(6, "Mínimo 6 caracteres")
    .max(30, "Máximo 15 caracteres"),
  description: Yup.string()
    .required("Descripción requerida")
    .min(6, "Mínimo 6 caracteres")
    .max(45, "Máximo 15 caracteres"),
  price: Yup.number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Precio requerido")
    .moreThan(0, "El precio debe ser mayor a 0"),
  image: Yup.string()
    .required("Contraseña requerida")
    .url("Debe ser una URL válida"),
});
