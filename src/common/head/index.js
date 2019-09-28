import React,{Component} from "react"

export default class Head extends Component{

    render(){
       return (
           <HeadStyled>
                <div>
                    <i className="iconfont">\ue502</i>
                    <div className="but">
                        <i className="iconfont">&#xe504;</i>|<i className="iconfont">&#xe63e;</i><span>婴幼儿奶粉</span>
                    </div>
                    <a href="login">登陆</a>
                </div>
           </HeadStyled>
       )
    }
}