import { Flex } from "@chakra-ui/react";
import CardItem from "./CardItem";
import { useState } from "react";

const data = [
  {
    id: 1,
    imgSrc: "../public/imgs/tour-1.jpeg",
    name: "Best Of Paris In 7 Days Tour",
    price: "2300",
    content:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You`ll also enjoy guided neighborhood walks through the city`s historic heart as well as quieter moments to slow down and savor the city`s intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    imgSrc: "../public/imgs/tour-2.jpeg",
    name: "Best Of Paris In 7 Days Tour",
    price: "2900",
    content:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    imgSrc: "../public/imgs/tour-3.jpeg",
    name: "Best Of Paris In 7 Days Tour",
    price: "5300",

    content:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    id: 4,
    imgSrc: "../public/imgs/tour-4.jpeg",
    name: "Best Of Paris In 7 Days Tour",
    price: "4200",
    content:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You`ll also enjoy guided neighborhood walks through the city`s historic heart as well as quieter moments to slow down and savor the city`s intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 5,
    imgSrc: "../public/imgs/tour-5.jpeg",
    name: "Best Of Paris In 7 Days Tour",
    price: "2600",
    content:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];
export type DataType = (typeof data)[0];

function App() {
  const [items, setItems] = useState(data);
  const handleRemoveItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      marginTop="100px"
      w="full"
    >
      <h2>OUR TOUR</h2>
      <Flex wrap="wrap" gap="15px" justify="start" w="full" px="50px">
        {data.map((item, index) => (
          <CardItem key={index} item={item} onRemove={handleRemoveItem} />
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
