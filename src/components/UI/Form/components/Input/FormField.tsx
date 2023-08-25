import { Field, FieldProps, Formik } from "formik";
import TextField from "./Input";
// import "./FormField.scss";

interface IFormField {
	label?: string;
	fitHeight?: boolean;
	containerClassName?: string;
	className?: string;
	name?: string;
	secondParamValue?: boolean;
	defaultHelperText?: string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[k: string]: any;
}

const FormField = (props: IFormField) => {
	const {
		label,
		containerClassName,
		className,
		name,
		fitHeight,
		secondParamValue,
		defaultHelperText,
		...inputProps
	} = props;
	const renderInputComponent = ({ field, form }: FieldProps) => {
		const error = (form && form.errors && form.errors[field.name]) || false;
		const Component = inputProps.component ? inputProps.component : TextField;

		const handleChange = (e: React.ChangeEvent, val: string) => {
			// @ts-ignore
			form.setFieldError(field.name, null);
			if (!secondParamValue) {
				field.onChange(e);
			} else {
				form.setFieldValue(field.name, val);
			}
		};

		return (
			<>
				<Component
					label={label}
					{...field}
					{...inputProps}
					form={form}
					onChange={handleChange}
					error={Boolean(error)}
					helperText={error || defaultHelperText}
					className={["FormField-input", className].join(" ")}
				/>
			</>
		);
	};

	return (
		<div
			className={[
				"FormField",
				containerClassName,
				fitHeight ? "FormField-fitHeight" : "",
			].join(" ")}
		>
			<Field
				type="text"
				className={["FormField-input", className].join(" ")}
				name={name}
			>
				{renderInputComponent}
			</Field>
		</div>
	);
};

export default FormField;
