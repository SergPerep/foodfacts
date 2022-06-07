
const getSearchResults = async ({ searchInputValue }) => {
    try {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&json=true&search_terms=${searchInputValue}&search_simple=1`);
        const data = await response.json();
        const products = data.products;
        const searchResults = products.slice(0, 5).map(product => {
            const result = {
                id: product._id,
                titleStr: product.product_name,
                brandsStr: product.brands || "",
                proteinNum: product.nutriments.proteins,
                carbsNum: product.nutriments.carbohydrates,
                fatNum: product.nutriments.fat,
                energyNum: product.nutriments["energy-kcal"] || 0,
                perStr: "100 g"
            }
            return result;
        })
        // product_name
        // brands
        // nutriments.proteins
        // nutriments.carbohydrates
        // nutriments.fat
        // nutriments.energy-kcal
        // quantity

        return searchResults;
    } catch (error) {
        console.log(error.message);
    }
}

export default getSearchResults;