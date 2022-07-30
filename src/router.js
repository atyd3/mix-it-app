import {createRouter, createWebHistory} from "vue-router";

import CocktailsList from './pages/cocktails/CocktailsList';
import CocktailDetails from './pages/cocktails/CocktailDetails.vue';
import FavoriteList from './pages/cocktails/FavoriteList.vue';
import PopularList from './pages/cocktails/PopularList'
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/cocktails'},
        {path: '/cocktails', component: CocktailsList},
        { path: '/cocktails/:id', component: CocktailDetails},
        {path: '/favorites', component: FavoriteList},
        {path: '/popular', component: PopularList},
        // {path: '/coaches/:id', component: CoachDetail, props: true, children: [
        //     {path: 'contact', component: ContactCoach} // /coaches/c1/contact
        //     ]
        // },
        // {path: '/register', component: CoachRegistration, meta: { requiresAuth: true}},
        // {path: '/requests', component: RequestReceived, meta: { requiresAuth: true}},
        // {path: '/auth', component: UserAuth, meta: { requiresUnauth: true}},
        {path: '/:notFound(.*)', component: NotFound}

    ]
});

// router.beforeEach(function(to, _, next){
//     if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//         next('/auth');
//     } else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
//         next('/coaches')
//     } else {
//         next();
//     }
// })

export default router;