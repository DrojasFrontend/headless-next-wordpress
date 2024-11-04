import { fetchData } from "@/lib/apollo";
import { GET_HOME_DATA } from "@/lib/queries";

import HeroImage from "@/components/sections/heros/HeroImage/HeroImage";
import CardsGrid from "@/components/sections/cards/CardsGrid/CardsGrid";

// Completamente estático
export const revalidate = false;


export default async function HomePage() {
	const data = await fetchData(GET_HOME_DATA);
	const { paginaInicio } = data.pageBy;

	return (
		<>
			<HeroImage data={paginaInicio.grupoHero} />
			<CardsGrid data={paginaInicio.gruporefugio} />
			{/* <CardsBigSmall data={grupohabitaciones} />
			<CardsGridThreeCarusel data={grupoexperiencias} /> */}
		</>
	);
}
