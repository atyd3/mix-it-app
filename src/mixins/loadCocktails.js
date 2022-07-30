export default {
    data() {
        return {
            cocktails: [],
            isLoading: false
        }
    },
    methods: {
        async loadCocktails(link) {
            this.isLoading = true;
            const response = await fetch(link);
            const responseData = await response.json();
            const drinks = responseData.drinks
            for (const key in drinks) {
                const cocktail = {
                    id: drinks[key].idDrink,
                    name: drinks[key].strDrink,
                    image: drinks[key].strDrinkThumb
                }
                this.cocktails.push(cocktail);
            }
            this.isLoading = false;
        },
    },
    created() {
        this.loadCocktails();
    }
}