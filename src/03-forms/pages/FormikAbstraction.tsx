import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput, MySelect, MyCheckbox } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					firtsName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firtsName: Yup.string()
						.max(15, "Debe tener 15 carácteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(15, "Debe tener 15 carácteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("Ingrege un correo válido")
						.required("Requerido"),
					terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
					jobType: Yup.string()
						.notOneOf(["it-jr"], "Esta opción no es permitida")
						.required("Requerido"),
				})}
			>
				{(formik) => (
					<Form noValidate>
						<MyTextInput
							label="First Name"
							name="firtsName"
							placeholder="Firts Name"
							type="text"
						/>

						<MyTextInput
							label="Last Name"
							name="lastName"
							placeholder="Last Name"
							type="text"
						/>

						<MyTextInput
							label="Email Address"
							name="email"
							placeholder="myemail@email.com"
							type="email"
						/>

						<MySelect label="Job Type" name="jobType">
							<option value="" disabled>
								Pick something
							</option>
							<option value="developer">Developer</option>
							<option value="designer">Desdigner</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Jr.</option>
						</MySelect>

						<MyCheckbox label="Terms & Condition" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
