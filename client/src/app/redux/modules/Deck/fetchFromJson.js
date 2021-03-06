import cards from "./json/cards";
import factions from "./json/factions";
import regions from "./json/regions";

const data = () => {
  return cards.map((card) => ({
    ...card,
    region: regions[card.region],
    faction: factions[card.faction],
  }));
};

export default data;
