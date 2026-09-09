import baked_tiropati from "../Images/baked_tiropati.png";
import cheese_fitters from "../Images/cheese_fitters.png";
const restaurantData = {
  meta: {
    name: "The House of Dramz", //[cite: 3]
    description: "Global & Indian Cuisine",
    location: {
      address: "1580/1, KD Marg, Near Qutub Minar", //[cite: 3]
      city: "Mehrauli, New Delhi", //[cite: 3]
      state: "Delhi",
    },
    
  },
  offers: [
    {
      id: "offer-1",
      name: "15% Off on Indian Main Course",
      duration: "Valid Weekdays",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "offer-2",
      name: "Complimentary Starter with Pizza",
      duration: "Weekend Special",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
    },
  ],
  categories: [
    { 
      id: "bestsellers", 
      name: "BEST SELLERS", //[cite: 3]
      image: baked_tiropati
    }, 
    { 
      id: "salads", 
      name: "SALADS", //[cite: 3]
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" 
    }, 
    { 
      id: "indian-appetizers", 
      name: "INDIAN APPETIZERS", //[cite: 3]
      image: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=400" 
    }, 
    { 
      id: "pizza-pasta", 
      name: "PIZZA & PASTA", //[cite: 3]
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" 
    }, 
    { 
      id: "global-asian-appetizers", 
      name: "GLOBAL & ASIAN", //[cite: 3]
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400" 
    }, 
    { 
      id: "indian-main-course", 
      name: "INDIAN MAIN COURSE", //[cite: 3]
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" 
    }, 
    { 
      id: "rice-biryani", 
      name: "RICE & BIRYANI", //[cite: 3]
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" 
    }, 
    { 
      id: "indian-breads", 
      name: "INDIAN BREADS", //[cite: 3]
      image: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3.jpg?w=400" 
    } 
  ],
  dishes: [
    // --- SALADS ---
    {
      id: "caesar-salad",
      name: "Caesar Salad",
      category: "salads",
      price: 350, 
      description: "Classic Caesar salad with crisp greens and creamy dressing.",
      nutrition: { protein: 8, carbs: 12, fat: 22 },
      tasteProfile: { comparisonText: "Crisp and creamy with a savory parmesan punch.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "1 portion",
      bestseller: false, 
      veg: true,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600",
      
    },
    {
      id: "avocado-truffle-bite",
      name: "Avocado Truffle Bite", //[cite: 3]
      category: "salads",
      price: 350, //[cite: 3]
      description: "Velvety avocado blended with truffle essence on a delicate crunch base", //[cite: 3]
      nutrition: { protein: 4, carbs: 15, fat: 18 },
      tasteProfile: { comparisonText: "Earthy truffle notes over creamy avocado.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Creamy", "Crunchy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600"
    },
    {
      id: "greek-salad",
      name: "Greek Salad [600 ml]", //[cite: 3]
      category: "salads",
      price: 300, //[cite: 3]
      description: "Fresh lettuce, diced cucumber, green, red, and yellow peppers, topped with feta cheese", //[cite: 3]
      nutrition: { protein: 6, carbs: 14, fat: 16 },
      tasteProfile: { comparisonText: "Bright, tangy, and refreshing.", spiceLevel: 1, flavors: { spicy: 1, sweet: 2, sour: 4, savory: 4 }, textureTags: ["Crunchy", "Juicy"] },
      quantity: "600 ml", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600"
    },
    {
      id: "garden-salad",
      name: "Garden Salad", //[cite: 3]
      category: "salads",
      price: 300, //[cite: 3]
      description: "Fresh crisp seasonal greens with light house dressing", //[cite: 3]
      nutrition: { protein: 2, carbs: 10, fat: 8 },
      tasteProfile: { comparisonText: "Light and crisp botanical flavors.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 3, savory: 2 }, textureTags: ["Crispy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },
    {
      id: "micro-garden-green-smoked-cheddar",
      name: "Fresh Micro Garden Green Smoked Cheddar Salad", //[cite: 3]
      category: "salads",
      price: 300, //[cite: 3]
      description: "Gourmet microgreens served with fine smoked cheddar shreds", //[cite: 3]
      nutrition: { protein: 8, carbs: 6, fat: 12 },
      tasteProfile: { comparisonText: "Smoky, rich cheddar cuts through fresh microgreens.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Crispy", "Soft"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?w=600"
    },

    // --- INDIAN APPETIZERS (STARTERS) ---
    {
      id: "indian-pesto-paneer-tikka",
      name: "Indian Pesto Paneer Tikka", //[cite: 3]
      category: "indian-appetizers",
      price: 325, //[cite: 3]
      description: "Authentic cubes of paneer tikka freshly made in the traditional tandoor with a pesto twist", //[cite: 3]
      nutrition: { protein: 16, carbs: 8, fat: 22 },
      tasteProfile: { comparisonText: "Smoky tandoor char meets fresh basil pesto.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Soft", "Chewy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "dahi-ke-kebab",
      name: "Dahi Ke Kebab [6 Pieces]", //[cite: 3]
      category: "indian-appetizers",
      price: 350, //[cite: 3]
      description: "Creamy, melt-in-your-mouth Indian starters made with seasoned hung yogurt", //[cite: 3]
      nutrition: { protein: 12, carbs: 18, fat: 15 },
      tasteProfile: { comparisonText: "Crisp outside, tang and velvet inside.", spiceLevel: 2, flavors: { spicy: 2, sweet: 2, sour: 4, savory: 4 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },
    {
      id: "soya-kebab",
      name: "Soya Kebab", //[cite: 3]
      category: "indian-appetizers",
      price: 350, //[cite: 3]
      description: "Char-grilled soya kebabs infused with aromatic spices crisp outside and tender inside", //[cite: 3]
      nutrition: { protein: 24, carbs: 12, fat: 10 },
      tasteProfile: { comparisonText: "Meaty texture with heavy smoky spices.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Chewy", "Crispy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "tandoori-broccoli",
      name: "Tandoori Broccoli [6 Pieces]", //[cite: 3]
      category: "indian-appetizers",
      price: 375, //[cite: 3]
      description: "Broccoli florets marinated in a spiced yogurt-based mixture and grilled", //[cite: 3]
      nutrition: { protein: 6, carbs: 10, fat: 8 },
      tasteProfile: { comparisonText: "Earthy, charred broccoli with a spiced yogurt tang.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 3, savory: 4 }, textureTags: ["Crunchy", "Soft"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600"
    },
    {
      id: "mushroom-kebab",
      name: "Mushroom Kebab", //[cite: 3]
      category: "indian-appetizers",
      price: 350, //[cite: 3]
      description: "Tandoori mushrooms filled with a spicy and cheesy filling, charred over direct heat", //[cite: 3]
      nutrition: { protein: 8, carbs: 12, fat: 16 },
      tasteProfile: { comparisonText: "Juicy mushrooms bursting with molten cheese.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Juicy", "Creamy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "chicken-satay",
      name: "Chicken Satay", //[cite: 3]
      category: "indian-appetizers",
      price: 525, //[cite: 3]
      description: "Skewered flame-grilled chicken chunks served with a nutty dip", //[cite: 3]
      nutrition: { protein: 28, carbs: 8, fat: 14 },
      tasteProfile: { comparisonText: "Grilled chicken with a rich, sweet peanut sauce.", spiceLevel: 2, flavors: { spicy: 2, sweet: 4, sour: 1, savory: 4 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1555196301-8acc02eb74f3?w=600"
    },
    {
      id: "chicken-tikka",
      name: "Chicken Tikka [6 Pieces]", //[cite: 3]
      category: "indian-appetizers",
      price: 475, //[cite: 3]
      description: "Boneless chicken pieces marinated in yogurt and spices, grilled to perfection", //[cite: 3]
      nutrition: { protein: 32, carbs: 4, fat: 12 },
      tasteProfile: { comparisonText: "Classic smoky, tangy, and spicy tandoori flavor.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 3, savory: 5 }, textureTags: ["Juicy", "Chewy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "chicken-seekh-kebab",
      name: "Chicken Seekh Kebab [6 Pieces]", //[cite: 3]
      category: "indian-appetizers",
      price: 475, //[cite: 3]
      description: "Juicy, tender chicken skewers infused with smoky barbecue flavors", //[cite: 3]
      nutrition: { protein: 28, carbs: 6, fat: 16 },
      tasteProfile: { comparisonText: "Spiced minced meat with deep charcoal notes.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Soft", "Juicy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "mutton-seekh-kebab",
      name: "Mutton Seekh Kebab", //[cite: 3]
      category: "indian-appetizers",
      price: 550, //[cite: 3]
      description: "Skewered minced premium meat infused with a distinct smoky Indian barbecue flavor", //[cite: 3]
      nutrition: { protein: 30, carbs: 4, fat: 22 },
      tasteProfile: { comparisonText: "Rich, fatty, and robustly spiced lamb.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Soft", "Juicy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1599487405270-2012c6c39f04?w=600"
    },
    {
      id: "oven-roasted-prawns",
      name: "Oven Roasted Prawns", //[cite: 3]
      category: "indian-appetizers",
      price: 625, //[cite: 3]
      description: "Succulent prawns marinated with garlic and fresh herbs, roasted over open fire", //[cite: 3]
      nutrition: { protein: 24, carbs: 2, fat: 8 },
      tasteProfile: { comparisonText: "Sweet oceanic prawns with pungent garlic.", spiceLevel: 2, flavors: { spicy: 2, sweet: 3, sour: 2, savory: 4 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=600"
    },
    {
      id: "grilled-fish",
      name: "Grilled Fish", //[cite: 3]
      category: "indian-appetizers",
      price: 525, //[cite: 3]
      description: "Delicate fish fillets marinated with continental fresh spices and pan-seared", //[cite: 3]
      nutrition: { protein: 26, carbs: 2, fat: 10 },
      tasteProfile: { comparisonText: "Light, flaky fish with aromatic herbs.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 3, savory: 4 }, textureTags: ["Soft", "Flaky"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600"
    },

    // --- PIZZA & PASTA ---
    {
      id: "authentic-margherita-pizza",
      name: "Authentic Margherita Pizza [9 Inches]", //[cite: 3]
      category: "pizza-pasta",
      price: 325, //[cite: 3]
      description: "Simple classic featuring fresh basil, rich tomato pomodoro, and mozzarella cheese", //[cite: 3]
      nutrition: { protein: 14, carbs: 35, fat: 12 },
      tasteProfile: { comparisonText: "Classic basil, tomato, and cheese harmony.", spiceLevel: 1, flavors: { spicy: 1, sweet: 2, sour: 3, savory: 4 }, textureTags: ["Chewy", "Crispy"] },
      quantity: "9 inches", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600"
    },
    {
      id: "gourmet-pizza",
      name: "Gourmet Pizza [9 Inches]", //[cite: 3]
      category: "pizza-pasta",
      price: 425, //[cite: 3]
      description: "Loaded with fresh mushrooms, jalapeños, olives, onions, and stringy mozzarella", //[cite: 3]
      nutrition: { protein: 16, carbs: 38, fat: 14 },
      tasteProfile: { comparisonText: "Hearty vegetable mix with a jalapeño kick.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Chewy", "Crunchy"] },
      quantity: "9 inches", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
    },
    {
      id: "tandoori-pizza",
      name: "Tandoori Pizza [9 Inches]", //[cite: 3]
      category: "pizza-pasta",
      price: 525, //[cite: 3]
      description: "A unique local fusion pizza packed with tandoori spices and toppings", //[cite: 3]
      nutrition: { protein: 18, carbs: 36, fat: 16 },
      tasteProfile: { comparisonText: "Smoky Indian spices on an Italian canvas.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Chewy", "Crispy"] },
      quantity: "9 inches", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
    },
    {
      id: "middle-eastern-pizza",
      name: "Middle Eastern Pizza", //[cite: 3]
      category: "pizza-pasta",
      price: 550, //[cite: 3]
      description: "Topped with sumac-marinated chicken, red onion, habanero, and premium mozzarella", //[cite: 3]
      nutrition: { protein: 22, carbs: 35, fat: 18 },
      tasteProfile: { comparisonText: "Tangy sumac with fiery habanero heat.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 4, savory: 5 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
    },
    {
      id: "chipotle-chicken-pizza",
      name: "Chipotle Chicken Pizza", //[cite: 3]
      category: "pizza-pasta",
      price: 650, //[cite: 3]
      description: "A smoky, spicy fusion mix topped with grilled chipotle chicken and gherkins", //[cite: 3]
      nutrition: { protein: 24, carbs: 36, fat: 18 },
      tasteProfile: { comparisonText: "Smoky chipotle spice with tart gherkins.", spiceLevel: 3, flavors: { spicy: 3, sweet: 2, sour: 3, savory: 4 }, textureTags: ["Chewy", "Crispy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
    },
    {
      id: "chicken-pepperoni-pizza",
      name: "Chicken Pepperoni Pizza", //[cite: 3]
      category: "pizza-pasta",
      price: 675, //[cite: 3]
      description: "Classic tomato sauce base with mozzarella, spicy pepperoni slices, and jalapeños", //[cite: 3]
      nutrition: { protein: 24, carbs: 35, fat: 22 },
      tasteProfile: { comparisonText: "Salty, spicy meat with rich melting cheese.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Chewy", "Crispy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600"
    },
    {
      id: "arrabbiata-pasta",
      name: "Arrabbiata Pasta [600 ml]", //[cite: 3]
      category: "pizza-pasta",
      price: 450, //[cite: 3]
      description: "Penne pasta tossed in spicy tomato sauce, fresh chili flakes, oregano, and parmesan", //[cite: 3]
      nutrition: { protein: 12, carbs: 55, fat: 10 },
      tasteProfile: { comparisonText: "Fierce chili flakes in a robust tomato sauce.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 3, savory: 4 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "600 ml", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1621996311210-91124d7759b8?w=600"
    },
    {
      id: "pesto-pasta",
      name: "Pesto Pasta [600 ml]", //[cite: 3]
      category: "pizza-pasta",
      price: 425, //[cite: 3]
      description: "Penne pasta tossed with fragrant basil pesto sauce, pine nuts, and grana padano", //[cite: 3]
      nutrition: { protein: 14, carbs: 50, fat: 22 },
      tasteProfile: { comparisonText: "Nutty, herbal, and vibrantly green.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Chewy", "Soft"] },
      quantity: "600 ml", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600"
    },
    {
      id: "alfredo-veg-pasta",
      name: "Alfredo Veg Pasta [600 ml]", //[cite: 3]
      category: "pizza-pasta",
      price: 425, //[cite: 3]
      description: "Creamy rich penne pasta made with premium cheese sauce and delicate herbs", //[cite: 3]
      nutrition: { protein: 12, carbs: 48, fat: 28 },
      tasteProfile: { comparisonText: "Decadently creamy and rich.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Creamy", "Chewy"] },
      quantity: "600 ml", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600"
    },
    {
      id: "alfredo-chicken-pasta",
      name: "Alfredo Chicken Pasta [600 ml]", //[cite: 3]
      category: "pizza-pasta",
      price: 525, //[cite: 3]
      description: "Rich cheese-sauce penne tossed with seasoned succulent chicken chunks", //[cite: 3]
      nutrition: { protein: 26, carbs: 48, fat: 30 },
      tasteProfile: { comparisonText: "Heavy cream sauce elevated by savory chicken.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Creamy", "Chewy"] },
      quantity: "600 ml", //[cite: 3]
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600"
    },

    // --- GLOBAL & ASIAN APPETIZERS ---
    {
      id: "parmesan-broccoli-arancini",
      name: "Parmesan And Broccoli Arancini [6 Pieces]", //[cite: 3]
      category: "global-asian-appetizers",
      price: 675, //[cite: 3]
      description: "Crispy arborio rice croquettes with carrot top pesto over a creamy tomato fondue", //[cite: 3]
      nutrition: { protein: 12, carbs: 45, fat: 18 },
      tasteProfile: { comparisonText: "Crispy shell giving way to creamy, earthy rice.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600"
    },
    {
      id: "baked-tiropita",
      name: "Baked Tiropita [6 Pieces]", //[cite: 3]
      category: "global-asian-appetizers",
      price: 375, //[cite: 3]
      description: "Flaky Greek pastry featuring black peppers, cheddar cheese, and pickled jalapeños", //[cite: 3]
      nutrition: { protein: 10, carbs: 25, fat: 22 },
      tasteProfile: { comparisonText: "Shattering pastry with sharp, spicy cheese.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Flaky", "Crispy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: true,
      veg: true,
      image: baked_tiropati,
      model: "/models/c_baked_tiropati.glb",
      modelIos: "/models/ios_baked_tiropati.usdz"
    },
    {
      id: "caribbean-jerk-chicken",
      name: "Caribbean Jerk Chicken [6 Pieces]", //[cite: 3]
      category: "global-asian-appetizers",
      price: 425, //[cite: 3]
      description: "Jamaican-style chicken chunks slow-cooked with highly aromatic jerk spices", //[cite: 3]
      nutrition: { protein: 28, carbs: 5, fat: 12 },
      tasteProfile: { comparisonText: "Sweet, intensely spicy, and heavily spiced.", spiceLevel: 5, flavors: { spicy: 5, sweet: 3, sour: 2, savory: 4 }, textureTags: ["Juicy", "Chewy"] },
      quantity: "6 pieces", //[cite: 3]
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1555196301-8acc02eb74f3?w=600"
    },
    {
      id: "jalapeno-cheese-fritters",
      name: "Jalapeno Cheese Fritters", //[cite: 3]
      category: "global-asian-appetizers",
      price: 375, //[cite: 3]
      description: "Crisp gold-fried snacks bursting with gooey cheese and hot jalapeno bits", //[cite: 3]
      nutrition: { protein: 12, carbs: 20, fat: 26 },
      tasteProfile: { comparisonText: "Molten cheese with bright jalapeño fire.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "1 portion",
      bestseller: true,
      veg: true,
      image: cheese_fitters,
      model: "/models/compressed_cheese_fitters.glb",
      modelIos: "/models/cheese_fitters.usdz"
    },
    {
      id: "chinese-veg-spring-roll",
      name: "Chinese Veg Spring Roll", //[cite: 3]
      category: "global-asian-appetizers",
      price: 325, //[cite: 3]
      description: "Crispy rolled pastry jackets filled with tossed seasonal Asian greens", //[cite: 3]
      nutrition: { protein: 6, carbs: 32, fat: 14 },
      tasteProfile: { comparisonText: "Crunchy shell with savory wok-tossed greens.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Crispy", "Crunchy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600"
    },
    {
      id: "chinese-fried-asian-cottage-cheese",
      name: "Chinese Fried Asian Cottage Cheese", //[cite: 3]
      category: "global-asian-appetizers",
      price: 325, //[cite: 3]
      description: "Crisp batter-fried cottage cheese wok-tossed in traditional fiery oriental sauces", //[cite: 3]
      nutrition: { protein: 14, carbs: 25, fat: 18 },
      tasteProfile: { comparisonText: "Sticky, sweet, and fiery oriental glaze.", spiceLevel: 4, flavors: { spicy: 4, sweet: 3, sour: 2, savory: 4 }, textureTags: ["Crispy", "Chewy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600"
    },

    // --- INDIAN MAIN COURSE ---
    {
      id: "butter-chicken",
      name: "Butter Chicken", //[cite: 3]
      category: "indian-main-course",
      price: 525, //[cite: 3]
      description: "Classic Delhi-style chicken prepared in a rich, velvety tomato and butter cream gravy", //[cite: 3]
      nutrition: { protein: 32, carbs: 12, fat: 38 },
      tasteProfile: { comparisonText: "Rich, mildly sweet, and luxuriously creamy.", spiceLevel: 2, flavors: { spicy: 2, sweet: 3, sour: 2, savory: 5 }, textureTags: ["Creamy", "Soft"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
    },
    {
      id: "paneer-lababdar",
      name: "Paneer Lababdar", //[cite: 3]
      category: "indian-main-course",
      price: 425, //[cite: 3]
      description: "Cottage cheese chunks cooked in a rich, creamy, and semi-sweet tomato onion gravy", //[cite: 3]
      nutrition: { protein: 18, carbs: 14, fat: 32 },
      tasteProfile: { comparisonText: "Thick, semi-sweet tomato gravy with soft paneer.", spiceLevel: 2, flavors: { spicy: 2, sweet: 3, sour: 2, savory: 4 }, textureTags: ["Soft", "Creamy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=600"
    },
    {
      id: "kadhai-paneer",
      name: "Kadhai Paneer", //[cite: 3]
      category: "indian-main-course",
      price: 425, //[cite: 3]
      description: "Fresh paneer chunks tossed with colorful bell peppers in a freshly pounded spice mix", //[cite: 3]
      nutrition: { protein: 18, carbs: 12, fat: 28 },
      tasteProfile: { comparisonText: "Robust coriander seeds and spicy dry gravy.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Chewy", "Crunchy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=600"
    },
    {
      id: "dal-makhani",
      name: "Dal Makhani", //[cite: 3]
      category: "indian-main-course",
      price: 425, //[cite: 3]
      description: "Slow-cooked black lentils simmered overnight with butter, fresh cream, and tomatoes", //[cite: 3]
      nutrition: { protein: 14, carbs: 42, fat: 18 },
      tasteProfile: { comparisonText: "Deep, earthy, smoky, and buttery.", spiceLevel: 2, flavors: { spicy: 2, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Creamy", "Soft"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600"
    },

    // --- RICE & BIRYANI ---
    {
      id: "speciality-veg-biryani",
      name: "Speciality Veg Biryani", //[cite: 3]
      category: "rice-biryani",
      price: 325, //[cite: 3]
      description: "Fragrant long-grain basmati rice cooked on dum with aromatic spices and vegetables", //[cite: 3]
      nutrition: { protein: 8, carbs: 65, fat: 14 },
      tasteProfile: { comparisonText: "Aromatic saffron and whole spices.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Fluffy", "Soft"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600"
    },
    {
      id: "speciality-chicken-biryani",
      name: "Speciality Chicken Biryani", //[cite: 3]
      category: "rice-biryani",
      price: 425, //[cite: 3]
      description: "Aromatic Mughlai biryani layered with marinated chicken, saffron, and mint", //[cite: 3]
      nutrition: { protein: 28, carbs: 60, fat: 18 },
      tasteProfile: { comparisonText: "Rich meat juices steeped into fluffy rice.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Fluffy", "Juicy"] },
      quantity: "1 portion",
      bestseller: false,
      veg: false,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600"
    },
    {
      id: "steamed-rice",
      name: "Steamed Rice", //[cite: 3]
      category: "rice-biryani",
      price: 175, //[cite: 3]
      description: "Perfectly cooked premium fluffy long-grain basmati rice", //[cite: 3]
      nutrition: { protein: 4, carbs: 45, fat: 1 },
      tasteProfile: { comparisonText: "Clean, simple, and comforting.", spiceLevel: 0, flavors: { spicy: 0, sweet: 1, sour: 0, savory: 1 }, textureTags: ["Fluffy", "Soft"] },
      quantity: "1 portion",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
    },

    // --- INDIAN BREADS ---
    {
      id: "roti",
      name: "Roti", //[cite: 3]
      category: "indian-breads",
      price: 20, //[cite: 3]
      description: "Whole wheat Indian flatbread cooked crisp in the traditional clay tandoor", //[cite: 3]
      nutrition: { protein: 3, carbs: 18, fat: 2 },
      tasteProfile: { comparisonText: "Earthy whole wheat with a smoky char.", spiceLevel: 0, flavors: { spicy: 0, sweet: 1, sour: 0, savory: 2 }, textureTags: ["Crispy", "Chewy"] },
      quantity: "1 piece",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1626082895617-2c6ad3ed28e3?w=600"
    },
    {
      id: "naan",
      name: "Naan", //[cite: 3]
      category: "indian-breads",
      price: 30, //[cite: 3]
      description: "Classic soft leavened flatbread freshly slapped against the clay tandoor walls", //[cite: 3]
      nutrition: { protein: 4, carbs: 22, fat: 4 },
      tasteProfile: { comparisonText: "Soft, pillowy, and slightly stretchy.", spiceLevel: 0, flavors: { spicy: 0, sweet: 2, sour: 1, savory: 2 }, textureTags: ["Soft", "Chewy"] },
      quantity: "1 piece",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1626082895617-2c6ad3ed28e3?w=600"
    },
    {
      id: "paratha",
      name: "Paratha", //[cite: 3]
      category: "indian-breads",
      price: 50, //[cite: 3]
      description: "Flaky, multilayered -golden tandoori whole wheat bread with butter brushing", //[cite: 3]
      nutrition: { protein: 4, carbs: 25, fat: 10 },
      tasteProfile: { comparisonText: "Rich, buttery, and incredibly flaky.", spiceLevel: 0, flavors: { spicy: 0, sweet: 1, sour: 0, savory: 3 }, textureTags: ["Flaky", "Crispy"] },
      quantity: "1 piece",
      bestseller: false,
      veg: true,
      image: "https://images.unsplash.com/photo-1626082895617-2c6ad3ed28e3?w=600"
    }
  ]
};

export default restaurantData;