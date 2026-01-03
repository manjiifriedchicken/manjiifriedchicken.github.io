interface MenuItemVariant {
  name: string;
  description?: string;
  price: string;
}
interface MenuItemWithVariant {
  name: string;
  image?: string;
  description?: string;
  variants: MenuItemVariant[];
}
interface MenuItemWithoutVariant {
  name: string;
  image?: string;
  description?: string;
  price: string;
}
interface MenuCategory {
  name: string;
  slug: string;
  image?: string;
  type: "food" | "drink";
  background_color: string;
  color: string;
  description?: string;
  items: (MenuItemWithVariant | MenuItemWithoutVariant)[];
}

interface Sauce {
  name: string;
  image?: string;
  price: string;
}

const menu: MenuCategory[] = [
  {
    name: "Tavuk Burgerler",
    slug: "tavuk-burgerler",
    type: "food",
    background_color: "#132A13",
    color: "#ECF39E",
    image: "/covers/tavuk-burgerler.png",
    items: [
      {
        name: "Tokio Burger",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Tokyo sos, cheddar peyniri, coleslaw salata (Yeşil elmalı), patates kızartması.",
        image: "/items/tokio.png",
        variants: [
          {
            name: "Tokio X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "350₺",
          },
          {
            name: "Tokio XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "360₺",
          },
          {
            name: "Sandwich",
            price: "320₺",
          },
        ],
      },
      {
        name: "London Burger",
        image: "/items/london.png",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Algarienne sos, White Sos, dana macar salam, marul, soğan, patates kızartması.",
        variants: [
          {
            name: "London X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "360₺",
          },
          {
            name: "London XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "370₺",
          },
          {
            name: "Sandwich",
            price: "330₺",
          },
        ],
      },
      {
        name: "Atina Burger",
        image: "/items/atina.jpg",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Manjii Cream Sos(çörek otlu peynir kreması), tatlı soğan sosu, roka.",
        variants: [
          {
            name: "Atina X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "370₺",
          },
          {
            name: "Atina XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "380₺",
          },
          {
            name: "Sandwich",
            price: "340₺",
          },
        ],
      },
    ],
  },
  {
    name: "Köfte Burgerler",
    slug: "kofte-burgerler",
    image: "/covers/et-burgerler.png",
    type: "food",
    background_color: "#1a3217",
    color: "#ECF39E",
    items: [
      {
        name: "Manjinal Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg.",
        image: "/items/manjinal.png",
        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "360₺",
          },
          {
            name: "Sandwich",
            price: "340₺",
          },
        ],
      },
      {
        name: "Algerienne Burger 🌶️",
        image: "/items/algerienne.png",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, fıstıklı macar salam.",

        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "380₺",
          },
          {
            name: "Sandwich",
            price: "360₺",
          },
        ],
      },
      {
        name: "Eggyshaggy Burger",
        image: "/items/eggyshaggy.png",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos.",

        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "380₺",
          },
          {
            name: "Sandwich",
            price: "360₺",
          },
        ],
      },
      {
        name: "Smoky Burger",
        image: "/items/smoke.jpg",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, füme kaburga, çift cheddar peyniri, tütsülenmiş mayonez, biber ezmesi, soğan.",
        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "410₺",
          },
          {
            name: "Sandwich",
            price: "390₺",
          },
        ],
      },
      {
        name: "Relish Burger",
        image: "/items/relish.png",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, homemade relish sos, marul, soğan, domates.",
        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "380₺",
          },
          {
            name: "Sandwich",
            price: "360₺",
          },
        ],
      },
      {
        name: "Tiftik Burger",
        image: "/items/tiftik.jpg",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, taze baharatlarla pişirilmiş tiftik kaburga, cheddar peyniri, trüf mantarlı mayonez, tütsülü BBQ sos.",
        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "480₺",
          },
          {
            name: "Sandwich",
            price: "450₺",
          },
        ],
      },
      {
        name: "RedSin Burger",
        image: "/items/redsin.jpg",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, Manjii Cream Sos(çörek otlu peynir kreması), vişne marmelatı, roka.",
        variants: [
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "430₺",
          },
          {
            name: "Sandwich",
            price: "400₺",
          },
        ],
      },
    ],
  },
  {
    name: "Burritolar / Wrapler",
    image: "/covers/buritto.png",
    slug: "burritolar-wrapler",
    type: "food",
    background_color: "#21391c",
    color: "#ECF39E",
    items: [
      {
        name: "Izgara Tavuk Burrito",
        image: "/items/buritto.jpg",
        description:
          "Izgara tavuk, çift lavaş, algerienne sos, ranch sos, patates, domates, marul, soğan. (Hazırlanma süresi 20-25 dakikadır)",
        variants: [
          {
            name: "Burrito",
            price: "275₺",
          },
          {
            name: "Burrito + İçecek",
            price: "300₺",
          },
        ],
      },
      {
        name: "M.F.C. Burrito",
        image: "/items/buritto.jpg",
        description:
          "Kızarmış M.F.C tavuk, çift lavaş, algerienne sos, ranch sos, ranch sos, patates, domates, marul, soğan. (Hazırlanma süresi 20-25 dakikadır)",
        variants: [
          {
            name: "Burrito",
            price: "275₺",
          },
          {
            name: "Burrito + İçecek",
            price: "300₺",
          },
        ],
      },
      {
        name: "Dinamit M.F.C. Burrito 🌶️🌶️",
        image: "/items/dinamit-buritto.jpg",
        description:
          "Kızarmış M.F.C tavuk, çift lavaş, dinamit sos, ranch sos, patates, domates, marul. (Hazırlanma süresi 20-25 dakikadır)",
        variants: [
          {
            name: "Burrito",
            price: "300₺",
          },
          {
            name: "Burrito + İçecek",
            price: "325₺",
          },
        ],
      },
    ],
  },
  {
    name: "Tavuk Atıştırmalıkları",
    image: "/covers/kizartma.png",
    slug: "tavuk-atistirmaliklar",
    type: "food",
    background_color: "#284120",
    color: "#ECF39E",
    items: [
      {
        name: "Chicken Tenders",
        image: "/items/tenders.png",
        description: "Klasik chicken tenders, patates kızartması, sos",
        variants: [
          {
            name: "5'li Tenders",
            price: "290₺",
          },
          {
            name: "7'li Tenders",
            price: "310₺",
          },
          {
            name: "9'lu Tenders",
            price: "340₺",
          },
        ],
      },
      {
        name: "Klasik Kanat",
        image: "/items/wings.png",
        description: "Klasik tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Kanat",
            price: "260₺",
          },
          {
            name: "10'lu Kanat",
            price: "340₺",
          },
        ],
      },
      {
        name: "BBQ Kanat",
        image: "/items/bbq-wings.jpg",
        description: "BBQ soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı BBQ Kanat",
            price: "260₺",
          },
          {
            name: "10'lu BBQ Kanat",
            price: "340₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️🌶️",
        image: "/items/dinamit-wings.jpg",
        description: "Dinamit soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Dinamit Kanat",
            price: "260₺",
          },
          {
            name: "10'lu Dinamit Kanat",
            price: "340₺",
          },
        ],
      },
    ],
  },
  {
    name: "Patates Kızartmaları",
    image: "/covers/patates.png",
    slug: "patates-kizartmalari",
    type: "food",
    background_color: "#2f4924",
    color: "#ECF39E",
    items: [
      {
        name: "Basic Fries",
        price: "130₺",
      },
      {
        name: "Cheddar Bomb Fries",
        description:
          "Patates Kızartması, M.F.C. tavuk parçaları, bol cheddar sos, taze soğan, salatalık turşusu.",
        price: "270₺",
      },
      {
        name: "Hot Bomb Fries",
        description:
          "Patates Kızartması, M.F.C. tavuk parçaları, jalepeno biber, cheddar peyniri, taze soğan, salatalık turşusu, buffalo, algerienne ve ranch sos.",
        price: "250₺",
      },
    ],
  },
  {
    name: "Bowl",
    image: "/covers/bowl.png",
    slug: "bowl",
    type: "food",
    background_color: "#375229",
    color: "#ECF39E",
    items: [
      {
        name: "Big Bowl",
        description:
          "Patates kızartması, coleslaw salata (Yeşil elmalı), 130gr köfte, 3 adet tenders, 2 adet soğan halkası, füme kaburga dilimleri, iki çeşit sos.",
        price: "420₺",
      },
      {
        name: "Chicken Bowl",
        description:
          "Patates kızartması, coleslaw salata (Yeşil elmalı), 2 adet tenders, 2 adet soğan halkası, iki çeşit sos.",
        price: "420₺",
      },
    ],
  },
  {
    name: "Kahveler",
    image: "/covers/kahveler.png",
    slug: "kahveler",
    type: "drink",
    background_color: "#496231",
    color: "#ECF39E",
    description:
      "Double Shot Espresso ve Soğuk Kahvelerde 20₺ ek ücret alınır.",
    items: [
      {
        name: "Flat White",
        description: "Avustralya'ya özgü sütlü bir kahve türü.",
        price: "130₺",
      },
      {
        name: "Wiener Melange",
        description: "Avusturya'ya özgü sütlü bir kahve türü.",
        price: "130₺",
      },
      {
        name: "Cafe au Lait",
        description: "Fransa'ya özgü sütlü bir kahve türü.",
        price: "130₺",
      },
      {
        name: "Kaffie Verkeerd",
        description: "Hollanda'ya özgü sütlü bir kahve türü.",
        price: "130₺",
      },
      {
        name: "Kleiner Brauner",
        description: "Avusturya'ya özgü sütlü espresso.",
        price: "130₺",
      },
      {
        name: "Caffe Crema",
        price: "120₺",
      },
      {
        name: "Cappiccino",
        price: "130₺",
      },
      {
        name: "Latte Macchiato",
        price: "130₺",
      },
      {
        name: "Caffe Latte",
        price: "130₺",
      },
      {
        name: "Espresso",
        price: "110₺",
      },
      {
        name: "Espresso Macchiato",
        price: "120₺",
      },
      {
        name: "Espresso Doppio",
        price: "120₺",
      },
      {
        name: "Ristretto",
        price: "110₺",
      },
      {
        name: "Americano",
        price: "120₺",
      },
    ],
  },
  {
    name: "Soğuk İçecekler",
    image: "/covers/soguk-icecek.png",
    slug: "soguk-icecekler",
    type: "drink",
    background_color: "#526b36",
    color: "#ECF39E",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        price: "90₺",
      },
      {
        name: "Sade Soda",
        price: "60₺",
      },
      {
        name: "Meyveli Soda",
        price: "65₺",
      },
      {
        name: "Ayran",
        price: "50₺",
      },
      {
        name: "Su",
        price: "25₺",
      },
      {
        name: "Iced Caffe Americano",
        price: "140₺",
      },
      {
        name: "Iced Caffe Latte",
        price: "150₺",
      },
    ],
  },
  {
    name: "Soslar",
    slug: "soslar",
    image: "/covers/soslar.png",
    type: "drink",
    background_color: "#5b733a",
    color: "#ECF39E",
    items: [
      {
        name: "Tokio Sos",
        price: "18₺",
      },
      {
        name: "Algerienne Sos 🌶️",
        price: "18₺",
      },
      {
        name: "Samurai Sos 🌶️",
        price: "18₺",
      },
      {
        name: "Richie Sos",
        price: "18₺",
      },
      {
        name: "Dynamite Sos 🌶️🌶️",
        price: "18₺",
      },
      {
        name: "White Sos",
        price: "18₺",
      },
      {
        name: "Aioli Sos",
        price: "18₺",
      },
      {
        name: "Sweet Chili Sos 🌶️",
        price: "12₺",
      },
      {
        name: "BBQ Sos",
        price: "12₺",
      },
      {
        name: "Buffalo Sos 🌶️",
        price: "12₺",
      },
      {
        name: "Peri Peri Sos 🌶️",
        price: "12₺",
      },
      {
        name: "Relish Sos",
        price: "12₺",
      },
    ],
  },
  {
    name: "Ekstralar",
    slug: "ekstralar",
    image: "/covers/ekstralar.png",
    type: "drink",
    background_color: "#5b733a",
    color: "#ECF39E",
    items: [
      {
        name: "Adet Salam",
        price: "12₺",
      },
      {
        name: "Adet Füme Kaburga",
        price: "40₺",
      },
      {
        name: "Adet Yumurta ",
        price: "10₺",
      },
      {
        name: "Adet Tenders (90-110gr)",
        price: "90₺",
      },
      {
        name: "6'lı Soğan Halkası",
        price: "100₺",
      },
      {
        name: "Adet Kanat",
        price: "60₺",
      },
      {
        name: "Ekstra Cheddar",
        price: "25₺",
      },
      {
        name: "Colelaw Salata (Yeşil Elmalı)",
        price: "45₺",
      },
    ],
  },
];
const sauces: Sauce[] = [
  {
    name: "Tokio Sos",
    price: "18₺",
  },
  {
    name: "Algerienne Sos 🌶️",
    price: "18₺",
  },
  {
    name: "Samurai Sos 🌶️",
    price: "18₺",
  },
  {
    name: "Richie Sos",
    price: "18₺",
  },
  {
    name: "Dynamite Sos 🌶️🌶️",
    price: "18₺",
  },
  {
    name: "White Sos",
    price: "18₺",
  },
  {
    name: "Aioli Sos",
    price: "18₺",
  },
  {
    name: "Sweet Chili Sos 🌶️",
    price: "12₺",
  },
  {
    name: "BBQ Sos",
    price: "12₺",
  },
  {
    name: "Buffalo Sos 🌶️",
    price: "12₺",
  },
  {
    name: "Peri Peri Sos 🌶️",
    price: "12₺",
  },
  {
    name: "Relish Sos",
    price: "12₺",
  },
];

export { sauces, menu };
export type {
  MenuCategory,
  Sauce,
  MenuItemWithVariant,
  MenuItemWithoutVariant,
  MenuItemVariant,
};
