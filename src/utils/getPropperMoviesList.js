export default function changeUrl(card) {
	if (card.image.url && !card.image.url.includes('https://api.nomoreparties.co')) {
			card.image.url = `https://api.nomoreparties.co${card.image.url}`;
			card.image.formats.thumbnail.url = `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`;
			return card;
	}
	return card;
}