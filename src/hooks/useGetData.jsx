import axios from "axios";
import { useEffect, useState } from "react";

export function useGetData(endpoint) {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(endpoint);
			setData(result.data);
		};
		fetchData();
	}, []);
	return { data };
}
