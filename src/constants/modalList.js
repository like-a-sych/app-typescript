import AddSaleModal from "../components/Modals/AddSaleModal/AddSaleModal";
import ProductEditModal from "../components/Modals/ProductEditModal/ProductEditModal";
import TestModal from "../components/Modals/TestModal";

export const ComponentsList = {
	//объект компонентов, которые передаются в модальное окно
	addSale: <AddSaleModal />,
	testComponent: <TestModal />,
	purchaseEdit: <ProductEditModal />,
};
