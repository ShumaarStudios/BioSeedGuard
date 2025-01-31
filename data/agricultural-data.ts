export const CROPS_BY_STATE: Record<string, string[]> = {
  "Andhra Pradesh": ["Rice", "Cotton", "Sugarcane", "Groundnut", "Tobacco"],
  "Arunachal Pradesh": ["Rice", "Maize", "Millet", "Wheat", "Potato"],
  Assam: ["Tea", "Rice", "Jute", "Sugarcane", "Potato"],
  Bihar: ["Rice", "Wheat", "Maize", "Sugarcane", "Potato"],
  Chhattisgarh: ["Rice", "Maize", "Wheat", "Groundnut", "Pulses"],
  Goa: ["Rice", "Cashew", "Coconut", "Sugarcane", "Pineapple"],
  Gujarat: ["Cotton", "Groundnut", "Wheat", "Bajra", "Tobacco"],
  Haryana: ["Wheat", "Rice", "Sugarcane", "Cotton", "Rapeseed"],
  "Himachal Pradesh": ["Apple", "Potato", "Wheat", "Maize", "Barley"],
  Jharkhand: ["Rice", "Maize", "Potato", "Wheat", "Pulses"],
  Karnataka: ["Ragi", "Jowar", "Rice", "Sugarcane", "Cotton"],
  Kerala: ["Coconut", "Rice", "Rubber", "Cashew", "Pepper"],
  "Madhya Pradesh": ["Soybean", "Wheat", "Rice", "Maize", "Cotton"],
  Maharashtra: ["Cotton", "Jowar", "Sugarcane", "Wheat", "Turmeric"],
  Manipur: ["Rice", "Maize", "Soybean", "Sugarcane", "Oilseeds"],
  Meghalaya: ["Rice", "Potato", "Ginger", "Turmeric", "Pineapple"],
  Mizoram: ["Rice", "Maize", "Sugarcane", "Tapioca", "Ginger"],
  Nagaland: ["Rice", "Maize", "Millet", "Sugarcane", "Potato"],
  Odisha: ["Rice", "Pulses", "Oilseeds", "Jute", "Sugarcane"],
  Punjab: ["Wheat", "Rice", "Cotton", "Sugarcane", "Maize"],
  Rajasthan: ["Wheat", "Barley", "Pulses", "Oilseeds", "Cotton"],
  Sikkim: ["Cardamom", "Ginger", "Orange", "Tea", "Rice"],
  "Tamil Nadu": ["Rice", "Sugarcane", "Groundnut", "Cotton", "Millets"],
  Telangana: ["Rice", "Cotton", "Maize", "Soybean", "Chili"],
  Tripura: ["Rice", "Jute", "Tea", "Potato", "Sugarcane"],
  "Uttar Pradesh": ["Wheat", "Sugarcane", "Rice", "Potato", "Maize"],
  Uttarakhand: ["Wheat", "Rice", "Sugarcane", "Soybean", "Pulses"],
  "West Bengal": ["Rice", "Jute", "Tea", "Potato", "Sugarcane"],
  default: ["Rice", "Wheat", "Cotton", "Sugarcane", "Maize"],
}

export const CROP_VARIETIES: Record<string, string[]> = {
  Rice: ["Basmati", "IR8", "Ponni", "MTU 1010"],
  Wheat: ["HD 2967", "Lok-1", "WH 147", "DBW 17"],
  Cotton: ["MCU 5", "Suvin", "Jayadhar", "Varalaxmi"],
  Sugarcane: ["Co 0238", "CoC 671", "Co 86032", "Co 97001"],
  Maize: ["Hybrid 1", "Hybrid 2", "Hybrid 3", "Local Variety"],
}

export interface Solution {
  title: string
  description: string
  steps: string[]
  materials: string[]
  precautions: string[]
}

export const PROBLEMS = [
  "Fungal Disease",
  "Insect Infestation",
  "Weed Growth",
  "Nutrient Deficiency",
  "Environmental Stress",
]

