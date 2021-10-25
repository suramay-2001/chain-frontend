import React, { Component } from 'react'
import Displa from './Displa'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      polygon:[],
      kraken:[],
    }
    
  }
  async loaddata(){
    try{
     let url='http://localhost:3002/values' 
     let cryptdata=await (await fetch(url)).json()
     let newdata=[]
     newdata.push(cryptdata.BTC)
     newdata.push(cryptdata.ETH)
     this.setState({
       polygon: newdata
     })
     newdata=[]
     newdata.push(cryptdata['BTCkrak'])
     newdata.push(cryptdata['ETHUSDT'])
     this.setState(
       {
         kraken:newdata
       }
     )
     newdata=[]
    }
    catch(e){
console.log(e)
    }
  }
 componentDidMount(){
   console.log('reached')
this.loaddata()
 }
  render() {
    return (
      <div>
       <Displa   
       polygon={this.state.polygon}
       kraken={this.state.kraken}
       /> 
        
      </div>
    )
  }
}

