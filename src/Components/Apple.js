import react from "react";

class Apple extends react.Component{
    render(){
        const { appleinfo } = this.props;
       // const {type , color } = appleinfo;
        return (
            <h2>Im {appleinfo.type} Apple {appleinfo.color} color</h2>
        )
    }
}

export default Apple;