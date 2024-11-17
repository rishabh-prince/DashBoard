import { createContext } from "react";


export const orders = [
  {
    order_id: 1,
    order_name: "Laptop Purchase",
    date: "2024-11-01",
    description:
      "A high-performance 14-inch laptop featuring a powerful 16GB RAM and a 512GB SSD, perfect for professionals and gaming enthusiasts.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 2,
    order_name: "Phone Case",
    date: "2024-11-02",
    description:
      "A durable, stylish silicone case designed to protect your iPhone 14 from scratches and drops while maintaining a sleek look.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 3,
    order_name: "Bluetooth Headphones",
    date: "2024-11-03",
    description:
      "Over-ear Bluetooth headphones with noise-canceling technology, offering superior sound quality and comfort for long listening sessions.",
    status: {
      completed: false,
      shipped: false,
      cancelled: false,
      pending: true,
    },
  },
  {
    order_id: 4,
    order_name: "Wireless Mouse",
    date: "2024-11-04",
    description:
      "Ergonomic wireless mouse with precision tracking and a comfortable design, perfect for extended use during work or gaming.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 5,
    order_name: "Smartwatch",
    date: "2024-11-05",
    description:
      "A fitness-oriented smartwatch with heart rate monitoring, sleep tracking, and customizable notifications to keep you on top of your health.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 6,
    order_name: "Monitor Stand",
    date: "2024-11-06",
    description:
      "Adjustable monitor stand designed to elevate your screen for a more comfortable viewing angle, reducing neck strain during long hours of work.",
    status: {
      completed: false,
      shipped: false,
      cancelled: true,
      pending: false,
    },
  },
  {
    order_id: 7,
    order_name: "4K TV",
    date: "2024-11-07",
    description:
      "A stunning 55-inch 4K LED TV with vibrant colors, ultra-sharp resolution, and smart features to elevate your viewing experience at home.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 8,
    order_name: "External Hard Drive",
    date: "2024-11-08",
    description:
      "Portable 1TB external hard drive for easy file backup and transfer, providing a reliable and fast storage solution for everyday use.",
    status: {
      completed: false,
      shipped: false,
      cancelled: false,
      pending: true,
    },
  },
  {
    order_id: 9,
    order_name: "Wireless Charger",
    date: "2024-11-09",
    description:
      "Fast wireless charger compatible with a wide range of smartphones, allowing for convenient charging without the hassle of cables.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 10,
    order_name: "Keyboard",
    date: "2024-11-10",
    description:
      "A mechanical RGB keyboard with customizable lighting effects and responsive switches, ideal for gaming or typing enthusiasts.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 11,
    order_name: "Laptop Backpack",
    date: "2024-11-11",
    description:
      "A durable, water-resistant backpack designed for 15-inch laptops, with multiple compartments for tech gear, books, and accessories.",
    status: {
      completed: false,
      shipped: false,
      cancelled: true,
      pending: false,
    },
  },
  {
    order_id: 12,
    order_name: "Smart Speaker",
    date: "2024-11-12",
    description:
      "Voice-controlled smart speaker with built-in assistant, capable of playing music, controlling smart home devices, and answering your questions.",
    status: {
      completed: false,
      shipped: false,
      cancelled: false,
      pending: true,
    },
  },
  {
    order_id: 13,
    order_name: "USB-C Cable",
    date: "2024-11-13",
    description:
      "A durable 3-meter USB-C cable for fast charging and data transfer, designed to work with a variety of devices like smartphones and laptops.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 14,
    order_name: "Coffee Maker",
    date: "2024-11-14",
    description:
      "An automatic drip coffee maker with programmable features and a large water reservoir, perfect for brewing fresh coffee every morning.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 15,
    order_name: "Action Camera",
    date: "2024-11-15",
    description:
      "A compact, waterproof action camera with 4K video resolution, ideal for capturing high-quality footage during outdoor adventures.",
    status: {
      completed: false,
      shipped: false,
      cancelled: false,
      pending: true,
    },
  },
  {
    order_id: 16,
    order_name: "Smart Thermostat",
    date: "2024-11-16",
    description:
      "Wi-Fi enabled smart thermostat that learns your preferences and helps manage home heating and cooling efficiently to save energy.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 17,
    order_name: "LED Desk Lamp",
    date: "2024-11-17",
    description:
      "A sleek LED desk lamp with touch-sensitive controls, offering adjustable brightness and color temperature for an optimal work environment.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 18,
    order_name: "Fitness Tracker",
    date: "2024-11-18",
    description:
      "Water-resistant fitness tracker with advanced health tracking features including sleep monitoring, heart rate tracking, and step counting.",
    status: {
      completed: false,
      shipped: false,
      cancelled: false,
      pending: true,
    },
  },
  {
    order_id: 19,
    order_name: "Electric Toothbrush",
    date: "2024-11-19",
    description:
      "A rechargeable electric toothbrush with multiple brushing modes, built-in timer, and pressure sensor for effective, gentle cleaning.",
    status: {
      completed: false,
      shipped: true,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 20,
    order_name: "Digital Camera",
    date: "2024-11-20",
    description:
      "Mirrorless digital camera with a 24MP sensor and interchangeable lenses, designed for high-quality photography in various environments.",
    status: {
      completed: true,
      shipped: false,
      cancelled: false,
      pending: false,
    },
  },
  {
    order_id: 21,
    order_name: "VR Headset",
    date: "2024-11-21",
    description:
      "Virtual reality headset offering immersive 360-degree gaming and entertainment experience with high-resolution visuals and spatial audio.",
    status: {
      completed: false,
      shipped: false,
      cancelled: true,
      pending: false,
    },
  },
];

export const OrderContext=createContext(orders);


