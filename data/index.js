import image from "../constants/image";


// const houseData = [
//     {
//       "image": image.detailimg,
//       "house_id": "1",
//       "latitude": 9.0248,
//       "longitude": 38.7469,
//       "address": "Sample Address 1, Addis Ababa",
//       "img": "https://example.com/house_image1.jpg",
//       "description": "Cozy apartment with stunning views",
//       "price": 180000,
//       "bedrooms": 2,
//       "bathrooms": 1,
//       "sqft": 1500
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "2",
//       "latitude": 9.0148,
//       "longitude": 38.7545,
//       "address": "Sample Address 2, Addis Ababa",
//       "img": "https://example.com/house_image2.jpg",
//       "description": "Spacious family home in a quiet neighborhood",
//       "price": 320000,
//       "bedrooms": 4,
//       "bathrooms": 3,
//       "sqft": 2800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "3",
//       "latitude": 9.0443,
//       "longitude": 38.7407,
//       "address": "Sample Address 3, Addis Ababa",
//       "img": "https://example.com/house_image3.jpg",
//       "description": "Modern duplex with rooftop terrace",
//       "price": 450000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 2000
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "4",
//       "latitude": 9.0230,
//       "longitude": 38.7603,
//       "address": "Sample Address 4, Addis Ababa",
//       "img": "https://example.com/house_image4.jpg",
//       "description": "Charming cottage surrounded by lush gardens",
//       "price": 280000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 1800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "5",
//       "latitude": 9.0364,
//       "longitude": 38.7456,
//       "address": "Sample Address 5, Addis Ababa",
//       "img": "https://example.com/house_image5.jpg",
//       "description": "Luxurious penthouse with panoramic city views",
//       "price": 750000,
//       "bedrooms": 5,
//       "bathrooms": 4,
//       "sqft": 4000
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "6",
//       "latitude": 9.0287,
//       "longitude": 38.7652,
//       "address": "Sample Address 6, Addis Ababa",
//       "img": "https://example.com/house_image6.jpg",
//       "description": "Elegant townhouse in a gated community",
//       "price": 550000,
//       "bedrooms": 4,
//       "bathrooms": 3,
//       "sqft": 3200
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "7",
//       "latitude": 9.0312,
//       "longitude": 38.7558,
//       "address": "Sample Address 7, Addis Ababa",
//       "img": "https://example.com/house_image7.jpg",
//       "description": "Contemporary loft with industrial-chic design",
//       "price": 380000,
//       "bedrooms": 2,
//       "bathrooms": 2,
//       "sqft": 1800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "8",
//       "latitude": 9.0401,
//       "longitude": 38.7511,
//       "address": "Sample Address 8, Addis Ababa",
//       "img": "https://example.com/house_image8.jpg",
//       "description": "Rustic farmhouse with countryside views",
//       "price": 420000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 2200
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "9",
//       "latitude": 9.0169,
//       "longitude": 38.7426,
//       "address": "Sample Address 9, Addis Ababa",
//       "img": "https://example.com/house_image9.jpg",
//       "description": "Quaint bungalow with a private garden",
//       "price": 320000,
//       "bedrooms": 2,
//       "bathrooms": 1,
//       "sqft": 1600
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "10",
//       "latitude": 9.0485,
//       "longitude": 38.7549,
//       "address": "Sample Address 10, Addis Ababa",
//       "img": "https://example.com/house_image10.jpg",
//       "description": "Sleek modernist villa with infinity pool",
//       "price": 980000,
//       "bedrooms": 6,
//       "bathrooms": 5,
//       "sqft": 5000
//     }
//   ]

