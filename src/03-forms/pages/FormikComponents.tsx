import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor="firtsName">Firt Name</label>
						<Field name="firtsName" type="text" placeholder="First Name" />
						<ErrorMessage name="firtsName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" placeholder="Last Name" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email Address</label>
						<Field name="email" type="text" placeholder="Email" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Desdigner</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Jr.</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" />
							Terms and conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
