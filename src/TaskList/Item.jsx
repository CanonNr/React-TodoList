import React from "react";
import "./Item.css";
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    completeFlag(e){
        if(e.target.checked){
            // 完成
        }else{
            // 取消完成
        }
    }
    render() { 
        return ( 
            <div className="item">
                <div>
                    <input type="checkbox" onChange={e=>this.completeFlag(e)}/>
                    <span className="content">2222</span>
                </div>
            </div>
         );
    }
}
 
export default Item;