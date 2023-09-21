interface MenuItemVariant {
  name: string;
  description: string;
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
        variants: [
          {
            name: "Sandwich",
            description:
              "Tokio sos, kızarmış tavuk butu, tatlı alman turşusu, coleslaw salata, cheddar peyniri.",
            price: "112₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Tokio sos, kızarmış tavuk butu, tatlı alman turşusu, coleslaw salata, cheddar peyniri.",
            price: "142₺",
          },
        ],
      },
      {
        name: "Bonzai Burger 🌶️🌶️🌶️",
        variants: [
          {
            name: "Sandwich",
            description:
              "Bonzai sos, kızarmış tavuk butu, jalepeno biber, white sos.",
            price: "112₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Bonzai sos, kızarmış tavuk butu, jalepeno biber, white sos.",
            price: "142₺",
          },
        ],
      },
      //   {
      //     name: "Alfredo Burger",
      //     variants: [
      //       {
      //         name: "Sandwich",
      //         description:
      //           "Krema sos, mantar, sarımsak tozu, mozarella peyniri, kızarmış tavuk butu, tatlı alman turşusu.",
      //         price: "122₺",
      //       },
      //       {
      //         name: "Sandwich + İçecek",
      //         description:
      //           "Krema sos, mantar, sarımsak tozu, mozarella peyniri, kızarmış tavuk butu, tatlı alman turşusu.",
      //         price: "152₺",
      //       },
      //     ],
      //   },
      {
        name: "Dump Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Kızarmış tavuk but, kızarmış peynir, sweet mayo, çıtır soğan, iceberg.",
            price: "124₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Kızarmış tavuk but, kızarmış peynir, sweet mayo, çıtır soğan, iceberg.",
            price: "154₺",
          },
        ],
      },
      //   {
      //     name: "B. King Burger",
      //     variants: [
      //       {
      //         name: "Sandwich",
      //         description: "Sweet mayo, Ballı BBQ soslu tavuk, cheddar, füme et.",
      //         price: "128₺",
      //       },
      //       {
      //         name: "Sandwich + İçecek",
      //         description: "Sweet mayo, Ballı BBQ soslu tavuk, cheddar, füme et.",
      //         price: "158₺",
      //       },
      //     ],
      //   },
      //   {
      //     name: "White Queen",
      //     variants: [
      //       {
      //         name: "Sandwich",
      //         description:
      //           "Kızarmış tavuk but, white sos, çıtır soğan, kaşar peyniri, füme et.",
      //         price: "130₺",
      //       },
      //       {
      //         name: "Sandwich + İçecek",
      //         description:
      //           "Kızarmış tavuk but, white sos, çıtır soğan, kaşar peyniri, füme et.",
      //         price: "130₺",
      //       },
      //     ],
      //   },
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
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, tatlı alman turşusu.",
            price: "180₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, aioli sos, soğan, domates, iceberg, tatlı alman turşusu.",
            price: "210₺",
          },
        ],
      },
      {
        name: "Algerienne Burger 🌶️",
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, karamelize soğan, fıstıklı macar salam, tatlı alman turşusu.",
            price: "149₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, karamelize soğan, fıstıklı macar salam, tatlı alman turşusu.",
            price: "179₺",
          },
        ],
      },
      {
        name: "Eggyshaggy Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, tatlı alman turşusu.",
            price: "180₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, sunny side up yumurta, cheddar peyniri, chips master, white sos, tatlı alman turşusu.",
            price: "210₺",
          },
        ],
      },
      {
        name: "Acapuleo Burger 🌶️🌶️🌶️",
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, kaşar peynir, jalapeno biber, acılı chips master, samurai sos.",
            price: "180₺",
          },
          {
            name: "Sandwich + İçecek",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, kaşar peynir, jalapeno biber, acılı chips master, samurai sos.",
            price: "210₺",
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
            price: "140₺",
          },
          {
            name: "7'li",
            description:
              "7 adet klasik chicken tenders, patates kızartması, sos",
            price: "200₺",
          },
          {
            name: "9'lu",
            description:
              "9 adet klasik chicken tenders, patates kızartması, sos",
            price: "260₺",
          },
          {
            name: "Menü Yanında 1",
            description: "Menü yanında 1 adet klasik chicken tender.",
            price: "30₺",
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
            name: "5'li",
            description: "5 adet klasik tavuk kanadı, patates kızartması, sos",
            price: "140₺",
          },
          {
            name: "7'li",
            description: "7 adet klasik tavuk kanadı, patates kızartması, sos",
            price: "200₺",
          },
          {
            name: "9'lu",
            description: "9 adet klasik tavuk kanadı, patates kızartması, sos",
            price: "260₺",
          },
          {
            name: "Menü Yanında 1",
            description: "Menü yanında 1 adet klasik tavuk kanadı",
            price: "30₺",
          },
        ],
      },
      {
        name: "BBQ Kanat",
        variants: [
          {
            name: "5'li",
            description:
              "5 adet BBQ soslu tavuk kanadı, patates kızartması, sos",
            price: "140₺",
          },
          {
            name: "7'li",
            description:
              "7 adet BBQ soslu tavuk kanadı, patates kızartması, sos",
            price: "200₺",
          },
          {
            name: "9'lu",
            description:
              "9 adet BBQ soslu tavuk kanadı, patates kızartması, sos",
            price: "260₺",
          },
          {
            name: "Menü Yanında 1",
            description: "Menü yanında 1 adet BBQ soslu tavuk kanadı",
            price: "30₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️🌶️",
        variants: [
          {
            name: "5'li",
            description:
              "5 adet dinamit soslu tavuk kanadı, patates kızartması, sos",
            price: "140₺",
          },
          {
            name: "7'li",
            description:
              "7 adet dinamit soslu tavuk kanadı, patates kızartması, sos",
            price: "200₺",
          },
          {
            name: "9'lu",
            description:
              "9 adet dinamit soslu tavuk kanadı, patates kızartması, sos",
            price: "260₺",
          },
          {
            name: "Menü Yanında 1",
            description: "Menü yanında 1 adet dinamit soslu tavuk kanadı",
            price: "30₺",
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
    name: "Algerienne Sos",
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