const houseData = [{
    "houseId": "001",
    "image": image.detailimg,
    "address": "123 Main St, City, Country",
    "price": 250000,
    "propertyType": "townhouse",
    "bedrooms": 3,
    "bathrooms": 2,
    "lotSize": 6000,
    "houseSize": 1800,
    "pets": "dogs",
    "houseAge": 19,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "123 Main St, City, Country"
    },
    "description": "Beautiful townhouse with modern amenities",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-01", "2024-05-08", "2024-05-15"],
    "offMarket": false,
    "listedDate": "2024-04-18",
    "listedBy": {
      "photoUrl": "https://example.com/photo1.jpg",
      "name": "John Doe",
      "verified": true,
      "phone": "+1234567890"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "002",
    "image": image.detailimg,
    "address": "456 Elm St, City, Country",
    "price": 1800,
    "propertyType": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "lotSize": 4000,
    "houseSize": 1200,
    "pets": "none",
    "houseAge": 26,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "456 Elm St, City, Country"
    },
    "description": "Cozy apartment in a convenient location",
    "features": {
      "parking": true,
      "pool": true,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-04-30", "2024-05-07", "2024-05-14"],
    "offMarket": false,
    "listedDate": "2024-04-17",
    "listedBy": {
      "photoUrl": "https://example.com/photo2.jpg",
      "name": "Jane Smith",
      "verified": true,
      "phone": "+1098765432"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "003",
    "image": image.detailimg,
    "address": "789 Oak St, City, Country",
    "price": 300000,
    "propertyType": "condominium",
    "bedrooms": 2,
    "bathrooms": 2.5,
    "lotSize": 3500,
    "houseSize": 1600,
    "pets": "cats",
    "houseAge": 8,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "789 Oak St, City, Country"
    },
    "description": "Modern condominium with stunning views",
    "features": {
      "parking": true,
      "pool": true,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-03", "2024-05-10", "2024-05-17"],
    "offMarket": false,
    "listedDate": "2024-04-19",
    "listedBy": {
      "photoUrl": "https://example.com/photo3.jpg",
      "name": "Emily Brown",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "004",
    "image": image.detailimg,
    "address": "321 Pine St, City, Country",
    "price": 500000,
    "propertyType": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "lotSize": 8000,
    "houseSize": 2400,
    "pets": "none",
    "houseAge": 15,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "321 Pine St, City, Country"
    },
    "description": "Spacious family home in a quiet neighborhood",
    "features": {
      "parking": true,
      "pool": true,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-05", "2024-05-12", "2024-05-19"],
    "offMarket": false,
    "listedDate": "2024-04-20",
    "listedBy": {
      "photoUrl": "https://example.com/photo4.jpg",
      "name": "Michael Johnson",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "005",
    "image": image.detailimg,
    "address": "246 Maple St, City, Country",
    "price": 180000,
    "propertyType": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "lotSize": 2000,
    "houseSize": 900,
    "pets": "cats",
    "houseAge": 10,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "246 Maple St, City, Country"
    },
    "description": "Cozy apartment with great amenities",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-02", "2024-05-09", "2024-05-16"],
    "offMarket": false,
    "listedDate": "2024-04-21",
    "listedBy": {
      "photoUrl": "https://example.com/photo5.jpg",
      "name": "Sophia Lee",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "006",
    "image": image.detailimg,
    "address": "789 Cedar St, City, Country",
    "price": 400000,
    "propertyType": "townhouse",
    "bedrooms": 3,
    "bathrooms": 2.5,
    "lotSize": 4500,
    "houseSize": 2000,
    "pets": "dogs",
    "houseAge": 12,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "789 Cedar St, City, Country"
    },
    "description": "Spacious townhouse with great views",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-04", "2024-05-11", "2024-05-18"],
    "offMarket": false,
    "listedDate": "2024-04-22",
    "listedBy": {
      "photoUrl": "https://example.com/photo6.jpg",
      "name": "David Wilson",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "007",
    "image": image.detailimg,
    "address": "1010 Walnut St, City, Country",
    "price": 600000,
    "propertyType": "house",
    "bedrooms": 5,
    "bathrooms": 3.5,
    "lotSize": 10000,
    "houseSize": 3000,
    "pets": "none",
    "houseAge": 5,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "1010 Walnut St, City, Country"
    },
    "description": "Luxurious family home with spacious backyard",
    "features": {
      "parking": true,
      "pool": true,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-06", "2024-05-13", "2024-05-20"],
    "offMarket": false,
    "listedDate": "2024-04-23",
    "listedBy": {
      "photoUrl": "https://example.com/photo7.jpg",
      "name": "Emma Johnson",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "008",
    "image": image.detailimg,
    "address": "1313 Oak St, City, Country",
    "price": 350000,
    "propertyType": "condominium",
    "bedrooms": 2,
    "bathrooms": 2,
    "lotSize": 2500,
    "houseSize": 1400,
    "pets": "none",
    "houseAge": 7,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "1313 Oak St, City, Country"
    },
    "description": "Charming condominium in a desirable location",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-08", "2024-05-15", "2024-05-22"],
    "offMarket": false,
    "listedDate": "2024-04-24",
    "listedBy": {
      "photoUrl": "https://example.com/photo8.jpg",
      "name": "Olivia Brown",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "009",
    "image": image.detailimg,
    "address": "1717 Maple St, City, Country",
    "price": 200000,
    "propertyType": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "lotSize": 1500,
    "houseSize": 800,
    "pets": "none",
    "houseAge": 3,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "1717 Maple St, City, Country"
    },
    "description": "Modern apartment with balcony",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-09", "2024-05-16", "2024-05-23"],
    "offMarket": false,
    "listedDate": "2024-04-25",
    "listedBy": {
      "photoUrl": "https://example.com/photo9.jpg",
      "name": "William Wilson",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "houseId": "010",
    "image": image.detailimg,
    "address": "2121 Cedar St, City, Country",
    "price": 450000,
    "propertyType": "house",
    "bedrooms": 4,
    "bathrooms": 2.5,
    "lotSize": 6000,
    "houseSize": 2200,
    "pets": "cats",
    "houseAge": 20,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "2121 Cedar St, City, Country"
    },
    "description": "Classic family home with large backyard",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-10", "2024-05-17", "2024-05-24"],
    "offMarket": false,
    "listedDate": "2024-04-26",
    "listedBy": {
      "photoUrl": "https://example.com/photo10.jpg",
      "name": "Ethan Lee",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  }
]


const categMapData = [{
    "type": "5",
    "data": [{
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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

    "data": [{
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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
        "image": image.detailimg,
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

const roomData = [{
    image: image.detailimg,
    title: "Bedroom",
    index: 1,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 2,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 3,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 4,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 5,
  },
];

const rooms = [{
  "house_id": 1,
  "room_id": 1
}]

const mapData = [
  {
    "Akaki kality ":
    {
      "Ethio Korea School": [8.907175323036451, 38.755183395333226],
      "Gelan secondary school": [8.870892080453872, 38.76984334572811],
      "Tulu Dimtu square": [8.87554008411877, 38.819848293008825],
      "Nega Bonger Hotel": [8.954156050151342, 38.761235748187104],
      "Koye Feche Square": [8.902138520810727, 38.81529292850113],
    }
  },

  {
    "Addis Ketema":
     {
      "GIRUM HOSPITAL": [9.047060499355457, 38.72003472327677],
      "Abebe Bikila Stadium": [9.044186985820847, 38.72430362091417],
      "Radical School | Amanuel": [9.022793484201715, 38.720610049782906],
      "Merab Hotel | Merkato": [9.030070489413037, 38.737398861888956],
      "Pastor Square": [9.046594674143478, 38.7319114931008],
    }
  },

  {
    "Arada":
    {
      "Emperor Tewodros II Square": [9.027276574199929, 38.75166259186012],
      "Unity Park Zoo": [9.025158082374967, 38.76219018870801],
      "Embassy of India": [9.030832313496683, 38.77564050673658],
      "6 Kilo Yekatit 12 Square": [9.04430774961368, 38.76111440841991],
      "Enkulal Fabrica Square": [9.04908223967625, 38.73783566177834],
      "Gojam berenda": [9.036066535011091, 38.7401876898899],
    }
  },

  {
    "Bole":
    {
      "GAST Entertainment": [9.021952180542858, 38.841917110373444],
      "Century Mall Gurd Shola": [9.020678761686622, 38.814229899260276],
      "Bole Bulbula": [8.951373125054168, 38.77410268269601],
      "Capital Hotel and Spa": [9.013741321027004, 38.779971525354895],
      "Ayat Square": [9.02157294762088, 38.875846582604964],
      "Summit Cherkos Condominium": [8.99489583542933, 38.86079269323679],
    }
  },

  {
    "Gullele":
    {
      "St.Paulos Hospital": [9.048047041983217, 38.72772738894602],
      "Wingate Square": [9.057124668699267, 38.71348050152937],
      "EBC | Shegole": [9.06598890089599, 38.71416406430201],
      "Entoto Park Dilber (Addisu Gebeya Ber)": [9.075270955885628, 38.74395069606441],
      "AAU Registrar Office": [9.044645910686853, 38.75805602933758],
      "እማማ ፊሽካ ምግብ ቤት": [9.053674154674631, 38.7435635561261],
    }
  },

  {
    "Kirkos": 
    {
      "Gotera Square": [8.981182454320995, 38.75970480473864],
      "Beg Tera | Kera": [8.98773080515628, 38.74554023631052],
      "Pushkin Square | Sarbet": [8.994624327199896, 38.738623382245414],
      "Mexico Roundabout": [9.010615660942165, 38.7445134258537],
      "Ethiopian National Theatre": [9.016118248525292, 38.75236931277079],
      "Ethiopian Science Museum": [9.021650509247538, 38.76242271136863],
      "Gorgorios adebabay": [8.983768663058251, 38.765809460115285],
    }
  },

  {
    "Kolfe keranio":
    {
      "Dangote Cement Ethiopia - Furi Depo": [8.950821702978846, 38.672417131429626],
      "Embassy of the Netherlands": [9.019687280174459, 38.71562248865414],
      "Koshe": [8.976395637770432, 38.71228588009704],
    }
  },

  {
    "Lideta":
    {
      "Addis Ababa Golf Club": [9.00104198217982, 38.72434036241804],
      "Armed Forces Hospital": [9.012549751850218, 38.72441273162146],
      "Abinet square": [9.020554940653476, 38.73328519044071],
    }
  },
  {
    "Nifas silk lafto":
      {
      "Embassy of the Republic of Korea": [8.994713179355053, 38.72152433716736],
      "Embassy of Canada": [8.995426112733622, 38.73586800600609],
      "Total Haile Garment": [8.92187690502329, 38.726373422766926],
    }
  },
  {
    "Yeka":
     {
      "Intoto": [9.070676769695527, 38.773761760563445],
      "ፈረንሳይ ለጋሲዮን": [9.0599695874334, 38.798242364185086],
      "Ayat Tafo condominium square": [9.04591705882844, 38.87459117780343],
      "School Of Tomorrow": [9.021531251669668, 38.85710255628963],
      "Top Ten hotel": [9.019482790401678, 38.82182106130031],
      "Zefmesh Grand Mall": [9.020690238661283, 38.8003190809531],
      "Megenagna": [9.018390230270485, 38.795978642355294],
      "Menelik II Referal Hospital": [9.038567191428228, 38.77432940326189],
      "Embassy of France": [9.0542659679942, 38.770841903984135],
    }
  }
]

export {
  houseData,
  categMapData,
  roomData,
  mapData
}