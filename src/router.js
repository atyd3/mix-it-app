import {createRouter, createWebHashHistory } from "vue-router";

import CocktailsList from './pages/cocktails/CocktailsList';
import CocktailDetails from './pages/cocktails/CocktailDetails.vue';
import BrowseCocktails from './components/cocktails/BrowseCocktails.vue';
import FavoriteList from './pages/cocktails/FavoriteList.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (savedPosition) {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 600)
            } else {
                resolve({top: 0})
            }
        })
    },
    routes: [
        {
            path: '/cocktails',
            alias: '/',
            component: CocktailsList,
            meta: { withAlcohol: true },
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
            },
            children: [
                {
                    path: '',
                    component: BrowseCocktails
                },
            ]
        },
        {
            path: '/mix-it-app/cocktails/id=:id',
            component: CocktailDetails
        },
        {
            path: '/mix-it-app/alcoholic', component: CocktailsList,
            meta: { withAlcohol: true },
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
            }
        },
        {
            path: '/mix-it-app/favorites',
            component: FavoriteList
        },
        {
            path: '/mix-it-app/ordinary',
            component: CocktailsList,
            meta: { withAlcohol: true },
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
            }
        },
        {
            path: '/mix-it-app/shots',
            component: CocktailsList,
            meta: { withAlcohol: true },
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot'
            }
        },
        {
            path: '/mix-it-app/non_alcoholic',
            component: CocktailsList,
            meta: { withAlcohol: false },
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            },
            children: [
                {
                    path: '',
                    component: BrowseCocktails
                },
            ]
        },
        {
            path: '/search',
            component: CocktailsList,
            props: {
                endpoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
            }
        },
        {
            path: '/mix-it-app/browse',
            component: CocktailsList,
            props: {
                endpoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }

    ]
});

router.beforeEach(function (to, from, next) {
    const isAdult = JSON.parse(localStorage.getItem('isAdult'));
    if (to.meta.withAlcohol && isAdult === 'notAdult') {
        next('/non_alcoholic')
    } else {
        next()
    }
})

export default router;
