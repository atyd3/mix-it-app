import {createRouter, createWebHistory} from "vue-router";

import coctailsList from './pages/cocktails/cocktailsList';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: coctailsList},
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