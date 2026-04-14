export interface MenuItem {
  name: string;
  original_price: number;
  image_url: string;
}

export interface MenuCategory {
  category: string;
  icon: string;
  items: MenuItem[];
}

export const DISCOUNT_PERCENTAGE = 0;
export const CURRENCY = "AED";

export const menuCategories: MenuCategory[] = [
  {
    category: "Coffee & Hot Drinks",
    icon: "☕",
    items: [
      { name: "Flat White", original_price: 26, image_url: new URL("../assets/menu/flatwhite.jpeg", import.meta.url).href },
      { name: "Americano", original_price: 20, image_url: new URL("../assets/menu/americano.jpeg", import.meta.url).href},
      { name: "Espresso", original_price: 18, image_url: new URL("../assets/menu/espresso.jpeg", import.meta.url).href },
      { name: "Hot Chocolate", original_price: 35, image_url: new URL("../assets/menu/hotchocolate.jpeg", import.meta.url).href },
      { name: "Rose Latte", original_price: 30, image_url: new URL("../assets/menu/roselatte.jpeg", import.meta.url).href },
      { name: "Cappuccino", original_price: 25, image_url: new URL("../assets/menu/cappuccino.jpeg", import.meta.url).href },
      { name: "Piccolo", original_price: 23, image_url: new URL("../assets/menu/piccolo.jpeg", import.meta.url).href },
      { name: "Cortado", original_price: 24, image_url: new URL("../assets/menu/cortado.jpeg", import.meta.url).href },
      { name: "Matcha Latte", original_price: 26, image_url: new URL("../assets/menu/matchalatte.jpeg", import.meta.url).href },
      { name: "Spanish Latte", original_price: 28, image_url: new URL("../assets/menu/flatwhite.jpeg", import.meta.url).href },
      { name: "Caffè Latte", original_price: 25, image_url: new URL("../assets/menu/caffelatte.jpeg", import.meta.url).href },
      { name: "Saffron Latte", original_price: 30, image_url: new URL("../assets/menu/saffronlatte.jpeg", import.meta.url).href },
      { name: "Pistachio Latte", original_price: 30, image_url: new URL("../assets/menu/pistachiolatte.jpeg", import.meta.url).href },
      { name: "Spanish Cortado", original_price: 26, image_url: new URL("../assets/menu/spanishcortado.jpeg", import.meta.url).href },
      { name: "Affogato", original_price: 26, image_url: new URL("../assets/menu/affogato.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Tea",
    icon: "🍵",
    items: [
      { name: "Green Tea", original_price: 18, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "English Breakfast", original_price: 18, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Ceylon Earl Grey", original_price: 18, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Iced Drinks",
    icon: "🧊",
    items: [
      { name: "Iced Rose Latte", original_price: 30, image_url: new URL("../assets/menu/icedroselatte.jpeg", import.meta.url).href },
      { name: "Iced Saffron Latte", original_price: 30, image_url: new URL("../assets/menu/icedsaffronlatte.jpeg", import.meta.url).href },
      { name: "Kunafa Pistachio Milkshake", original_price: 35, image_url: new URL("../assets/menu/pistachiokunafshake.jpeg", import.meta.url).href },
      { name: "Mango Matcha", original_price: 30, image_url: new URL("../assets/menu/mangomatcha.jpeg", import.meta.url).href },
      
      { name: "Coconut Mango Shake", original_price: 32, image_url: new URL("../assets/menu/coconutmangoshake.jpeg", import.meta.url).href },
      { name: "Iced Chocolate", original_price: 35, image_url: new URL("../assets/menu/icedchocolate.jpeg", import.meta.url).href },
      { name: "Strawberry Mojito", original_price: 28, image_url: new URL("../assets/menu/strawberrymojito.jpeg", import.meta.url).href },
      { name: "Orange Juice", original_price: 25, image_url: new URL("../assets/menu/orangejuice.jpeg", import.meta.url).href },
      { name: "Blue Lagoon Mojito", original_price: 28, image_url: new URL("../assets/menu/bluelagoonmojito.jpeg", import.meta.url).href },
      { name: "Amora Signature Drink", original_price: 35, image_url: new URL("../assets/menu/amorasignaturedrink.jpeg", import.meta.url).href },
      { name: "Acai Smoothie", original_price: 35, image_url: new URL("../assets/menu/acaismoothie.jpeg", import.meta.url).href },
      { name: "Passion Fruit Mojito", original_price: 28, image_url: new URL("../assets/menu/passionfruitmojito.jpeg", import.meta.url).href },
      { name: "Hibiscus", original_price: 30, image_url: new URL("../assets/menu/redrush.jpeg", import.meta.url).href },
      { name: "Mango Dragon Fruit", original_price: 30, image_url: new URL("../assets/menu/mangodragonfruit.jpeg", import.meta.url).href },
      { name: "Peach Ice Tea", original_price: 30, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Pistachio Milkshake", original_price: 35, image_url: new URL("../assets/menu/pistachiomilkshake.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Sweets",
    icon: "🍰",
    items: [
      { name: "Acai Bowl", original_price: 45, image_url: new URL("../assets/menu/acaibowl.jpeg", import.meta.url).href },
      { name: "Carrot Cake", original_price: 27, image_url: new URL("../assets/menu/carrotcake.jpeg", import.meta.url).href },
      { name: "Chocolate Chip Cookie", original_price: 10, image_url: new URL("../assets/menu/chocolatechipcookie.jpeg", import.meta.url).href },
      { name: "Mango Cake", original_price: 30, image_url: new URL("../assets/menu/mangocake.jpeg", import.meta.url).href },
      { name: "Strawberry Cake", original_price: 30, image_url: new URL("../assets/menu/strawberrycake.jpeg", import.meta.url).href },
      { name: "Nutella Cake", original_price: 30, image_url: new URL("../assets/menu/nutellacake.jpeg", import.meta.url).href },
      { name: "Sebastian Cheesecake", original_price: 35, image_url: new URL("../assets/menu/sebastiancheesecake.jpeg", import.meta.url).href },
      { name: "Tiramisu", original_price: 35, image_url: new URL("../assets/menu/tiramisu.jpeg", import.meta.url).href },
      { name: "Drowning Chocolate Chip Cookies", original_price: 25, image_url: new URL("../assets/menu/drowningkindercookies.jpeg", import.meta.url).href },
      { name: "Drowning Kinder Cookies", original_price: 27, image_url:  new URL("../assets/menu/drowningkindercookies.jpeg", import.meta.url).href },
      { name: "Vanilla Iced Muffin", original_price: 12, image_url: new URL("../assets/menu/vanillaicedmuffin.jpeg", import.meta.url).href },
      { name: "Chocolate Muffin", original_price: 15, image_url: new URL("../assets/menu/chocolatemuffin.jpeg", import.meta.url).href },
      { name: "Blueberry Muffin", original_price: 15, image_url: new URL("../assets/menu/blueberrymuffin.jpeg", import.meta.url).href },
      
    ],
  },
  {
    category: "Pastry",
    icon: "🥐",
    items: [
      { name: "Plain Croissant", original_price: 15, image_url: new URL("../assets/menu/plaincrossaint.jpeg", import.meta.url).href },
      { name: "Pistachio Croissant", original_price: 20, image_url: new URL("../assets/menu/pistachiocrossaint.jpeg", import.meta.url).href },
      { name: "Nutella Croissant", original_price: 20, image_url: new URL("../assets/menu/nutellacroissant.jpeg", import.meta.url).href },
      { name: "Halloumi Croissant", original_price: 23, image_url: new URL("../assets/menu/halloumicroissant.jpeg", import.meta.url).href },
      { name: "Egg & Cheese Croissant", original_price: 20, image_url: new URL("../assets/menu/eggandcheesecroissant.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Pasta",
    icon: "🍝",
    items: [
      { name: "Amora Signature Pasta", original_price: 42, image_url: new URL("../assets/menu/amorasignaturepasta.jpeg", import.meta.url).href },
      { name: "Arrabbiata Pasta", original_price: 40, image_url: new URL("../assets/menu/arrabbiatapasta.jpeg", import.meta.url).href },
      { name: "Fusilli Pasta", original_price: 41, image_url: new URL("../assets/menu/fusillipasta.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Salad",
    icon: "🥗",
    items: [
      { name: "Beetroot Salad", original_price: 30, image_url: new URL("../assets/menu/beetrootsalad.jpeg", import.meta.url).href },
      { name: "Caesar Salad", original_price: 32, image_url: new URL("../assets/menu/caesarsalad.jpeg", import.meta.url).href },
      
    ],
  },
  {
    category: "Pizza & Burgers",
    icon: "🍕",
    items: [
      { name: "Margherita Pizza", original_price: 38, image_url: new URL("../assets/menu/margheritapizza.jpeg", import.meta.url).href },
      { name: "Beef Burger", original_price: 35, image_url: new URL("../assets/menu/beefburger.jpeg", import.meta.url).href },
      { name: "Chicken Ranch Pizza", original_price: 55, image_url: new URL("../assets/menu/chickenranchpizza.jpeg", import.meta.url).href },
      { name: "Pepperoni Pizza", original_price: 45, image_url: new URL("../assets/menu/pepperonipizza.jpeg", import.meta.url).href },
      
      { name: "Chicken Burger", original_price: 24, image_url: new URL("../assets/menu/chickenburger.jpeg", import.meta.url).href },
      { name: "Chicken Wraps with Salad", original_price: 24, image_url: new URL("../assets/menu/chickenwrapswithsalad.jpeg", import.meta.url).href },
    ],
  },
  {
    category: "Breakfast",
    icon: "🍳",
    items: [
      { name: "Royal Eggs Benedict", original_price: 35, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Classic Eggs Benedict", original_price: 28, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Egg Muffin", original_price: 22, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Potato Cheese Balls", original_price: 16, image_url: new URL("../assets/menu/amora.jpeg", import.meta.url).href },
      { name: "Chicken Croquettes", original_price: 25, image_url: new URL("../assets/menu/chickencroquettes.jpeg", import.meta.url).href },
      { name: "French Fries", original_price: 10, image_url: new URL("../assets/menu/frenchfries.jpeg", import.meta.url).href },
    ],
  },
];

export const POPULAR_ITEMS = [
  "Spanish Latte",
  "Pistachio Latte",
  "Amora Signature Drink",
  "Sebastian Cheesecake",
  "Kunafa Pistachio Milkshake",
  "Amora Signature Pasta",
];
