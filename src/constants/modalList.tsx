import AddSaleModal from "../components/Modals/AddSaleModal/AddSaleModal";
import ProductEditModal from "../components/Modals/ProductEditModal/ProductEditModal";

export const ComponentsList: Record<string, JSX.Element> = {
	//объект компонентов, которые передаются в модальное окно
	addSale: <AddSaleModal />,
	purchaseEdit: <ProductEditModal />,
};
