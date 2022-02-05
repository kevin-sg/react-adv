import formJson from "../data/custom-form.json";

import * as Yup from "yup";

export const validationFieldsForm = () => {
	const initialValues: { [x: string]: any } = {};
	const requiredFields: { [x: string]: any } = {};

	for (const input of formJson) {
		if (formJson.length) {
			initialValues[input.name] = input.value;

			if (!input.validation) continue;

			let schema = Yup.string();

			for (const rule of input.validation) {
				rule.type === "required" && (schema = schema.required(rule.description));

				rule.type === "minLength" &&
					(schema = schema.min(
						(rule as any).value || 2,
						`Mínimo de ${(rule as any).value || 2} carácteres`
					));

				rule.type === "maxLength" &&
					(schema = schema.max(
						(rule as any).value || 15,
						`Máximo de ${(rule as any).value || 15} carácteres`
					));

				rule.type === "email" &&
					(schema = schema.email("Ingrese un correo válido"));
			}

			requiredFields[input.name] = schema;
		}
	}

	const validationSchema = Yup.object({ ...requiredFields });

	return { initialValues, validationSchema, formJson };
};
