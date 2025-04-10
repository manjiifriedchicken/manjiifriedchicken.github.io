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
  type: "food" | "drink";
  background_color: string;
  color: string;
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
    type: "food",
    background_color: "#132A13",
    color: "#ECF39E",
    items: [
      {
        name: "Tokio Burger",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Tokyo sos, cheddar peyniri, alman turşu, colslaw salata, patates kızartması.",
        variants: [
          {
            name: "Sandwich",
            price: "260₺",
          },
          {
            name: "Tokio X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "290₺",
          },
          {
            name: "Tokio XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "290₺",
          },
        ],
      },
      {
        name: "London Burger",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Algarienne sos, White Sos, dana macar salam, marul, soğan, patates kızartması.",
        variants: [
          {
            name: "Sandwich",
            price: "270₺",
          },
          {
            name: "London X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "300₺",
          },
          {
            name: "London XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "300₺",
          },
        ],
      },
    ],
  },
  {
    name: "Köfte Burgerler",
    type: "food",
    background_color: "#1e381b",
    color: "#ECF39E",
    items: [
      {
        name: "Manjinal Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, ankara çubuk.",
        variants: [
          {
            name: "Sandwich",
            price: "280₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "300₺",
          },
        ],
      },
      {
        name: "Algerienne Burger 🌶️",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, fıstıklı macar salam, ankara çubuk.",

        variants: [
          {
            name: "Sandwich",
            price: "300₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "320₺",
          },
        ],
      },
      {
        name: "Eggyshaggy Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, ankara çubuk.",

        variants: [
          {
            name: "Sandwich",
            price: "300₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "320₺",
          },
        ],
      },
      {
        name: "Smoky Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, karabiberli rosebeef, çift cheddar peyniri, tütsülenmiş mayonez, biber ezmesi, soğan, ankara çubuk.",
        variants: [
          {
            name: "Sandwich",
            price: "330₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "350₺",
          },
        ],
      },
      {
        name: "Relish Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, homemade relish sos, marul, soğan, domates, ankara çubuk.",
        variants: [
          {
            name: "Sandwich",
            price: "300₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "320₺",
          },
        ],
      },
    ],
  },
  {
    name: "Burritolar / Wrapler",
    type: "food",
    background_color: "#253F1F",
    color: "#ECF39E",
    items: [
      {
        name: "Izgara Tavuk Burrito",
        description: "Izgara tavuk, çift lavaş, algerienne sos, ranch sos, patates, domates, marul, soğan.",
        variants: [
          {
            name: "Burrito",
            price: "175₺"
          },
          {
            name: "Burrito + İçecek",
            price: "200₺"
          }
        ]
      },
      {
        name: "Sezar Tavuk Burrito",
        description: "Izgara tavuk, çift lavaş, sezar sos, patates, domates, marul, soğan",
        variants: [
          {
            name: "Burrito",
            price: "175₺"
          },
          {
            name: "Burrito + İçecek",
            price: "200₺"
          }
        ]
      },
      {
        name: "M.F.C. Burrito",
        description: "Kızarmış M.F.C tavuk, çift lavaş, algerienne sos, ranch sos, ranch sos, patates, domates, marul, soğan.",
        variants: [
          {
            name: "Burrito",
            price: "220₺"
          },
          {
            name: "Burrito + İçecek",
            price: "240₺"
          }
        ]
      },
      {
        name: "Dinamit M.F.C. Burrito 🌶️🌶️",
        description: "Kızarmış M.F.C tavuk, çift lavaş, dinamit sos, ranch sos, patates, domates, marul.",
        variants: [
          {
            name: "Burrito",
            price: "220₺"
          },
          {
            name: "Burrito + İçecek",
            price: "240₺"
          }
        ]
      },
      {
        name: "Kıymalı Burrito",
        description: "130gr dana kaburga kıyması, çift lavaş, algerienne sos, ranch sos, patates, domates, marul, soğan.",
        variants: [
          {
            name: "Burrito",
            price: "230₺"
          },
          {
            name: "Burrito + İçecek",
            price: "250₺"
          }
        ]
      },
    ]
  },
  {
    name: "Tavuk Atıştırmalıkları",
    type: "food",
    background_color: "#2b4622",
    color: "#ECF39E",
    items: [
      {
        name: "Chicken Tenders",
        description: "Klasik chicken tenders, patates kızartması, sos",
        variants: [
          {
            name: "5'li Tenders",
            price: "230₺",
          },
          {
            name: "7'li Tenders",
            price: "250₺",
          },
          {
            name: "9'lu Tenders",
            price: "280₺",
          },
        ],
      },
      {
        name: "Klasik Kanat",
        description: "Klasik tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Kanat",
            price: "230₺",
          },
          {
            name: "10'lu Kanat",
            price: "310₺",
          },
        ],
      },
      {
        name: "BBQ Kanat",
        description: "BBQ soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı BBQ Kanat",
            price: "230₺",
          },
          {
            name: "10'lu BBQ Kanat",
            price: "315₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️🌶️",
        description: "Dinamit soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Dinamit Kanat",

            price: "230₺",
          },
          {
            name: "10'lu Dinamit Kanat",
            price: "310₺",
          },
        ],
      },
    ],
  },
  {
    name: "Kahveler",
    type: "drink",
    background_color: "#38542a",
    color: "#ECF39E",
    items: [
      {
        name: "Flat White",
        description: "Avustralya'ya özgü sütlü bir kahve türü.",
        price: "95₺",
      },
      {
        name: "Wiener Melange",
        description: "Avusturya'ya özgü sütlü bir kahve türü.",
        price: "95₺",
      },
      {
        name: "Cafe au Lait",
        description: "Fransa'ya özgü sütlü bir kahve türü.",
        price: "95₺",
      },
      {
        name: "Kaffie Verkeerd",
        description: "Hollanda'ya özgü sütlü bir kahve türü.",
        price: "95₺",
      },
      {
        name: "Kleiner Brauner",
        description: "Avusturya'ya özgü sütlü espresso.",
        price: "95₺",
      },
      {
        name: "Caffe Crema",
        price: "85₺",
      },
      {
        name: "Cappiccino",
        price: "95₺",
      },
      {
        name: "Latte Macchiato",
        price: "95₺",
      },
      {
        name: "Caffe Latte",
        price: "95₺",
      },
      {
        name: "Espresso",
        price: "75₺",
      },
      {
        name: "Espresso Macchiato",
        price: "80₺",
      },
      {
        name: "Espresso Doppio",
        price: "80₺",
      },
      {
        name: "Ristretto",
        price: "75₺",
      },
      {
        name: "Americano",
        price: "85₺",
      },
      {
        name: "",
        price: "",
        description:
          "Double Shot Espresso ve Soğuk Kahvelerde 20₺ ek ücret alınır.",
      },
    ],
  },
  {
    name: "Soğuk İçecekler",
    type: "drink",
    background_color: "#466332",
    color: "#ECF39E",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        price: "50₺",
      },
      {
        name: "Sade Soda",
        price: "20₺",
      },
      {
        name: "Meyveli Soda",
        price: "25₺",
      },
      {
        name: "Ayran",
        price: "30₺",
      },
      {
        name: "Su",
        price: "15₺",
      },
      {
        name: "Iced Caffe Americano",
        price: "70₺",
      },
      {
        name: "Iced Caffe Latte",
        price: "85₺",
      },
    ],
  },
  // {
  //   name: "Sıcak İçecekler",
  //   type: "drink",
  //   background_color: "#567239",
  //   color: "#ECF39E",
  //   items: [
  //     {
  //       name: "Çay",
  //       price: "12₺",
  //     },
  //     {
  //       name: "Türk Kahvesi",
  //       price: "35₺",
  //     },
  //   ],
  // },
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
