import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import AboutUs from '@/components/AboutUs'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin'


//二级路由
import History from '@/components/about/History'
import Active from '@/components/about/Active'
import Delivery from '@/components/about/Delivery'
import Contact from '@/components/about/Contact'

//三级路由
import Address from '@/components/about/contact/Address'
import Person from '@/components/about/contact/Person'
import Tel from '@/components/about/contact/Tel'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: Home,
            // 'history': History,
            // "delivery": Delivery
        }
    }, {
        path: '/menu',
        name: 'Menu',
        component: Menu
    }, {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs,
        redirect: "/contact",
        children: [{
            path: '/history',
            name: 'History',
            component: History
        }, {
            path: '/active',
            name: 'Active',
            component: Active
        }, {
            path: '/delivery',
            name: 'Delivery',
            component: Delivery
        }, {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            redirect: "/contact/address",
            //默认跳转到上面的网址
            children: [{
                path: '/contact/address',
                name: 'Address',
                component: Address
            }, {
                path: '/contact/tel',
                name: 'Tel',
                component: Tel
            }, {
                path: '/contact/person',
                name: 'Person',
                component: Person
            }]
        }, ]
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }],
    mode: "history"
})