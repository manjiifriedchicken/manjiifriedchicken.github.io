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
    items: [
      {
        name: "Tokio Burger",
        description:
          "Artisan burger ekmeği, kızarmış M.F.C tavuk, Tokyo sos, cheddar peyniri, alman turşu, colslaw salata, patates kızartması.",
        variants: [
          {
            name: "Sandwich",
            price: "290₺",
          },
          {
            name: "Tokio X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "320₺",
          },
          {
            name: "Tokio XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "320₺",
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
            price: "300₺",
          },
          {
            name: "London X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "330₺",
          },
          {
            name: "London XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "330₺",
          },
        ],
      },
    ],
  },
  {
    name: "Köfte Burgerler",
    slug: "kofte-burgerler",
    type: "food",
    background_color: "#1a3217",
    color: "#ECF39E",
    items: [
      {
        name: "Manjinal Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, ankara çubuk.",
        variants: [
          {
            name: "Sandwich",
            price: "310₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "330₺",
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
        name: "Eggyshaggy Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, ankara çubuk.",

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
        name: "Smoky Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, karabiberli rosebeef, çift cheddar peyniri, tütsülenmiş mayonez, biber ezmesi, soğan, ankara çubuk.",
        variants: [
          {
            name: "Sandwich",
            price: "360₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "380₺",
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
            price: "330₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "350₺",
          },
        ],
      },
    ],
  },
  {
    name: "Burritolar / Wrapler",
    slug: "burritolar-wrapler",
    type: "food",
    background_color: "#21391c",
    color: "#ECF39E",
    items: [
      {
        name: "Izgara Tavuk Burrito",
        description: "Izgara tavuk, çift lavaş, algerienne sos, ranch sos, patates, domates, marul, soğan.",
        variants: [
          {
            name: "Burrito",
            price: "200₺"
          },
          {
            name: "Burrito + İçecek",
            price: "220₺"
          }
        ]
      },
      {
        name: "M.F.C. Burrito",
        description: "Kızarmış M.F.C tavuk, çift lavaş, algerienne sos, ranch sos, ranch sos, patates, domates, marul, soğan.",
        variants: [
          {
            name: "Burrito",
            price: "250₺"
          },
          {
            name: "Burrito + İçecek",
            price: "270₺"
          }
        ]
      },
      {
        name: "Dinamit M.F.C. Burrito 🌶️🌶️",
        description: "Kızarmış M.F.C tavuk, çift lavaş, dinamit sos, ranch sos, patates, domates, marul.",
        variants: [
          {
            name: "Burrito",
            price: "250₺"
          },
          {
            name: "Burrito + İçecek",
            price: "270₺"
          }
        ]
      },
    ]
  },
  {
    name: "Tavuk Atıştırmalıkları",
    slug: "tavuk-atistirmaliklar",
    type: "food",
    background_color: "#284120",
    color: "#ECF39E",
    items: [
      {
        name: "Chicken Tenders",
        description: "Klasik chicken tenders, patates kızartması, sos",
        variants: [
          {
            name: "5'li Tenders",
            price: "260₺",
          },
          {
            name: "7'li Tenders",
            price: "280₺",
          },
          {
            name: "9'lu Tenders",
            price: "310₺",
          },
        ],
      },
      {
        name: "Klasik Kanat",
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
        description: "Patates Kızartması, M.F.C. tavuk parçaları, bol cheddar sos, taze soğan, salatalık turşusu.",
        price: "270₺",
      },
      {
        name: "Hot Bomb Fries",
        description: "Patates Kızartması, M.F.C. tavuk parçaları, jalepeno biber, cheddar peyniri, taze soğan, salatalık turşusu, buffalo, algerienne ve ranch sos.",
        price: "250₺",
      },
    ],
  },
  {
    name: "Bowl",
    slug: "bowl",
    type: "food",
    background_color: "#375229",
    color: "#ECF39E",
    items: [
      {
        name: "Big Bowl",
        description: "Patates kızartması, coleslaw salata, 130gr köfte, 3 adet tenders, 2 adet soğan halkası, füme kaburga dilimleri, iki çeşit sos.",
        price: "420₺",
      },
      {
        name: "Chicken Bowl",
        description: "Patates kızartması, coleslaw salata, 2 adet tenders, 2 adet soğan halkası, iki çeşit sos.",
        price: "420₺",
      },
    ],
  },
  {
    name: "Salatalar",
    slug: "salatalar",
    type: "food",
    background_color: "#405a2d",
    color: "#ECF39E",
    items: [
      {
        name: "M.F.C. Salata",
        description: "Akdeniz yeşillikleri, domates, salatalık, zeytin, mısır, mevsim meyvesi, M.F.C. tavuk, Manjii sos.",
        price: "270₺",
      },
      {
        name: "Izgara Salata",
        description: "Akdeniz yeşillikleri, domates, salatalık, zeytin, mısır, mevsim meyvesi, ızgara tavuk, Manjii sos.",
        price: "270₺",
      },
    ],
  },
  {
    name: "Kahveler",
    slug: "kahveler",
    type: "drink",
    background_color: "#496231",
    color: "#ECF39E",
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
    slug: "soguk-icecekler",
    type: "drink",
    background_color: "#526b36",
    color: "#ECF39E",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        price: "70₺",
      },
      {
        name: "Sade Soda",
        price: "40₺",
      },
      {
        name: "Meyveli Soda",
        price: "45₺",
      },
      {
        name: "Ayran",
        price: "45₺",
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
    name: "Sıcak İçecekler",
    slug: "sicak-icecekler",
    type: "drink",
    background_color: "#5b733a",
    color: "#ECF39E",
    items: [
      {
        name: "Çay",
        price: "30₺",
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
