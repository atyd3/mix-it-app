export default async function fetchCocktails(endpoint) {
    const response = await fetch(endpoint);
    const responseData = await response.json();
    const drinks = responseData.drinks;
    const cocktails = [];
    for (const key in drinks) {
        const cocktail = {
            id: drinks[key].idDrink,
            name: drinks[key].strDrink,
            image: drinks[key].strDrinkThumb
        }
        cocktails.push(cocktail)
    }
    return cocktails;
}
