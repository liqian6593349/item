import Loadable from "react-loadable"
import Loading from "../common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})

const Assemble = Loadable({
    loader:()=>import("./assemble"),
    loading:Loading
})

const ShoppingCart = Loadable({
    loader:()=>import("./shoppingCart"),
    loading:Loading
})

const My = Loadable({
    loader:()=>import("./my"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export {
    Home,
    Classify,
    Assemble,
    ShoppingCart,
    My,
    Login,

}
