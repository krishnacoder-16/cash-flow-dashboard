// Keyword map (easy to extend later)

const CATEGORY_KEYWORDS = {
  Rent: ["rent", "flat", "house"],
  Food: ["food", "pizza", "burger", "restaurant"],
  Clothes: ["shirt", "jeans", "clothes"],
  Travel: ["bus", "train", "uber", "ola", "flight"],
  Subscriptions: ["netflix", "spotify", "prime", "subscription"]
};

// Detect category based on expense name

function detectCategory(expenseName) {
  const name = expenseName.toLowerCase();

  for (const category in CATEGORY_KEYWORDS) {
    const keywords = CATEGORY_KEYWORDS[category];

    for (let i = 0; i < keywords.length; i++) {
      if (name.includes(keywords[i])) {
        return category;
      }
    }
  }

  return "Other";
}
