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
  background_color: string;
  color: string;
  items: (MenuItemWithVariant | MenuItemWithoutVariant)[];
}

const menu: MenuCategory[] = [
  {
    name: "Tavuk Burgerler",
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
        ],
      },
      {
        name: "Bonzai Burger 🌶️",
        variants: [
          {
            name: "Sandwich",
            description:
              "Bonzai sos, kızarmış tavuk butu, jalepeno biber, white sos.",
            price: "112₺",
          },
        ],
      },
      {
        name: "Alfredo Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Krema sos, mantar, sarımsak tozu, mozarella peyniri, kızarmış tavuk butu, tatlı alman turşusu.",
            price: "122₺",
          },
        ],
      },
      {
        name: "Dump Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Kızarmış tavuk but, kızarmış peynir, sweet mayo, çıtır soğan, iceberg.",
            price: "124₺",
          },
        ],
      },
      {
        name: "B. King Burger",
        variants: [
          {
            name: "Sandwich",
            description: "Sweet mayo, Ballı BBQ soslu tavuk, cheddar, füme et.",
            price: "128₺",
          },
        ],
      },
      {
        name: "White Queen",
        variants: [
          {
            name: "Sandwich",
            description:
              "Kızarmış tavuk but, white sos, çıtır soğan, kaşar peyniri, füme et.",
            price: "130₺",
          },
        ],
      },
    ],
  },
  {
    name: "Köfte Burgerler",
    background_color: "#31572C",
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
        ],
      },
      {
        name: "Algerienne Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, cheddar peyniri, algerienne sos, karamelize soğan, fıstıklı macar salam, tatlı alman turşusu.",
            price: "149₺",
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
        ],
      },
      {
        name: "Acapuleo Burger",
        variants: [
          {
            name: "Sandwich",
            description:
              "Artisian burger ekmeği, 130gr dana kaburga köftesi, kaşar peynir, jalapeno biber, acılı chips master, samurai sos.",
            price: "180₺",
          },
        ],
      },
    ],
  },
  {
    name: "Tavuk Atıştırmalıkları",
    background_color: "#4F772D",
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
            name: "Menu Yanında 1",
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
            name: "Menu Yanında 1",
            description: "Menü yanında 1 adet BBQ soslu tavuk kanadı",
            price: "30₺",
          },
        ],
      },
      {
        name: "Dinamit Kanat 🌶️",
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
            name: "Menu Yanında 1",
            description: "Menü yanında 1 adet dinamit soslu tavuk kanadı",
            price: "30₺",
          },
        ],
      },
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
            name: "Menu Yanında 1",
            description: "Menü yanında 1 adet klasik chicken tender.",
            price: "30₺",
          },
        ],
      },
    ],
  },
  {
    name: "Soğuk İçecekler",
    background_color: "#90A955",
    color: "#ECF39E",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        price: "30₺",
      },
      {
        name: "Sade Soda",
        price: "14₺",
      },
      {
        name: "Meyveli Soda",
        price: "18₺",
      },
      {
        name: "Ayran",
        price: "16₺",
      },
      {
        name: "Su",
        price: "5₺",
      },
      {
        name: "Churchill",
        price: "25₺",
      },
      {
        name: "Iced Caffe Americano",
        price: "50₺",
      },
      {
        name: "Iced Caffe Latte",
        price: "55₺",
      },
      {
        name: "Iced Caffe Mocha",
        price: "60₺",
      },
    ],
  },
];
export default menu;
