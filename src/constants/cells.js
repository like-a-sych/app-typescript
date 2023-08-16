export const tableCellsArray = [
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Очищение",
		brand: "-",
		purchase: "-",
		cashback: "20%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Очищение",
		brand: "-",
		purchase: "-",
		cashback: "20%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Скрабы",
		brand: "Academie",
		purchase: "Гоммаж с кремом и витамином У, 50мл",
		cashback: "10%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Тонизация",
		brand: "Academie",
		purchase: "Нормализующий лосьон, 200мл",
		cashback: "10%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Кремы и гели",
		brand: "Academie",
		purchase: "Восстанавливающий уход с кальцием, 50мл",
		cashback: "15%",
	},
	{
		id: "",
		category: "Пилинги",
		subcategory: "Кислотные пилинги",
		brand: "Frolyis Pro",
		purchase: "Ночной пилинг-концентрат “Soin peeling Nuit defruits”, 6мл",
		cashback: "15%",
	},
	{
		id: "",
		category: "Средства для коррекции фигуры и массажа",
		subcategory: "Средства для душа",
		brand: "Kosmoteros Personnel Paris",
		purchase: "Активный специальный гель для душа с маслом макадамии, 200мл",
		cashback: "10%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Очищение",
		brand: "-",
		purchase: "-",
		cashback: "20%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Очищение",
		brand: "-",
		purchase: "-",
		cashback: "20%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Скрабы",
		brand: "Academie",
		purchase: "Гоммаж с кремом и витамином У, 50мл",
		cashback: "10%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Тонизация",
		brand: "Academie",
		purchase: "Нормализующий лосьон, 200мл",
		cashback: "10%",
	},
	{
		id: "",
		category: "Эстетический уход",
		subcategory: "Кремы и гели",
		brand: "Academie",
		purchase: "Восстанавливающий уход с кальцием, 50мл",
		cashback: "15%",
	},
	{
		id: "",
		category: "Пилинги",
		subcategory: "Кислотные пилинги",
		brand: "Frolyis Pro",
		purchase: "Ночной пилинг-концентрат “Soin peeling Nuit defruits”, 6мл",
		cashback: "15%",
	},
	{
		id: "",
		category: "Средства для коррекции фигуры и массажа",
		subcategory: "Средства для душа",
		brand: "Kosmoteros Personnel Paris",
		purchase: "Активный специальный гель для душа с маслом макадамии, 200мл",
		cashback: "10%",
	},
];

(function () {
	if (tableCellsArray.length) {
		for (let i = 0; i < tableCellsArray.length; i++) {
			tableCellsArray[i].id = `check-${i + 1}`;
		}
	}
})();
