import Vue from 'vue'
import VueRouter from 'vue-router'

import OverView from '../components/content/OverView.vue'
import ViewHashtag from '../components/content/ViewHashtag.vue'
import ViewTopic from '../components/content/ViewTopic.vue'

// Remove this when deploying project
import Test from '../components/content/Test.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: OverView,
        },
        {
            path: '/viewhashtag',
            component: ViewHashtag
        },
        {
            path: '/viewtopic',
            component: ViewTopic
        },
        {
            path: '/test',
            component: Test
        }
    ]
});