import { Formik, Form } from "formik";

import { MySelect, MyTextInput } from "../components";

import { validationFieldsForm } from "../helpers/validationFieldsForm";

export const DynamicForm = () => {
	// Valitacion Fields
	const { initialValues, validationSchema, formJson } = validationFieldsForm();

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Dynamic Form</h1>
			<br />

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{() => (
					<Form noValidate>
						<h2 style={{ textAlign: "center" }}>Registro de usuarios</h2>

						{formJson.map(({ type, name, placeholder, label, ...rest }) => {
							if (type.includes("input" || "password" || "email")) {
								return (
									<MyTextInput
										key={name}
										type={type as any}
										name={name}
										label={label}
										placeholder={placeholder}
									/>
								);
							} else if (type.includes("select")) {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value="" disabled>
											Seleccione
										</option>
										{rest.options?.map(({ id, label }) => (
											<option key={id} value={id}>
												{label}
											</option>
										))}
									</MySelect>
								);
							}

							return new Error(`El type: ${type} no es soportado`);
						})}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
