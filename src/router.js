import {createRouter, createWebHistory} from "vue-router";
// import route from 'vue';

import CocktailsList from './pages/cocktails/CocktailsList';
import CocktailDetails from './pages/cocktails/CocktailDetails.vue';
import FavoriteList from './pages/cocktails/FavoriteList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/cocktails'},
        {
            path: '/cocktails',
            component: CocktailsList,
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
            },
        },
        {
            path: '/alcoholic', component: CocktailsList,
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
            }
        },
        {path: '/cocktails/:id', component: CocktailDetails},
        {path: '/favorites', component: FavoriteList},
        {
            path: '/ordinary', component: CocktailsList,
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
            }
        },
        {
            path: '/shots', component: CocktailsList,
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot'
            }
        },
        {
            path: '/non_alcoholic', component: CocktailsList,
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            }
        },
        {
            path: '/browse', component: CocktailsList,
            props: {
                endpoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
            }
        },
        {path: '/:notFound(.*)', component: NotFound}

    ]
});

// router.beforeEach( )

export default router;
