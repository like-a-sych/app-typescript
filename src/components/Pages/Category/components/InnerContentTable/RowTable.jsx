export default function RowTable({ item, callback }) {
	function onClickHandler() {
		callback(item.position);
	}

	const onClickProps = {
		onClick: callback ? onClickHandler : undefined,
	};

	return (
		<div className="inner-data-table__item" {...onClickProps}>
			<div className="inner-data-table__name">{item.name}</div>
			<div className="inner-data-table__buttons">
				<div className="inner-data-table__btn">
					<button className="edit" />
				</div>
				<div className="inner-data-table__btn">
					<button className="delete" />
				</div>
			</div>
		</div>
	);
}
