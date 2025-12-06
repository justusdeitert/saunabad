interface GalleryItem {
	title: string;
	description: string;
	image: string;
}

const gallery: GalleryItem[] = [
	{
		title: 'Saunagarten',
		description:
			'Nach dem Saunagang können Sie in unserem Saunagarten frische Luft atmen und barfuß auf den verschiedenen Untergründen laufen.',
		image: './src/images/saunagarten.jpg',
	},
	{
		title: 'Ruheraum',
		description:
			'Ein separater Ruheraum ermöglicht Ihnen in Ruhe zu lesen oder gar den berühmten Saunaschlaf zu geniessen.',
		image: './src/images/ruheraum.jpg',
	},
	{
		title: 'Lesesaal',
		description:
			'Unsere kleine Bibliothek steht mit Bildbänden, Ausstellungskatalogen, Zeitschriften und Romanen zur Verfügung.',
		image: './src/images/lesesaal.jpg',
	},
	{
		title: 'Bar',
		description: 'Genießen Sie ein paar leckere Getränke an unserer Bar.',
		image: './src/images/bar.jpg',
	},
	{
		title: 'Privatsphäre',
		description:
			'In unserer Anlage sind Mobiltelefone oder andere technische Geräte mit einer Video- bzw. Fotofunktion verboten. ',
		image: './src/images/eingang.jpg',
	},
	{
		title: 'Aufguss-Öle',
		description:
			'Für unsere Aufgüsse verwenden wir ausschließlich naturreine ätherische Öle. Wie zum Beispiel Thuja, Wacholderholz oder Petitgrain.',
		image: './src/images/im_garten.jpg',
	},
];

export default gallery;
