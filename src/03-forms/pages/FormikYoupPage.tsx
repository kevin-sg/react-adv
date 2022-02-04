import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYoupPage = () => {
	const {
		errors: { firtsName: isValidFName, lastName: isValidLName, email: isValidEmail },
		touched: { firtsName: tochFName, lastName: touchLName, email: touchEmail },
		handleSubmit,
		getFieldProps,
	} = useFormik({
		initialValues: {
			firtsName: "",
			lastName: "",
			email: "",
		},
		onSubmit: (e) => {
			console.log(e);
		},
		validationSchema: Yup.object({
			firtsName: Yup.string()
				.max(15, "Debe tener 15 carácteres o menos")
				.required("Requerido"),
			lastName: Yup.string()
				.max(15, "Debe tener 15 carácteres o menos")
				.required("Requerido"),
			email: Yup.string().email("Ingrege un correo válido").required("Requerido"),
		}),
	});

	return (
		<div>
			<h1>Formik Yup</h1>

			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="firtsName">Firt Name</label>
				<input autoComplete="off" type="text" {...getFieldProps("firtsName")} />
				{tochFName && isValidFName ? <span>{isValidFName}</span> : null}

				<label htmlFor="lastName">Last Name</label>
				<input autoComplete="off" type="text" {...getFieldProps("lastName")} />
				{touchLName && isValidLName ? <span>{isValidLName}</span> : null}

				<label htmlFor="email">Email Address</label>
				<input autoComplete="off" type="text" {...getFieldProps("email")} />
				{touchEmail && isValidEmail ? <span>{isValidEmail}</span> : null}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
