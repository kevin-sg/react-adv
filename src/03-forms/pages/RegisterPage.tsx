import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

interface RegisterData {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export const RegisterPage = () => {
	const {
		formData: { name, email, password, password2 },
		handleChange,
		handleSubmit,
		resetForm,
		isValidEmail,
	} = useForm<RegisterData>({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	return (
		<div>
			<h1>Register Page</h1>

			<form onSubmit={handleSubmit} noValidate>
				<input
					type="text"
					placeholder="Name"
					autoComplete="off"
					onChange={handleChange}
					name="name"
					className={`${!name.trim().length ? "has-error" : ""}`}
					value={name}
				/>

				{!name.trim().length && <span>Este campo es obligatorio</span>}

				<input
					type="email"
					placeholder="Email"
					autoComplete="off"
					onChange={handleChange}
					name="email"
					className={`${!isValidEmail(email) ? "has-error" : ""}`}
					value={email}
				/>

				{!isValidEmail(email) && <span>Email no es válido</span>}

				<input
					type="password"
					placeholder="Password"
					onChange={handleChange}
					name="password"
					value={password}
				/>

				{!password.trim().length && <span>Este campo es obligatorio</span>}
				{password.trim().length < 6 && (
					<span>La contraseña tiene que tener 6 carácteres</span>
				)}

				<input
					type="password"
					placeholder="Repeat Password"
					onChange={handleChange}
					name="password2"
					value={password2}
				/>

				{!password2.trim().length && <span>Este campo es obligatorio</span>}
				{password2.trim().length && password.trim() !== password2.trim() ? (
					<span>Las contraseñas deben ser iguales</span>
				) : null}

				<button type="submit">Create</button>
				<button type="button" onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
