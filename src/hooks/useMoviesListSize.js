import { useState } from "react";

export function useMoviesListSize() {
	const [cardsColumns, setCardsColumns] = useState(3);
	const [cardsRows, setCardsRows] = useState(4);

	function renderList() {
		const windowWidth = window.innerWidth;
		if (windowWidth >= 1279) {
			setCardsColumns(3);
			setCardsRows(4);
		} else if (windowWidth >= 768 && windowWidth <= 1279) {
			setCardsColumns(2);
			setCardsRows(4);
		} else {
			setCardsColumns(1);
			setCardsRows(5);
		}
	}

	return { cardsColumns, cardsRows, setCardsRows, renderList };
}