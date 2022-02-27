const list = [
  {
    id: 1,
    title: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 89,
    img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 2,
    title: "108 Panchatantra Stories",
    author: "by Maple Press  | 1 September 2020",
    price: 98,
    img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "Amazing Questions & Answers Science",
    author: "by Om Books Editorial Team  | 25 November 2018",
    price: 143,
    img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 57,
    img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 5,
    title: "My First 1000 Words",
    author: "by Wonder House Books  | 1 January 2018",
    price: 149,
    img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 6,
    title: "101 Panchatantra Stories for Children",
    author: "by Om Books Editorial Team | 30 September 2020",
    price: 135,
    img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 7,
    title: "Pre-School Activities Pack ",
    author: "by Om Books Editorial Team  | 1 January 2021",
    price: 693,
    img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 8,
    title: "Early Learning Library Pack 1",
    author: "by Wonder House Books  | 6 December 2020",
    price: 289,
    img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 9,
    title: "Blossom Moral Story Book for Kids ",
    author: "by Content Team at Target Publications",
    price: 80,
    img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 10,
    title: "Brain Activity Book for Kids",
    author: "by Maple Press | 1 September 2021",
    price: 86,
    img: "https://images-eu.ssl-images-amazon.com/images/I/61KdnDxurxL._SX198_BO1,204,203,200_QL40_ML2_.jpg",
   
  },
  {
    id: 11,
    title: "Willy the Silly Panda",
    author: "by Rebecca Smith  | 14 December 2021",
    price: 120,
    img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 12,
    title: "Grandma's Bag of Stories",
    author: "by Sudha Murty | 1 January 2015",
    price: 147,
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 13,
    title: "One Arranged Murder",
    author: "by Chetan Bhagat | 1 January 2020",
    price: 100,
    img: "http://chetanbhagat.com/wp-content/uploads/2020/08/One_Arranged_Murder.jpg"
  },
  {
    id: 14,
    title: "400 Days",
    author: "by Chetan Bhagat | 8 October 2021",
    price: 180,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633640897i/59237341._UY2339_SS2339_.jpg",
   
  },
  {
    id: 15,
    title: "It Started with the Friend Request",
    author: "by Sudeep Nagarkar | 17 July 2013",
    price: 108,
    img: "https://images-na.ssl-images-amazon.com/images/I/61qdVokMzFL.jpg",
   
  },
  {
    id: '16',
    title: "Few Things Left Unsaid",
    author: "by Sudeep Nagarkar | June 2011",
    price: 120,
    img:  'https://images-na.ssl-images-amazon.com/images/I/71XQBs+9pyL.jpg',
  },
  {
    id: '17',
    title: "The Power of your subconscious mind",
    author: "by Joseph Murphy | June 2011",
    price: 120,
    img:  'https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg',
  },
  {
    id: '18',
    title: "Revolution 2020",
    author: "by Chetan Bhagat | June 2011",
    price: 140,
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Revolution_2020.jpg/220px-Revolution_2020.jpg',
  },
  {
    id: 19,
    title: "The Girl in Room 105",
    author: "by Chetan Bhagat | 9 October 2018",
    price: 100,
    img: "https://qph.fs.quoracdn.net/main-qimg-84b6b0bb84f0a00e3eac01ce68a6bd1f-lq"
  },
  {
    id: 20,
    title: "Half Girlfriend",
    author: "by Chetan Bhagat | 1 October 2014",
    price: 190,
    img: "https://i0.wp.com/static.dnaindia.com/sites/default/files/2014/10/15/275430-half-girlfriend.jpg"
  },
 
  {
    id: 21,
    title: "Harry Potter",
    author: "by J. K. Rowling | 26 June 1997",
    price: 190,
    img: " https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg"
  },

];

export default list;
