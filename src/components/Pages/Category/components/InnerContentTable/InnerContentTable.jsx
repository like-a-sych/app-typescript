import RowTable from "./RowTable";

export default function InnerContentTable({ data, callback }) {
	return (
		<div className="table__inner inner-data-table">
			<div className="inner-data-table__header">Название категории</div>
			<div className="inner-data-table__body">
				{data.map(item => (
					<RowTable key={item.id} item={item} callback={callback} />
				))}
			</div>
		</div>
	);
}
