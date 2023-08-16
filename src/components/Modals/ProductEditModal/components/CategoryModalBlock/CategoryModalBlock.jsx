import Form from "react-bootstrap/Form";

import style from "./CategoryModalBlock.module.scss";

export default function CategoryModalBlock({
  categories,
  selectCategory,
  position,
}) {
  return (
    <div className={style["edit-sales__wrapper"]}>
      <Form.Select
        className={style["list-block__select"]}
        onChange={selectCategory}
        defaultValue="default"
      >
        <option selected defaultValue="default" disabled>
          Выберите категорию
        </option>
        {/*{categories.map(item => (*/}
        {/*	<option*/}
        {/*		value={item.catalog_product.position}*/}
        {/*		className={style["list-block__option"]}*/}
        {/*		key={item.id}*/}
        {/*	>*/}
        {/*		{item.catalog_product.name}*/}
        {/*	</option>*/}
        {/*))}*/}
      </Form.Select>
      <Form.Select
        className={style["list-block__select"]}
        defaultValue="default"
      >
        <option selected defaultValue="default" disabled>
          Выберите подкатегорию
        </option>
        {/*{position &&*/}
        {/*	categories.map(item => (*/}
        {/*		<option*/}
        {/*			value={item.sub_catalog_product.position}*/}
        {/*			className={style["list-block__option"]}*/}
        {/*			key={item.id}*/}
        {/*		>*/}
        {/*			{item.sub_catalog_product.name}*/}
        {/*		</option>*/}
        {/*	))}*/}
      </Form.Select>
    </div>
  );
}
