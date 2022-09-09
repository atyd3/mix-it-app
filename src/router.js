import {createRouter, createWebHistory} from "vue-router";
// import route from 'vue';

import CocktailsList from './pages/cocktails/CocktailsList';
import CocktailDetails from './pages/cocktails/CocktailDetails.vue';
import FavoriteList from './pages/cocktails/FavoriteList.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (savedPosition) {
                console.log(router)
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
            path: '/',
            redirect: '/cocktails'
        },
        {
            path: '/cocktails',
            component: CocktailsList,
            meta: {withAlcohol: true},
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
            },
        },
        {
            path: '/alcoholic', component: CocktailsList,
            meta: {withAlcohol: true},
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
            }
        },
        {
            path: '/cocktails/:id',
            component: CocktailDetails
        },
        {
            path: '/favorites',
            component: FavoriteList
        },
        {
            path: '/ordinary',
            component: CocktailsList,
            meta: {withAlcohol: true},
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
            }
        },
        {
            path: '/shots',
            component: CocktailsList,
            meta: {withAlcohol: true},
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot'
            }
        },
        {
            path: '/non_alcoholic',
            component: CocktailsList,
            meta: {withAlcohol: false},
            props: {
                endpoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            }
        },
        {
            path: '/browse',
            component: CocktailsList,
            props: {
                endpoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
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
