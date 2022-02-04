import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
	firtsName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	// Validate values
	const validate = ({ firtsName, lastName, email }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		!firtsName
			? (errors.firtsName = "Required")
			: firtsName.length > 15 &&
			  (errors.firtsName = "Must be 15 characteres or less");

		!lastName
			? (errors.lastName = "Required")
			: lastName.length > 15 &&
			  (errors.lastName = "Must be 15 characteres or less");

		!email
			? (errors.email = "Required")
			: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
			  (errors.email = "Invalid email address");

		return errors;
	};

	const {
		values: { firtsName, lastName, email },
		errors: { firtsName: isValidFName, lastName: isValidLName, email: isValidEmail },
		touched: { firtsName: tochFName, lastName: touchLName, email: touchEmail },
		handleBlur,
		handleSubmit,
		handleChange,
	} = useFormik({
		initialValues: {
			firtsName: "",
			lastName: "",
			email: "",
		},
		onSubmit: (e) => {
			console.log(e);
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="firtsName">Firt Name</label>
				<input
					type="text"
					name="firtsName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={firtsName}
				/>
				{tochFName && isValidFName ? <span>{isValidFName}</span> : null}

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={lastName}
				/>
				{touchLName && isValidLName ? <span>{isValidLName}</span> : null}

				<label htmlFor="email">Email Address</label>
				<input
					type="text"
					name="email"
					onChange={handleChange}
					onBlur={handleBlur}
					value={email}
				/>
				{touchEmail && isValidEmail ? <span>{isValidEmail}</span> : null}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
