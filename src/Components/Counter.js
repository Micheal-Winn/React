// import React from "react";

// export default class Counter extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             counter : this.props.initalValue
//         }
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this)
//     }
//     componentDidMount(){
//         console.log('componentDidMount')
//     }
//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }
//     increment()
//     {
//         console.log('Inc');
//         // this.setState({
//         //     counter : this.state.counter + this.props.incValue
//         // })

//         this.setState((state,props)=>({
//             counter : state.counter + props.incValue
//         }))
//     }
//     decrement()
//     {
//         console.log('Dec');
//         // this.setState({
//         //     counter : this.state.counter - this.props.incValue
//         // })

//         this.setState((state,props)=>({
//             counter : state.counter - props.incValue
//         }))
//     }

//     render(){
//         console.log('render');
//         return(
//             <div>
//                 Counter
//                 <button type="button" onClick={this.increment}>+</button>
//                 &nbsp;{this.state.counter}&nbsp;
//                 <button type="button" onClick={this.decrement}>-</button>
//             </div>
//         )
//     }
// }