
export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  city: string;
  country: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
  };
  features: string[];
  amenities: string[];
  type: string;
  beds: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    description: "This stunning beachfront villa offers direct access to a pristine white sand beach. Enjoy beautiful sunsets from your private terrace. The villa features a spacious living area, fully equipped kitchen, and luxurious bedrooms with ensuite bathrooms. Perfect for a relaxing beach getaway.",
    location: "Malibu Beach",
    city: "Malibu",
    country: "United States",
    price: 350,
    rating: 4.97,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    host: {
      name: "Sarah",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isSuperhost: true
    },
    features: ["Ocean view", "Beachfront", "Private pool", "Hot tub"],
    amenities: ["WiFi", "Kitchen", "Free parking", "Washer", "Dryer", "Air conditioning", "TV", "Pool"],
    type: "Entire villa",
    beds: 4,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 8
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    description: "Experience urban living in this stylish downtown loft with floor-to-ceiling windows offering stunning city views. This modern space features contemporary furnishings, a gourmet kitchen, and is steps away from popular restaurants, shopping, and nightlife. Ideal for those looking to experience the heart of the city.",
    location: "Downtown",
    city: "New York",
    country: "United States",
    price: 180,
    rating: 4.85,
    reviews: 96,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
      "https://images.unsplash.com/photo-1545083036-61d8e8e101d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    host: {
      name: "Michael",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isSuperhost: false
    },
    features: ["City view", "High ceiling", "Workspace", "Gym access"],
    amenities: ["WiFi", "Kitchen", "TV", "Elevator", "Air conditioning", "Heating", "Washer", "Dryer"],
    type: "Entire loft",
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    description: "Escape to this charming cabin nestled in the mountains. Surrounded by towering pines, this rustic retreat offers a wood-burning fireplace, a fully stocked kitchen, and a wraparound deck with mountain views. Nearby hiking trails and ski slopes make this the perfect year-round getaway for nature lovers.",
    location: "Mountain View",
    city: "Aspen",
    country: "United States",
    price: 220,
    rating: 4.92,
    reviews: 157,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    host: {
      name: "Emily",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isSuperhost: true
    },
    features: ["Mountain view", "Fireplace", "Hot tub", "Fire pit"],
    amenities: ["WiFi", "Kitchen", "Free parking", "TV", "Air conditioning", "Heating", "BBQ grill", "Coffee maker"],
    type: "Entire cabin",
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 6
  },
  {
    id: 4,
    title: "Charming Countryside Cottage",
    description: "Step back in time in this beautifully restored 18th-century cottage. Featuring original oak beams, a thatched roof, and a lush garden, this idyllic retreat offers a peaceful countryside escape. Enjoy breakfast in the sunny garden room, explore nearby villages, or simply relax by the fireplace.",
    location: "Cotswolds",
    city: "Oxford",
    country: "United Kingdom",
    price: 175,
    rating: 4.96,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560185127-2d739ffe6ff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"
    ],
    host: {
      name: "James",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isSuperhost: true
    },
    features: ["Garden view", "Historic building", "Fireplace", "Private garden"],
    amenities: ["WiFi", "Kitchen", "Free parking", "TV", "Heating", "Washer", "Outdoor dining", "BBQ grill"],
    type: "Entire cottage",
    beds: 2,
    bedrooms: 2,
    bathrooms: 1.5,
    maxGuests: 4
  },
  {
    id: 5,
    title: "Luxury Penthouse with Skyline View",
    description: "Indulge in luxury living in this spectacular penthouse apartment featuring panoramic city views. This upscale accommodation offers modern design, high-end appliances, and a private rooftop terrace perfect for entertaining. Located in a premium neighborhood with access to exclusive amenities.",
    location: "Marina District",
    city: "San Francisco",
    country: "United States",
    price: 420,
    rating: 4.91,
    reviews: 78,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    host: {
      name: "David",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      isSuperhost: true
    },
    features: ["City view", "Rooftop terrace", "Concierge service", "Floor-to-ceiling windows"],
    amenities: ["WiFi", "Gourmet kitchen", "Free parking", "TV", "Air conditioning", "Heating", "Washer", "Dryer", "Gym", "Pool"],
    type: "Entire penthouse",
    beds: 2,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4
  },
  {
    id: 6,
    title: "Tropical Beachfront Bungalow",
    description: "Wake up to the sound of waves in this authentic thatched-roof bungalow just steps from crystal clear waters. This tropical paradise offers indoor-outdoor living with a private deck, hammock, and direct beach access. Perfect for snorkeling, sunbathing, and experiencing island life.",
    location: "North Shore",
    city: "Bali",
    country: "Indonesia",
    price: 135,
    rating: 4.89,
    reviews: 112,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    host: {
      name: "Maya",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isSuperhost: false
    },
    features: ["Ocean view", "Beachfront", "Outdoor shower", "Private deck"],
    amenities: ["WiFi", "Kitchenette", "Free parking", "Air conditioning", "Hammock", "Beach chairs", "Snorkeling gear", "Kayak"],
    type: "Entire bungalow",
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2
  }
];
