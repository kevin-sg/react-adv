import { ChangeEvent, FormEvent, useState } from "react";

interface useFormCustomHook {
	formData: any;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	resetForm: () => void;
	isValidEmail: (email: string) => boolean;
}

export const useForm = <T>(initiState: T): useFormCustomHook => {
	const [formData, setFormData] = useState(initiState);

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
		setFormData((prev) => ({ ...prev, [target.name]: target.value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		console.log(formData);
	};

	const resetForm = (): void => setFormData({ ...initiState });

	const isValidEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	return { formData, handleChange, handleSubmit, resetForm, isValidEmail };
};