export const SOLUTIONS: Record<string, Record<string, Solution>> = {
  "Fungal Disease": {
    Rice: {
      title: "Natural Fungal Control for Rice",
      description: "Organic solution using neem and turmeric powder mixture",
      steps: [
        "Mix 50g neem powder with 10g turmeric powder",
        "Add mixture to 1L of water",
        "Spray during early morning or late evening",
        "Repeat treatment every 7-10 days",
      ],
      materials: ["Neem powder - 50g", "Turmeric powder - 10g", "Water - 1L", "Sprayer"],
      precautions: [
        "Avoid spraying during hot afternoons",
        "Wear protective gear while spraying",
        "Keep mixture away from children and pets",
      ],
    },
    Cotton: {
      title: "Organic Fungicide for Cotton",
      description: "Milk-based spray to control fungal growth",
      steps: [
        "Mix 1 part milk with 9 parts water",
        "Add 1 tablespoon of baking soda per liter of mixture",
        "Spray on affected areas every 7-10 days",
        "Apply early morning for best results",
      ],
      materials: ["Milk - 100ml", "Water - 900ml", "Baking soda - 1 tablespoon", "Sprayer"],
      precautions: ["Do not apply in direct sunlight", "Avoid overuse as it may attract pests", "Reapply after rain"],
    },
    Wheat: {
      title: "Herbal Fungicide for Wheat",
      description: "Garlic and onion-based spray for fungal control",
      steps: [
        "Blend 100g garlic and 100g onion",
        "Soak in 1L water overnight",
        "Strain and dilute with 5L water",
        "Spray on wheat plants every 10-14 days",
      ],
      materials: ["Garlic - 100g", "Onion - 100g", "Water - 6L", "Blender", "Strainer", "Sprayer"],
      precautions: [
        "Test on a small area first",
        "Avoid contact with eyes and skin",
        "Store mixture in a cool, dark place",
      ],
    },
  },
  "Insect Infestation": {
    Cotton: {
      title: "Natural Pest Control for Cotton",
      description: "Garlic-chili spray solution for pest control",
      steps: [
        "Crush 100g garlic and 50g hot chilies",
        "Soak in 500ml water overnight",
        "Filter and dilute with 2L water",
        "Spray on affected areas",
      ],
      materials: ["Garlic - 100g", "Hot chilies - 50g", "Water - 2.5L", "Strainer", "Sprayer"],
      precautions: ["Avoid contact with eyes", "Use face mask while spraying", "Keep away from edible crops"],
    },
    Rice: {
      title: "Neem-based Insect Repellent for Rice",
      description: "Neem oil spray to repel and control rice pests",
      steps: [
        "Mix 30ml neem oil with 10ml liquid soap",
        "Add mixture to 1L of water",
        "Shake well and spray on rice plants",
        "Apply every 7-10 days or after rain",
      ],
      materials: ["Neem oil - 30ml", "Liquid soap - 10ml", "Water - 1L", "Sprayer"],
      precautions: [
        "Apply in the evening to avoid leaf burn",
        "Do not use during flowering stage",
        "Keep mixture away from water bodies",
      ],
    },
    Wheat: {
      title: "Diatomaceous Earth Treatment for Wheat",
      description: "Natural silica-based powder to control wheat pests",
      steps: [
        "Dust diatomaceous earth on wheat plants",
        "Focus on areas with visible pest activity",
        "Reapply after rain or heavy dew",
        "Use protective mask during application",
      ],
      materials: ["Food-grade diatomaceous earth", "Duster or sifter", "Protective mask"],
      precautions: ["Apply on dry plants only", "Avoid inhalation of dust", "Do not apply on windy days"],
    },
  },
  "Weed Growth": {
    Rice: {
      title: "Natural Weed Management in Rice Fields",
      description: "Combination of cultural and organic methods for weed control",
      steps: [
        "Implement crop rotation with legumes",
        "Use stale seedbed technique before planting",
        "Apply rice straw mulch between rows",
        "Hand-weed during early growth stages",
      ],
      materials: ["Rice straw for mulching", "Hand tools for weeding", "Legume seeds for rotation"],
      precautions: [
        "Avoid disturbing soil too much during weeding",
        "Do not use fresh manure as mulch",
        "Monitor water levels to suppress weed growth",
      ],
    },
    Cotton: {
      title: "Organic Weed Control for Cotton",
      description: "Vinegar-based herbicide and cultural practices",
      steps: [
        "Mix 1 part vinegar with 1 part water",
        "Add 1 tablespoon of liquid soap per liter",
        "Spray directly on weeds on a sunny day",
        "Use cover crops between cotton rows",
      ],
      materials: [
        "White vinegar - 500ml",
        "Water - 500ml",
        "Liquid soap - 2 tablespoons",
        "Sprayer",
        "Cover crop seeds",
      ],
      precautions: [
        "Avoid spraying on cotton plants",
        "Apply when rain is not expected",
        "Use gloves and eye protection",
      ],
    },
    Wheat: {
      title: "Integrated Weed Management for Wheat",
      description: "Combination of mechanical and organic methods",
      steps: [
        "Use a rotary hoe for early weed control",
        "Apply corn gluten meal as pre-emergent",
        "Intercrop with allelopathic plants like sunflower",
        "Use dense planting to suppress weed growth",
      ],
      materials: [
        "Rotary hoe or similar implement",
        "Corn gluten meal",
        "Sunflower or other allelopathic plant seeds",
        "Additional wheat seeds for dense planting",
      ],
      precautions: [
        "Time mechanical weeding carefully to avoid crop damage",
        "Apply corn gluten meal at least 60 days before planting",
        "Monitor crop-weed competition closely",
      ],
    },
  },
  "Nutrient Deficiency": {
    Rice: {
      title: "Organic Nutrient Management for Rice",
      description: "Compost tea and green manure application",
      steps: [
        "Prepare compost tea by steeping compost in water",
        "Apply compost tea as foliar spray every 2 weeks",
        "Incorporate green manure crops before transplanting",
        "Use azolla as bio-fertilizer in paddy fields",
      ],
      materials: ["Compost", "Water", "Green manure seeds (e.g., Sesbania)", "Azolla culture"],
      precautions: [
        "Ensure compost is fully mature before making tea",
        "Do not over-apply compost tea",
        "Incorporate green manure at the right growth stage",
      ],
    },
    Cotton: {
      title: "Natural Nutrient Boost for Cotton",
      description: "Seaweed extract and rock dust application",
      steps: [
        "Mix seaweed extract as per package instructions",
        "Apply as foliar spray every 3-4 weeks",
        "Spread rock dust around plants before irrigation",
        "Use legume cover crops in off-season",
      ],
      materials: ["Seaweed extract", "Rock dust", "Sprayer", "Legume seeds for cover crop"],
      precautions: [
        "Do not apply seaweed extract in hot sun",
        "Wear mask when spreading rock dust",
        "Avoid over-application of nutrients",
      ],
    },
    Wheat: {
      title: "Organic Wheat Nutrition Program",
      description: "Combination of compost, bone meal, and foliar sprays",
      steps: [
        "Apply well-rotted compost before planting",
        "Use bone meal for phosphorus at sowing time",
        "Spray fish emulsion every 3-4 weeks",
        "Top-dress with composted manure mid-season",
      ],
      materials: ["Compost", "Bone meal", "Fish emulsion", "Composted manure"],
      precautions: [
        "Ensure compost is disease-free",
        "Do not over-apply bone meal",
        "Apply foliar sprays in the evening",
      ],
    },
  },
  "Environmental Stress": {
    Rice: {
      title: "Enhancing Rice Resilience to Environmental Stress",
      description: "Use of silicon and mycorrhizal fungi",
      steps: [
        "Apply diatomaceous earth as silicon source",
        "Inoculate seedlings with mycorrhizal fungi",
        "Use mulching to conserve soil moisture",
        "Implement System of Rice Intensification (SRI)",
      ],
      materials: [
        "Diatomaceous earth",
        "Mycorrhizal fungi inoculant",
        "Organic mulch",
        "SRI tools (e.g., rotary weeder)",
      ],
      precautions: [
        "Apply silicon at the right growth stage",
        "Ensure proper storage of mycorrhizal inoculant",
        "Monitor water use in SRI carefully",
      ],
    },
    Cotton: {
      title: "Stress Mitigation Techniques for Cotton",
      description: "Use of biochar and foliar anti-stress sprays",
      steps: [
        "Incorporate biochar into soil before planting",
        "Apply seaweed extract as foliar spray",
        "Use shade cloth during extreme heat",
        "Implement deficit irrigation techniques",
      ],
      materials: ["Biochar", "Seaweed extract", "Shade cloth", "Drip irrigation system"],
      precautions: [
        "Do not over-apply biochar",
        "Apply foliar sprays in the evening",
        "Monitor plant stress signs closely",
      ],
    },
    Wheat: {
      title: "Enhancing Wheat Tolerance to Environmental Stress",
      description: "Use of humic acids and stress-tolerant varieties",
      steps: [
        "Apply humic acid solution to soil",
        "Use drought-tolerant wheat varieties",
        "Implement conservation tillage",
        "Apply kelp extract as foliar spray",
      ],
      materials: [
        "Humic acid solution",
        "Stress-tolerant wheat seeds",
        "Conservation tillage equipment",
        "Kelp extract",
      ],
      precautions: [
        "Follow recommended rates for humic acid",
        "Ensure proper seed storage for stress-tolerant varieties",
        "Monitor soil moisture in conservation tillage",
      ],
    },
  },
}

