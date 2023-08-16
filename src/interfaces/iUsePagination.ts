export type TLoadDataFunc = (
	limitRowsOnPage: number,	
	paginationObj: number
) => Promise<void>;