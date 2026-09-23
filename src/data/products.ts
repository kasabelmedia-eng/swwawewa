export interface Product {
  id: string;
  name: string;
  category: 'salads' | 'warm-bowls' | 'sides' | 'sweets' | 'drinks';
  categoryLabel: string;
  price: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description: string;
  ingredients: string[];
  allergens: string[];
  dietaryTags: Array<'G' | 'V' | 'DF' | 'GF'>;
  onlineOnly?: boolean;
  seasonal?: boolean;
  image: string;
  badge?: string;
}

export interface Category {
  id: 'salads' | 'warm-bowls' | 'sides' | 'sweets' | 'drinks';
  name: string;
  subtitle: string;
}

export const CATEGORIES: Category[] = [
  { id: 'salads', name: 'Salads', subtitle: 'Crisp seasonal greens tossed with scratch-made dressings' },
  { id: 'warm-bowls', name: 'Warm Bowls', subtitle: 'Hearty warm grains, roasted vegetables & warm proteins' },
  { id: 'sides', name: 'Sides', subtitle: 'Fresh baked breads and savory warm accompaniments' },
  { id: 'sweets', name: 'Sweets', subtitle: 'Scratch-made treats with unrefined organic sweeteners' },
  { id: 'drinks', name: 'Drinks', subtitle: 'House-steeped teas, cold-pressed juices & natural sips' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'harvest-bowl',
    name: 'Harvest Bowl',
    category: 'warm-bowls',
    categoryLabel: 'Warm Bowls',
    price: 14.95,
    calories: 685,
    protein: 39,
    carbs: 64,
    fat: 32,
    description: 'Antibiotic-free roasted chicken, roasted sweet potatoes, apples, goat cheese, roasted almonds, wild rice, organic shredded kale and balsamic vinaigrette.',
    ingredients: [
      'Roasted chicken',
      'Roasted sweet potatoes',
      'Local crisp apples',
      'Goat cheese',
      'Toasted almonds',
      'Wild rice blend',
      'Organic shredded kale',
      'Balsamic vinaigrette'
    ],
    allergens: ['Milk', 'Meat', 'Tree Nuts'],
    dietaryTags: ['GF'],
    seasonal: true,
    image: '/src/assets/images/bowl_harvest_chicken_1790172034842.jpg'
  },
  {
    id: 'kale-caesar',
    name: 'Kale Caesar',
    category: 'salads',
    categoryLabel: 'Salads',
    price: 13.95,
    calories: 440,
    protein: 32,
    carbs: 24,
    fat: 26,
    description: 'Kale, romaine, roasted chicken, sourdough breadcrumbs, parm crisps, fresh lemon squeeze, scratch Caesar dressing.',
    ingredients: [
      'Organic shredded kale',
      'Crisp chopped romaine',
      'Roasted chicken',
      'Garlic breadcrumbs',
      'Parm crisps',
      'Fresh lemon',
      'House Caesar dressing'
    ],
    allergens: ['Milk', 'Eggs', 'Fish', 'Meat', 'Wheat'],
    dietaryTags: ['G'],
    image: '/src/assets/images/salad_kale_caesar_1790172046254.jpg'
  },
  {
    id: 'chicken-pesto-parm',
    name: 'Chicken Pesto Parm',
    category: 'warm-bowls',
    categoryLabel: 'Warm Bowls',
    price: 15.25,
    calories: 525,
    protein: 35,
    carbs: 48,
    fat: 24,
    description: 'Roasted chicken, spicy charred broccoli, tomatoes, shaved parmesan, za’atar breadcrumbs, warm quinoa, baby spinach, sweetgreen hot sauce, pesto vinaigrette.',
    ingredients: [
      'Roasted chicken',
      'Spicy broccoli',
      'Sweet tomatoes',
      'Shaved parmesan',
      'Za’atar breadcrumbs',
      'Warm quinoa',
      'Baby spinach',
      'Sweetgreen hot sauce',
      'Pesto vinaigrette'
    ],
    allergens: ['Milk', 'Meat', 'Wheat'],
    dietaryTags: ['G'],
    seasonal: true,
    image: '/src/assets/images/bowl_chicken_pesto_parm_1790172056411.jpg'
  },
  {
    id: 'buffalo-chicken',
    name: 'Buffalo Chicken',
    category: 'salads',
    categoryLabel: 'Salads',
    price: 14.50,
    calories: 510,
    protein: 34,
    carbs: 28,
    fat: 29,
    description: 'Blackened chicken, pickled onions, tomatoes, shredded carrots, cilantro, feta crumble, garlic breadcrumbs, shredded kale, chopped romaine, Sweetgreen hot sauce, Caesar.',
    ingredients: [
      'Blackened antibiotic-free chicken',
      'Pickled red onions',
      'Cherry tomatoes',
      'Shredded carrots',
      'Fresh cilantro',
      'Crumbled feta',
      'Garlic breadcrumbs',
      'Organic kale & romaine',
      'Sweetgreen hot sauce & caesar'
    ],
    allergens: ['Meat', 'Milk', 'Eggs', 'Fish', 'Wheat'],
    dietaryTags: ['G'],
    onlineOnly: true,
    badge: 'Online only',
    image: '/src/assets/images/bowl_chicken_pesto_parm_1790172056411.jpg'
  },
  {
    id: 'guacamole-greens',
    name: 'Guacamole Greens',
    category: 'salads',
    categoryLabel: 'Salads',
    price: 14.25,
    calories: 530,
    protein: 28,
    carbs: 38,
    fat: 32,
    description: 'Roasted chicken, fresh Hass avocado, pickled onions, shredded cabbage, roasted corn salsa, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño dressing.',
    ingredients: [
      'Roasted chicken',
      'Fresh avocado',
      'Pickled red onions',
      'Shredded cabbage',
      'Charred corn salsa',
      'Organic spring mix',
      'Chopped romaine',
      'Lime squeeze',
      'Lime cilantro jalapeño sauce'
    ],
    allergens: ['Meat'],
    dietaryTags: ['GF', 'DF'],
    image: '/src/assets/images/salad_kale_caesar_1790172046254.jpg'
  },
  {
    id: 'shroomami',
    name: 'Shroomami',
    category: 'warm-bowls',
    categoryLabel: 'Warm Bowls',
    price: 13.95,
    calories: 590,
    protein: 21,
    carbs: 68,
    fat: 26,
    description: 'Roasted organic tofu, warm portobello mix, cucumbers, fresh basil, shredded cabbage, roasted almonds, wild rice blend, organic shredded kale and miso sesame ginger.',
    ingredients: [
      'Roasted organic tofu',
      'Warm roasted portobello mushrooms',
      'Crisp cucumbers',
      'Fresh basil',
      'Shredded cabbage',
      'Toasted almonds',
      'Wild rice',
      'Organic kale',
      'Miso sesame ginger dressing'
    ],
    allergens: ['Soybeans', 'Sesame', 'Tree Nuts'],
    dietaryTags: ['V', 'DF', 'GF'],
    image: '/src/assets/images/bowl_harvest_chicken_1790172034842.jpg'
  },
  {
    id: 'rosemary-focaccia',
    name: 'Rosemary Focaccia',
    category: 'sides',
    categoryLabel: 'Sides',
    price: 3.25,
    calories: 210,
    protein: 5,
    carbs: 31,
    fat: 8,
    description: 'Locally-baked artisan rosemary focaccia finished with California extra virgin olive oil and flaky Maldon sea salt.',
    ingredients: ['Enriched unbleached flour', 'Extra virgin olive oil', 'Fresh rosemary', 'Sea salt', 'Yeast'],
    allergens: ['Wheat'],
    dietaryTags: ['V'],
    image: '/src/assets/images/hero_autumn_warm_bowl_1790172024840.jpg'
  },
  {
    id: 'roasted-sweet-potatoes',
    name: 'Roasted Sweet Potatoes',
    category: 'sides',
    categoryLabel: 'Sides',
    price: 4.75,
    calories: 260,
    protein: 3,
    carbs: 42,
    fat: 9,
    description: 'Warm, caramelized roasted sweet potatoes served with your choice of hot honey mustard or house green goddess ranch.',
    ingredients: ['Roasted sweet potatoes', 'Avocado oil', 'Salt & pepper', 'Hot honey mustard or green goddess ranch'],
    allergens: [],
    dietaryTags: ['V', 'GF'],
    image: '/src/assets/images/bowl_harvest_chicken_1790172034842.jpg'
  },
  {
    id: 'hibiscus-clover-tea',
    name: 'Hibiscus Clover Tea',
    category: 'drinks',
    categoryLabel: 'Drinks',
    price: 3.95,
    calories: 45,
    protein: 0,
    carbs: 11,
    fat: 0,
    description: 'Refreshing crimson clover tea steeped with bright organic berries and tangy hibiscus blossoms, lightly sweetened with pure cane juice.',
    ingredients: ['Filtered water', 'Organic hibiscus', 'Clover tea', 'Berries', 'Organic cane sugar'],
    allergens: [],
    dietaryTags: ['V', 'GF', 'DF'],
    image: '/src/assets/images/editorial_kitchen_chef_1790172066661.jpg'
  },
  {
    id: 'crispy-rice-treat',
    name: 'Crispy Rice Treat',
    category: 'sweets',
    categoryLabel: 'Sweets',
    price: 3.50,
    calories: 190,
    protein: 2,
    carbs: 28,
    fat: 8,
    description: 'Organic brown rice crisps bound with wildflower honey, grass-fed butter, and finished with a dark cacao drizzle.',
    ingredients: ['Organic brown rice crisps', 'Wildflower honey', 'Butter', 'Sea salt', 'Fair trade dark chocolate'],
    allergens: ['Milk'],
    dietaryTags: ['GF'],
    image: '/src/assets/images/bowl_harvest_chicken_1790172034842.jpg'
  }
];

export interface CartItem {
  product: Product;
  quantity: number;
  specialInstructions?: string;
  dressingChoice?: 'light' | 'regular' | 'on-the-side' | 'heavy';
}
