import React,{ Component } from 'react'
import { Button,message } from 'antd'
/*
* 应用的根组件
*/
export default class App extends  Component{
    handleClick=()=>{
        message.success("点我成功了")
    }


    render(){
        return <div>
            <Button type="primary"  onClick={this.handleClick}>点我</Button>
        </div>
    }

}