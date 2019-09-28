import {
    Home,
    Classify,
    Assemble,
    ShoppingCart,
    My,
    Login,
} from "../pages"

export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue602",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false
        }
    }, {
        key: "/classify",
        path: "/classify",
        name: "分类",
        icon: "\ue503",
        component: Classify,
        exact: true,
        meta: {
            requireAuth: false
        },
        // children:[
        //     {
        //         //二级路由
        //     }
        // ]
    }, {
        key: "/assemble",
        path: "/assemble",
        name: "拼购",
        icon: "\ue654",
        component: Assemble,
        exact: true,
        meta: {
            requireAuth: false
        }
    }, {
        key: "/shoppingCart",
        path: "/shoppingCart",
        name: "购物车",
        icon: "\ue639",
        component: ShoppingCart,
        exact: true,
        meta: {
            requireAuth: true
        }
    }, {
        key: "/my",
        path: "/my",
        name: "我的",
        icon: "\ue655",
        component: My,
        exact: true,
        meta: {
            requireAuth: true
        }
    }
]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes)