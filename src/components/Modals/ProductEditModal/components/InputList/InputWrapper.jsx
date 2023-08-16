import { Fragment } from "react";
import LabelInput from "../../../../UI/Modal/components/LabelInput/LabelInput";
import InputList from "./InputList";

export default function InputWrapper({ items }) {
	console.log(items);
	return (
		<InputList>
			{items?.map(item => {
				return (
					<Fragment key={item.id}>
						<LabelInput
							type={item.type || "text"}
							value={item.value || ""}
							label={item.label || ""}
							disable={item.disable}
							placeholder={item.placeholder} // TODO: fix placeholder
							id={item.id} // TODO: fix id
						/>
					</Fragment>
				);
			})}
		</InputList>
	);
}
