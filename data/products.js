const products = [
  // Home decor (4)
  { name: 'Aurora Wall Clock', category: 'Home decor', description: 'Minimal wall clock with silent sweep movement.', image: 'https://m.media-amazon.com/images/I/61Ki+XHkr0L.jpg', price: 29.99, countInStock: 20 },
  { name: 'Velvet Cushion Set', category: 'Home decor', description: 'Pair of plush velvet cushions.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7NEP7lLWpadNY3zCFyJeaZTbt9gXshuX1Q&s', price: 24.99, countInStock: 50 },
  { name: 'Nordic Table Lamp', category: 'Home decor', description: 'Soft-glow bedside lamp.', image: 'https://creative.lighting/cdn/shop/files/a4d9c466c8e586fe20dba1735e7639af.webp?v=1748310355&width=1445', price: 39.99, countInStock: 15 },
  { name: 'Geometric Rug', category: 'Home decor', description: 'Soft woven rug with geometric pattern.', image: 'https://imperialrooms.co.uk/cdn/shop/files/Navy_5b60ed30-5589-4e78-8d42-606d770b92d1.png?v=1703765724', price: 59.99, countInStock: 10 },

  // Showpiece (4)
  { name: 'Ceramic Crane Duo', category: 'Showpiece', description: 'Elegant white crane figurines.', image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/442804355/ZC/WI/VR/5700361/duo-swan-set-bcm3004-500x500.jpg', price: 22.00, countInStock: 30 },
  { name: 'Abstract Resin Wave', category: 'Showpiece', description: 'Handcrafted resin wave sculpture.', image: 'https://i.etsystatic.com/18589696/r/il/299529/4228721423/il_570xN.4228721423_1xaf.jpg', price: 35.00, countInStock: 12 },
  { name: 'Mini Terrarium Globe', category: 'Showpiece', description: 'Glass globe with preserved moss.', image: 'https://cdn.shopify.com/s/files/1/1552/7691/files/decorative-globe-terrarium-with-miniature.jpg?v=1738746121', price: 18.50, countInStock: 25 },
  { name: 'Bronze Leaf Tray', category: 'Showpiece', description: 'Decorative bronze-finish tray.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRYrJli_75TXL3WoCFmDAxPTQL-4jwMkopw&s', price: 27.00, countInStock: 22 },

  // Furniture (4)
  { name: 'Scandi Accent Chair', category: 'Furniture', description: 'Fabric lounge chair with oak legs.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL21gKM6H3YD2ESXZ0e3PiYG8YHVmjfkrfLQ&s', price: 149.99, countInStock: 8 },
  { name: 'Compact Coffee Table', category: 'Furniture', description: 'Two-tier modern coffee table.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp_5DXK6e0YdxDl4pwTw0wN27pluXN2xwrA&s', price: 89.99, countInStock: 14 },
  { name: 'Floating Shelves Set', category: 'Furniture', description: 'Set of three wall shelves.', image: 'https://m.media-amazon.com/images/I/61yBq-iGOVL._UF894,1000_QL80_.jpg', price: 44.99, countInStock: 18 },
  { name: 'Minimal Work Desk', category: 'Furniture', description: 'Sturdy desk for home office.', image: 'https://www.smmbdstore.com/wp-content/uploads/2024/11/Computer-Table-1544-4.jpg', price: 129.99, countInStock: 6 },

  // Paints (4)
  { name: 'Sky Blue Matte 1L', category: 'Paints', description: 'Low-VOC matte interior paint.', image: 'https://media.diy.com/is/image/KingfisherDigital/vintro-luxury-matt-emulsion-pale-blue-smooth-chalky-finish-multi-surface-paint-walls-ceilings-wood-metal-1l-aurora-~5060509624270_01c_MP?$MOB_PREV$&$width=284&$height=284', price: 16.99, countInStock: 40 },
  { name: 'Baby Pink Satin 1L', category: 'Paints', description: 'Smooth satin finish paint.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SCilpArQujGpGbherVO3CdHzBCYO1Rw4Pw&s', price: 17.99, countInStock: 35 },
  { name: 'Royal Purple Eggshell 1L', category: 'Paints', description: 'Elegant eggshell tone.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOTv5wPWf3f-YB1TRA27cUDqC-Ndt94oCsQ&s', price: 18.99, countInStock: 28 },
  { name: 'Sunshine Yellow Gloss 1L', category: 'Paints', description: 'Vibrant gloss finish.', image: 'https://images-eu.ssl-images-amazon.com/images/I/81dVsXyFU7L._AC_UL495_SR435,495_.jpg', price: 19.99, countInStock: 32 },
];

export default products;
