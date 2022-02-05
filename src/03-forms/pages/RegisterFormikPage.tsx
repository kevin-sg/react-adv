import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(value) => {
					console.log(value);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "Mínimo de 2 carácteres")
						.max(15, "Máximo de 15 carácteres")
						.required("Ingrese un nombre"),
					email: Yup.string()
						.email("Ingrese un correo válido")
						.required("Ingrese un correo"),
					password1: Yup.string()
						.min(6, "Mínimo de 6 carácteres")
						.required("Ingrese un contraseña"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas no coinciden")
						.required("Ingrese la contraseña"),
				})}
			>
				{({ handleReset }) => (
					<Form noValidate>
						<MyTextInput
							autoComplete="off"
							label="Nombre"
							name="name"
							placeholder="Tu Nombre"
							type="text"
						/>
						<MyTextInput
							autoComplete="off"
							label="Email"
							name="email"
							placeholder="Ej. micorreo@correo.com"
							type="text"
						/>
						<MyTextInput
							autoComplete="off"
							label="Contraseña"
							name="password1"
							placeholder="******"
							type="password"
						/>
						<MyTextInput
							autoComplete="off"
							label="Confirmar contraseña"
							name="password2"
							placeholder="******"
							type="password"
						/>

						<button type="submit">Crear cuenta</button>
						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
