import Home from './components/Home'
import Menu from "./components/Menu"
import Admin from './components/Admin'
import About from "./components/About/About"
import Login from './components/Login'
import Register from "./components/Register"

//二级路由
import Contact from "./components/About/Contact"
import Delivery from "./components/About/Delivery"
import History from "./components/About/History"
import OrderingGuide from "./components/About/OrderingGuide"

//三级路由
import Phone from "./components/About/Contact/Phone"
import PhoneName from "./components/About/Contact/PhoneName"

export const routes = [
    {path: '/',component: Home},
    {path: '/menu',component: Menu},
    {path: '/admin',component: Admin},
    {path: '/about',component: About,redirect:'/contact',children:[
      {path:'/contact',component: Contact,children:[
        {path:'/phone',component: Phone},
        {path:'/phoneName',component: PhoneName},
      ]},
      {path:'/delivery',component: Delivery},
      {path:'/history',component: History},
      {path:'/orderingGuide',component: OrderingGuide}
    ]},
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {path:'*',redirect:'/'}
  ]