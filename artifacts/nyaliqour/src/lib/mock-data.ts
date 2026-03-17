export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  volume: string;
  abv: string;
  age: string;
  region: string;
  caskType: string;
  bottler: string;
  flavourCamp: string;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Glenfarclas 25 Year Old",
    brand: "Glenfarclas",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 219.95,
    volume: "70cl",
    abv: "43%",
    age: "25 Years",
    region: "Speyside",
    caskType: "Oloroso Sherry Casks",
    bottler: "Distillery Bottling",
    flavourCamp: "Rich & Fruity",
    stock: 7,
    rating: 4.8,
    reviews: 47,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Award Winner", "Popular"],
    description: "A spectacularly complex 25-year-old single malt from Glenfarclas. Matured exclusively in Oloroso sherry casks, it offers layers of dark chocolate, dried fruits, and winter spices. A quintessential sherried Speyside classic.",
    tastingNotes: {
      nose: "Rich Christmas cake with dried fruit, orange peel, and a hint of vanilla oak. Warming spice develops with time.",
      palate: "Full-bodied and luxurious. Sherry sweetness leads to layers of dark chocolate, raisins, and gentle smoke.",
      finish: "Exceptionally long. Warming spice and oak tannins linger with a final wave of dried fruit and subtle peat."
    }
  },
  {
    id: "p2",
    name: "Ardbeg Uigeadail",
    brand: "Ardbeg",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 64.95,
    volume: "70cl",
    abv: "54.2%",
    age: "No Age Statement",
    region: "Islay",
    caskType: "Ex-Bourbon & Sherry Casks",
    bottler: "Distillery Bottling",
    flavourCamp: "Peaty & Smoky",
    stock: 24,
    rating: 4.9,
    reviews: 312,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Popular"],
    description: "A masterful marriage of sweet sherry casks and heavily peated Islay malt. Uigeadail translates to 'dark and mysterious place' in Gaelic, perfectly describing this intensely flavored, high-strength whisky.",
    tastingNotes: {
      nose: "Intense peat smoke intertwined with rich dark chocolate, espresso, and roasted walnuts.",
      palate: "Explosive. Sweet honey and treacle clash beautifully with robust bonfire smoke, leather, and sea salt.",
      finish: "Endless and powerful, leaving a trail of sweet smoke and malted barley."
    }
  },
  {
    id: "p3",
    name: "Hendrick's Gin",
    brand: "Hendrick's",
    category: "World Spirits",
    subcategory: "Gin",
    price: 35.00,
    volume: "70cl",
    abv: "41.4%",
    age: "Unaged",
    region: "Scotland",
    caskType: "Unaged",
    bottler: "Distillery Bottling",
    flavourCamp: "Light & Floral",
    stock: 150,
    rating: 4.7,
    reviews: 1205,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Popular"],
    description: "An unusual gin created from eleven fine botanicals. The curious, yet marvelous, infusions of rose & cucumber imbue our spirit with its uniquely balanced flavor resulting in an unimpeachably smooth and distinct gin.",
    tastingNotes: {
      nose: "Huge, intense nose with bursts of crisp zesty botanicals. Floral aromas of rose and sweet violet.",
      palate: "Smooth and superbly balanced botanicals. Clean and dry without being in any way astringent.",
      finish: "A long, lingering finish filled with crisp cucumber and subtle rose petals."
    }
  },
  {
    id: "p4",
    name: "Diplomatico Reserva Exclusiva",
    brand: "Diplomatico",
    category: "World Spirits",
    subcategory: "Rum",
    price: 46.50,
    volume: "70cl",
    abv: "40%",
    age: "Up to 12 Years",
    region: "Venezuela",
    caskType: "Oak Casks",
    bottler: "Distillery Bottling",
    flavourCamp: "Sweet & Vanilla",
    stock: 45,
    rating: 4.9,
    reviews: 843,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Award Winner"],
    description: "An exquisite sipping rum crafted from a blend of exclusive rum reserves aged for up to twelve years. Marrying a unique body with excellent balance has made this multi-award-winning rum a reference for connoisseurs worldwide.",
    tastingNotes: {
      nose: "Complex and characterful, with notes of maple syrup, orange peel, brown sugar, and liquorice.",
      palate: "Sweet toffee fudge and a seductive and elegant finish.",
      finish: "Lingering and sweet with strong vanilla and caramel notes."
    }
  },
  {
    id: "p5",
    name: "Bruichladdich The Classic Laddie",
    brand: "Bruichladdich",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 49.95,
    volume: "70cl",
    abv: "50%",
    age: "No Age Statement",
    region: "Islay",
    caskType: "American Oak",
    bottler: "Distillery Bottling",
    flavourCamp: "Fresh & Zesty",
    stock: 32,
    rating: 4.6,
    reviews: 128,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: [],
    description: "Unpeated Islay single malt. Created by Jim McEwan to showcase the classic, floral, and elegant Bruichladdich house style. Made with 100% Scottish barley, trickle distilled, then matured in premium American oak.",
    tastingNotes: {
      nose: "Brilliant bouquet. Opening with barley sugar and a hint of mint before leading into freshly cut wild flowers.",
      palate: "Refined and refreshing. Sweet oak and barley arrive together sending taste buds into raptures.",
      finish: "Clean, fresh, and unforgettable. Brings a warm glow to the soul."
    }
  },
  {
    id: "p6",
    name: "Redbreast 12 Year Old",
    brand: "Redbreast",
    category: "World Spirits",
    subcategory: "Irish Whiskey",
    price: 52.00,
    volume: "70cl",
    abv: "40%",
    age: "12 Years",
    region: "Ireland",
    caskType: "Oloroso & Bourbon Casks",
    bottler: "Distillery Bottling",
    flavourCamp: "Spiced & Bold",
    stock: 18,
    rating: 4.8,
    reviews: 256,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Popular"],
    description: "The definitive expression of traditional Single Pot Still Irish Whiskey. Redbreast 12 boasts the flavor complexity and distinctive qualities of Pot Still whiskey, matured in a combination of Bourbon and Oloroso Sherry casks.",
    tastingNotes: {
      nose: "A complex spicy and fruity aroma with toasted wood notes evident.",
      palate: "Full flavored and complex; silky smooth with a harmonious balance of spicy, fruity, sherry, and toasted notes.",
      finish: "Satisfyingly long, the complex flavors linger on the palate."
    }
  },
  {
    id: "p7",
    name: "Balvenie 14 Year Old Caribbean Cask",
    brand: "Balvenie",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 72.95,
    volume: "70cl",
    abv: "43%",
    age: "14 Years",
    region: "Speyside",
    caskType: "Rum Cask Finish",
    bottler: "Distillery Bottling",
    flavourCamp: "Sweet & Vanilla",
    stock: 12,
    rating: 4.7,
    reviews: 189,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: [],
    description: "Matured in traditional oak whisky casks for 14 years, and then 'finished' in casks that previously held Caribbean rum. The result is an exceptional single malt whisky with the traditional smooth, honeyed character of The Balvenie married with notes of toffee and a hint of fruit.",
    tastingNotes: {
      nose: "Rich, sweet and creamy toffee on the nose combines with fresh fruit notes.",
      palate: "Rounded with vanilla and sweet oak notes, with a fruity character that develops with time.",
      finish: "Soft and lingering."
    }
  },
  {
    id: "p8",
    name: "Lagavulin 16 Year Old",
    brand: "Lagavulin",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 85.00,
    volume: "70cl",
    abv: "43%",
    age: "16 Years",
    region: "Islay",
    caskType: "Oak Casks",
    bottler: "Distillery Bottling",
    flavourCamp: "Peaty & Smoky",
    stock: 5,
    rating: 4.9,
    reviews: 642,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Exclusive"],
    description: "The classic Islay malt, Lagavulin 16 is an intensely flavored, smoky, and rich single malt. Deep amber in color, it offers a massive peat-smoke flavor that's beloved by connoisseurs.",
    tastingNotes: {
      nose: "Massive peat smoke with iodine and seaweed, and a rich, deep sweetness.",
      palate: "A rich, dried fruit sweetness with clouds of smoke and strong barley-malt flavors.",
      finish: "Huge, long, warming, and peppery with a lingering sweet smoke."
    }
  },
  {
    id: "p9",
    name: "Yamazaki 18 Year Old",
    brand: "Yamazaki",
    category: "World Spirits",
    subcategory: "Japanese Whisky",
    price: 450.00,
    volume: "70cl",
    abv: "43%",
    age: "18 Years",
    region: "Japan",
    caskType: "Sherry, Mizunara, American Oak",
    bottler: "Distillery Bottling",
    flavourCamp: "Rich & Fruity",
    stock: 2,
    rating: 5.0,
    reviews: 87,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Rare", "Award Winner"],
    description: "An award-winning Japanese single malt, Yamazaki 18 is legendary for its profound complexity and elegance. The blending of different cask types creates a symphony of fruit, spice, and subtle smoke.",
    tastingNotes: {
      nose: "Raisin, apricot, cafe au lait, and Mizunara (Japanese oak).",
      palate: "Blackberry, strawberry jam, dark chocolate.",
      finish: "Long, spicy, smooth with a hint of smoke."
    }
  },
  {
    id: "p10",
    name: "Patrón Silver",
    brand: "Patrón",
    category: "World Spirits",
    subcategory: "Tequila",
    price: 55.00,
    volume: "70cl",
    abv: "40%",
    age: "Unaged",
    region: "Mexico",
    caskType: "Unaged",
    bottler: "Distillery Bottling",
    flavourCamp: "Fresh & Zesty",
    stock: 80,
    rating: 4.5,
    reviews: 310,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: [],
    description: "The perfect white spirit made from the finest Weber Blue Agave. Handmade in small batches to be smooth, soft, and easily mixable.",
    tastingNotes: {
      nose: "Fresh agave with fruit and citrus.",
      palate: "Smooth and sweet. Fresh agave, hints of citrus.",
      finish: "Light pepper finish."
    }
  },
  {
    id: "p11",
    name: "Macallan 12 Year Old Double Cask",
    brand: "Macallan",
    category: "Scotch Whisky",
    subcategory: "Single Malt",
    price: 75.00,
    volume: "70cl",
    abv: "40%",
    age: "12 Years",
    region: "Speyside",
    caskType: "American & European Sherry Oak",
    bottler: "Distillery Bottling",
    flavourCamp: "Rich & Fruity",
    stock: 45,
    rating: 4.7,
    reviews: 412,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Popular"],
    description: "The perfect partnership of Oloroso sherry seasoned American and European oak casks creates the distinctive, warm character of this harmonious single malt.",
    tastingNotes: {
      nose: "Creamy butterscotch with a hint of toffee apple, candied orange, vanilla custard, and newly felled oak.",
      palate: "Deliciously honeyed, wood spices and citrus, balanced with raisins and caramel.",
      finish: "Oak lingers, warm, sweet, and drying."
    }
  },
  {
    id: "p12",
    name: "Courvoisier XO",
    brand: "Courvoisier",
    category: "World Spirits",
    subcategory: "Cognac",
    price: 145.00,
    volume: "70cl",
    abv: "40%",
    age: "XO",
    region: "France",
    caskType: "French Oak",
    bottler: "Distillery Bottling",
    flavourCamp: "Rich & Fruity",
    stock: 14,
    rating: 4.8,
    reviews: 95,
    image: `${import.meta.env.BASE_URL}images/bottle-placeholder.png`,
    tags: ["Award Winner"],
    description: "A very old blend of fine and well-matured cognac, recognized as one of the finest XOs of the world. Intensely aromatic and exceptionally smooth.",
    tastingNotes: {
      nose: "Exotic vanilla and cocoa beans, spicy amber aroma, and cinnamon blossoms.",
      palate: "Incredibly smooth with orange tang, dried apricot, and pear.",
      finish: "Velvety, rich, and lingering."
    }
  }
];
