import React from "react";

class Miao extends React.Component {
    constructor(x,y) {
        super(x,y);
        this.state = {
            x:this.props.x,
            y:this.props.y
        }
    }
    show(){
        if(this.state.x >= this.state.y){
            return this.state.y +"×"+ this.state.x +"="+ this.state.y*this.state.x
        }
    }
    render() { 
        return (
            <th>{this.show()}</th>
        );
    }
}
 
class Item extends React.Component {
    constructor(index) {
        super(index);
        this.state = { 
            index : this.props.index
        }
    }
    get(){
        let arr = [];
        for(let i = 1;i<10;i++){
            arr.push(<Miao x={this.state.index} y={i}/>)
        }
        return arr
    }
    render() { 
        return ( 
            <tr >
                {this.get()}
            </tr>
        );
    }
}
 
class Nine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    get(){
        let arr = [];
        for(let i = 1;i<10;i++){
            arr.push(<Item index={i} />)
        }
        return arr
    }
    render() { 
        return ( 
            <div className="99">
                <table border="1px" cellspacing="0">
                    {this.get()}
                </table>
            </div>
        );
    }
}
 
export default Nine;