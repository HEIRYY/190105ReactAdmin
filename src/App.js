import React,{ Component } from 'react'
import { Button,message } from 'antd'
/*
* 应用的根组件
*/
class App extends  Component{
    handleClick=()=>{
        message.success("点我成功了")
    }


    render(){

        return <div>
            <Button type="default"  onClick={this.handleClick}>点我</Button>
        </div>
    }

}
export default App