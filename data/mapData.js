const mapData = [
    {
      "house_id": "1",
      "latitude": 9.0248,
      "longitude": 38.7469,
      "address": "Sample Address 1, Addis Ababa",
      "img": "https://example.com/house_image1.jpg",
      "description": "Cozy apartment with stunning views",
      "price": 180000,
      "bedrooms": 2,
      "bathrooms": 1,
      "sqft": 1500
    },
    {
      "house_id": "2",
      "latitude": 9.0148,
      "longitude": 38.7545,
      "address": "Sample Address 2, Addis Ababa",
      "img": "https://example.com/house_image2.jpg",
      "description": "Spacious family home in a quiet neighborhood",
      "price": 320000,
      "bedrooms": 4,
      "bathrooms": 3,
      "sqft": 2800
    },
    {
      "house_id": "3",
      "latitude": 9.0443,
      "longitude": 38.7407,
      "address": "Sample Address 3, Addis Ababa",
      "img": "https://example.com/house_image3.jpg",
      "description": "Modern duplex with rooftop terrace",
      "price": 450000,
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 2000
    },
    {
      "house_id": "4",
      "latitude": 9.0230,
      "longitude": 38.7603,
      "address": "Sample Address 4, Addis Ababa",
      "img": "https://example.com/house_image4.jpg",
      "description": "Charming cottage surrounded by lush gardens",
      "price": 280000,
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 1800
    },
    {
      "house_id": "5",
      "latitude": 9.0364,
      "longitude": 38.7456,
      "address": "Sample Address 5, Addis Ababa",
      "img": "https://example.com/house_image5.jpg",
      "description": "Luxurious penthouse with panoramic city views",
      "price": 750000,
      "bedrooms": 5,
      "bathrooms": 4,
      "sqft": 4000
    },
    {
      "house_id": "6",
      "latitude": 9.0287,
      "longitude": 38.7652,
      "address": "Sample Address 6, Addis Ababa",
      "img": "https://example.com/house_image6.jpg",
      "description": "Elegant townhouse in a gated community",
      "price": 550000,
      "bedrooms": 4,
      "bathrooms": 3,
      "sqft": 3200
    },
    {
      "house_id": "7",
      "latitude": 9.0312,
      "longitude": 38.7558,
      "address": "Sample Address 7, Addis Ababa",
      "img": "https://example.com/house_image7.jpg",
      "description": "Contemporary loft with industrial-chic design",
      "price": 380000,
      "bedrooms": 2,
      "bathrooms": 2,
      "sqft": 1800
    },
    {
      "house_id": "8",
      "latitude": 9.0401,
      "longitude": 38.7511,
      "address": "Sample Address 8, Addis Ababa",
      "img": "https://example.com/house_image8.jpg",
      "description": "Rustic farmhouse with countryside views",
      "price": 420000,
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 2200
    },
    {
      "house_id": "9",
      "latitude": 9.0169,
      "longitude": 38.7426,
      "address": "Sample Address 9, Addis Ababa",
      "img": "https://example.com/house_image9.jpg",
      "description": "Quaint bungalow with a private garden",
      "price": 320000,
      "bedrooms": 2,
      "bathrooms": 1,
      "sqft": 1600
    },
    {
      "house_id": "10",
      "latitude": 9.0485,
      "longitude": 38.7549,
      "address": "Sample Address 10, Addis Ababa",
      "img": "https://example.com/house_image10.jpg",
      "description": "Sleek modernist villa with infinity pool",
      "price": 980000,
      "bedrooms": 6,
      "bathrooms": 5,
      "sqft": 5000
    }
  ]

const categMapData = [
    {
      "type": "5",
      "data": [
        {
          "house_id": "1",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "2",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "3",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "4",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "5",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "6",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "7",
          "latitude": 9.0485,
          "longitude": 38.7549,
          "address": "Sample Address 10, Addis Ababa",
          "img": "https://example.com/house_image10.jpg",
          "description": "Sleek modernist villa with infinity pool",
          "price": 980000,
          "bedrooms": 6,
          "bathrooms": 5,
          "sqft": 5000
        }
      ]
    },
    {
      "type": "10",
      
      "data": [
        {
          "house_id": "1",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "2",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "3",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "4",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "5",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "6",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "house_id": "7",
          "latitude": 9.0485,
          "longitude": 38.7549,
          "address": "Sample Address 10, Addis Ababa",
          "img": "https://example.com/house_image10.jpg",
          "description": "Sleek modernist villa with infinity pool",
          "price": 980000,
          "bedrooms": 6,
          "bathrooms": 5,
          "sqft": 5000
        }
      ]
    }
]

export {mapData, categMapData}
  