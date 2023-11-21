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
          "Artisian burger ekmeği, kızarmış M.F.C tavuk, Tokyo sos, cheddar peyniri, alman turşu, colslaw salata, patates kızartması.",
        variants: [
          {
            name: "Sandwich",
            price: "135₺",
          },
          {
            name: "Jungle X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "165₺",
          },
          {
            name: "Jungle L",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "185₺",
          },
        ],
      },
      {
        name: "London Burger",
        description:
          "Artisian burger ekmeği, kızarmış M.F.C tavuk, Algarienne sos, dana macar salam, marul, soğan, patates kızartması.",
        variants: [
          {
            name: "Sandwich",
            price: "135₺",
          },
          {
            name: "London X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "165₺",
          },
          {
            name: "Jungle L",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "185₺",
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
        name: "Marjinal Burger",
        description:
          "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, tatlı alman turşusu.",
        variants: [
          {
            name: "Sandwich",
            price: "145₺",
          },
          {
            name: "Marjinal X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "175₺",
          },
          {
            name: "Marjinal L",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "195₺",
          },
        ],
      },
      {
        name: "Algerienne Burger 🌶️",
        description:
          "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, karamelize soğan, fıstıklı macar salam, tatlı alman turşusu.",

        variants: [
          {
            name: "Sandwich",
            price: "150₺",
          },
          {
            name: "Algerienne X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "180₺",
          },
          {
            name: "Algerienne L",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "200₺",
          },
        ],
      },
      {
        name: "Eggyshaggy Burger",
        description:
          "Artisian burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, tatlı alman turşusu.",

        variants: [
          {
            name: "Sandwich",
            price: "150₺",
          },
          {
            name: "Eggyshaggy X",
            description: "Sandwich + İçecek + 2 Soğan Halkası + 2 Tenders",
            price: "180₺",
          },
          {
            name: "Eggyshaggy L",
            description: "Sandwich + İçecek + 1 Kanat + 1 Tenders",
            price: "200₺",
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
        variants: [
          {
            name: "5'li",
            description:
              "5 adet klasik chicken tenders, patates kızartması, sos",
            price: "145₺",
          },
          {
            name: "7'li",
            description:
              "7 adet klasik chicken tenders, patates kızartması, sos",
            price: "155₺",
          },
          {
            name: "9'lu",
            description:
              "9 adet klasik chicken tenders, patates kızartması, sos",
            price: "165₺",
          },
        ],
      },
    ],
  },
  {
    name: "Kanatlar",
    type: "food",
    background_color: "#38542a",
    color: "#ECF39E",
    items: [
      {
        name: "Klasik Kanat",
        variants: [
          {
            name: "6'li",
            description: "6 adet klasik tavuk kanadı, patates kızartması, sos",
            price: "155₺",
          },
          {
            name: "10'li",
            description: "10 adet klasik tavuk kanadı, patates kızartması, sos",
            price: "230₺",
          },
        ],
      },
      {
        name: "BBQ Kanat",
        variants: [
          {
            name: "6'li",
            description:
              "6 adet BBQ soslu tavuk kanadı, patates kızartması, sos",
            price: "155₺",
          },
          {
            name: "10'lu",
            description:
              "10x adet BBQ soslu tavuk kanadı, patates kızartması, sos",
            price: "230₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️🌶️",
        variants: [
          {
            name: "6'li",
            description:
              "5 adet dinamit soslu tavuk kanadı, patates kızartması, sos",
            price: "155₺",
          },
          {
            name: "10'lu",
            description:
              "7 adet dinamit soslu tavuk kanadı, patates kızartması, sos",
            price: "230₺",
          },
        ],
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
        price: "30₺",
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
  {
    name: "Sıcak İçecekler",
    type: "drink",
    background_color: "#567239",
    color: "#ECF39E",
    items: [
      {
        name: "Çay",
        price: "12₺",
      },
      {
        name: "Türk Kahvesi",
        price: "35₺",
      },
      {
        name: "Espresso",
        price: "40₺",
      },
      {
        name: "Americano",
        price: "45₺",
      },
      {
        name: "Latte",
        price: "50₺",
      },
    ],
  },
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
