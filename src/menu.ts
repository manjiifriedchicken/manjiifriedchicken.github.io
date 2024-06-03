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
            price: "195₺",
          },
          {
            name: "Tokio X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "225₺",
          },
          {
            name: "Tokio XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "225₺",
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
            price: "205₺",
          },
          {
            name: "London X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "230₺",
          },
          {
            name: "London XL",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "230₺",
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
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, tatlı alman turşusu.",
        variants: [
          {
            name: "Sandwich",
            price: "215₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "235₺",
          }
        ],
      },
      {
        name: "Algerienne Burger 🌶️",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, fıstıklı macar salam, tatlı alman turşusu.",

        variants: [
          {
            name: "Sandwich",
            price: "220₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "245₺",
          },
        ],
      },
      {
        name: "Eggyshaggy Burger",
        description:
          "Artisan burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, tatlı alman turşusu.",

        variants: [
          {
            name: "Sandwich",
            price: "220₺",
          },
          {
            name: "Sandwich + İçecek",
            description: "Sandwich + İçecek",
            price: "245₺",
          },
        ],
      },
    ],
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
            price: "195₺",
          },
          {
            name: "7'li Tenders",
            price: "205₺",
          },
          {
            name: "9'lu Tenders",
            price: "215₺",
          },
        ],
      },
      {
        name: "Klasik Kanat",
        description: "Klasik tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Kanat",
            price: "185₺",
          },
          {
            name: "10'lu Kanat",
            price: "265₺",
          },
        ],
      },
      {
        name: "BBQ Kanat",
        description: "BBQ soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı BBQ Kanat",
            price: "185₺",
          },
          {
            name: "10'lu BBQ Kanat",
            price: "265₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️🌶️",
        description: "Dinamit soslu tavuk kanadı, patates kızartması, sos",
        variants: [
          {
            name: "6'lı Dinamit Kanat",

            price: "185₺",
          },
          {
            name: "10'lu Dinamit Kanat",
            price: "265₺",
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
        price: "75₺",
      },
      {
        name: "Wiener Melange",
        description: "Avusturya'ya özgü sütlü bir kahve türü.",
        price: "75₺",
      },
      {
        name: "Cafe au Lait",
        description: "Fransa'ya özgü sütlü bir kahve türü.",
        price: "75₺",
      },
      {
        name: "Kaffie Verkeerd",
        description: "Hollanda'ya özgü sütlü bir kahve türü.",
        price: "75₺",
      },
      {
        name: "Kleiner Brauner",
        description: "Avusturya'ya özgü sütlü espresso.",
        price: "75₺",
      },
      {
        name: "Caffe Crema",
        price: "65₺"
      },
      {
        name: "Cappiccino",
        price: "75₺"
      },
      {
        name: "Latte Macchiato",
        price: "75₺"
      },
      {
        name: "Caffe Latte",
        price: "75₺"
      },
      {
        name: "Espresso",
        price: "55₺"
      },
      {
        name: "Espresso Macchiato",
        price: "60₺"
      },
      {
        name: "Espresso Doppio",
        price: "60₺"
      },
      {
        name: "Ristretto",
        price: "55₺"
      },
      {
        name: "Americano",
        price: "65₺"
      },
      {
        name: "",
        price: "",
        description: "Double Shot Espresso ve Soğuk Kahvelerde 10₺ ek ücret alınır."
      }
    ]
  },
  {
    name: "Soğuk İçecekler",
    type: "drink",
    background_color: "#466332",
    color: "#ECF39E",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        price: "40₺",
      },
      {
        name: "Sade Soda",
        price: "15₺",
      },
      {
        name: "Meyveli Soda",
        price: "18₺",
      },
      {
        name: "Ayran",
        price: "22₺",
      },
      {
        name: "Su",
        price: "12₺",
      },
      {
        name: "Iced Caffe Americano",
        price: "55₺",
      },
      {
        name: "Iced Caffe Latte",
        price: "60₺",
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
    price: "12₺",
  },
  {
    name: "Algerienne Sos 🌶️",
    price: "12₺",
  },
  {
    name: "Samurai Sos 🌶️",
    price: "12₺",
  },
  {
    name: "Richie Sos",
    price: "12₺",
  },
  {
    name: "Dynamite Sos 🌶️🌶️",
    price: "12₺",
  },
  {
    name: "White Sos",
    price: "12₺",
  },
  {
    name: "Aioli Sos",
    price: "12₺",
  },
  {
    name: "Sweet Chili Sos 🌶️",
    price: "7.5₺",
  },
  {
    name: "BBQ Sos",
    price: "7.5₺",
  },
  {
    name: "Buffalo Sos 🌶️",
    price: "7.5₺",
  },
  {
    name: "Peri Peri Sos 🌶️",
    price: "7.5₺",
  },
  {
    name: "Relish Sos",
    price: "7.5₺",
  },
];

export { sauces, menu };
