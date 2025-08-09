const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const FIXED_PRICES = [
  9.99, 12.5, 15.75, 8.9, 14.2, 11.4, 10.3, 13.99, 16.5, 7.99, 12.8, 18.6
];

export async function menuList() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw new Error("Failed getting menu");
  const { categories } = await res.json();
  const categoriesAll = categories.map((item, index) => ({
    ...item,
    price: FIXED_PRICES[index % FIXED_PRICES.length]
  }));
  return categoriesAll;
}
