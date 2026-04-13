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

export const DISCOUNT_PERCENTAGE = 35;
export const CURRENCY = "AED";

export const menuCategories: MenuCategory[] = [
  {
    category: "Coffee & Hot Drinks",
    icon: "☕",
    items: [
      { name: "Flat White", original_price: 26, image_url: "" },
      { name: "Americano", original_price: 20, image_url: "" },
      { name: "Espresso", original_price: 18, image_url: "" },
      { name: "Hot Chocolate", original_price: 35, image_url: "" },
      { name: "Rose Latte", original_price: 30, image_url: "" },
      { name: "Cappuccino", original_price: 25, image_url: "" },
      { name: "Piccolo", original_price: 23, image_url: "" },
      { name: "Cortado", original_price: 24, image_url: "" },
      { name: "Matcha Latte", original_price: 26, image_url: "" },
      { name: "Spanish Latte", original_price: 28, image_url: "" },
      { name: "Caffè Latte", original_price: 25, image_url: "" },
      { name: "Saffron Latte", original_price: 30, image_url: "" },
      { name: "Pistachio Latte", original_price: 30, image_url: "" },
      { name: "Spanish Cortado", original_price: 26, image_url: "" },
      { name: "Affogato", original_price: 26, image_url: "" },
    ],
  },
  {
    category: "Tea",
    icon: "🍵",
    items: [
      { name: "Green Tea", original_price: 18, image_url: "" },
      { name: "English Breakfast", original_price: 18, image_url: "" },
      { name: "Ceylon Earl Grey", original_price: 18, image_url: "" },
    ],
  },
  {
    category: "Iced Drinks",
    icon: "🧊",
    items: [
      { name: "Iced Rose Latte", original_price: 30, image_url: "" },
      { name: "Iced Saffron Latte", original_price: 30, image_url: "" },
      { name: "Kunafa Pistachio Milkshake", original_price: 35, image_url: "" },
      { name: "Mango Matcha", original_price: 30, image_url: "" },
      { name: "Lychee Matcha", original_price: 30, image_url: "" },
      { name: "Coconut Mango Shake", original_price: 32, image_url: "" },
      { name: "Iced Chocolate", original_price: 35, image_url: "" },
      { name: "Strawberry Mojito", original_price: 28, image_url: "" },
      { name: "Orange Juice", original_price: 25, image_url: "" },
      { name: "Blue Lagoon Mojito", original_price: 28, image_url: "" },
      { name: "Amora Signature Drink", original_price: 35, image_url: "" },
      { name: "Acai Smoothie", original_price: 35, image_url: "" },
      { name: "Passion Fruit Mojito", original_price: 28, image_url: "" },
      { name: "Hibiscus", original_price: 30, image_url: "" },
      { name: "Red Rush", original_price: 35, image_url: "" },
      { name: "Green Delight", original_price: 28, image_url: "" },
      { name: "Mango Dragon Fruit", original_price: 30, image_url: "" },
      { name: "Peach Ice Tea", original_price: 30, image_url: "" },
      { name: "Pistachio Milkshake", original_price: 35, image_url: "" },
    ],
  },
  {
    category: "Sweets",
    icon: "🍰",
    items: [
      { name: "Kinder Cookie", original_price: 12, image_url: "" },
      { name: "Acai Bowl", original_price: 45, image_url: "" },
      { name: "Carrot Cake", original_price: 27, image_url: "" },
      { name: "Chocolate Chip Cookie", original_price: 10, image_url: "" },
      { name: "Mango Cake", original_price: 30, image_url: "" },
      { name: "Strawberry Cake", original_price: 30, image_url: "" },
      { name: "Nutella Cake", original_price: 30, image_url: "" },
      { name: "Sebastian Cheesecake", original_price: 35, image_url: "" },
      { name: "Tiramisu", original_price: 35, image_url: "" },
      { name: "Drowning Chocolate Chip Cookies", original_price: 25, image_url: "" },
      { name: "Drowning Kinder Cookies", original_price: 27, image_url: "" },
      { name: "Vanilla Iced Muffin", original_price: 12, image_url: "" },
      { name: "Chocolate Muffin", original_price: 15, image_url: "" },
      { name: "Blueberry Muffin", original_price: 15, image_url: "" },
    ],
  },
  {
    category: "Pastry",
    icon: "🥐",
    items: [
      { name: "Plain Croissant", original_price: 15, image_url: "" },
      { name: "Pistachio Croissant", original_price: 20, image_url: "" },
      { name: "Nutella Croissant", original_price: 20, image_url: "" },
      { name: "Halloumi Croissant", original_price: 23, image_url: "" },
      { name: "Egg & Cheese Croissant", original_price: 20, image_url: "" },
    ],
  },
  {
    category: "Pasta",
    icon: "🍝",
    items: [
      { name: "Amora Signature Pasta", original_price: 42, image_url: "" },
      { name: "Arrabbiata Pasta", original_price: 40, image_url: "" },
      { name: "Fusilli Pasta", original_price: 41, image_url: "" },
    ],
  },
  {
    category: "Salad",
    icon: "🥗",
    items: [
      { name: "Beetroot Salad", original_price: 30, image_url: "" },
      { name: "Caesar Salad", original_price: 32, image_url: "" },
      { name: "Amora Signature Salad", original_price: 36, image_url: "" },
    ],
  },
  {
    category: "Pizza & Burgers",
    icon: "🍕",
    items: [
      { name: "Margherita Pizza", original_price: 38, image_url: "" },
      { name: "Beef Burger", original_price: 35, image_url: "" },
      { name: "Chicken Ranch Pizza", original_price: 55, image_url: "" },
      { name: "Pepperoni Pizza", original_price: 45, image_url: "" },
      { name: "Vegetarian Pizza", original_price: 35, image_url: "" },
      { name: "Chicken Burger", original_price: 24, image_url: "" },
      { name: "Chicken Wraps with Salad", original_price: 24, image_url: "" },
    ],
  },
  {
    category: "Breakfast",
    icon: "🍳",
    items: [
      { name: "Royal Eggs Benedict", original_price: 35, image_url: "" },
      { name: "Classic Eggs Benedict", original_price: 28, image_url: "" },
      { name: "Egg Muffin", original_price: 22, image_url: "" },
      { name: "Potato Cheese Balls", original_price: 16, image_url: "" },
      { name: "Chicken Croquettes", original_price: 25, image_url: "" },
      { name: "French Fries", original_price: 10, image_url: "" },
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
