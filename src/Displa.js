import React, { Component } from 'react'
import Comp from './Comp'
import { Card, CardHeader,CardContent } from '@mui/material'
export default class Displa extends Component {
    constructor(props){
        super(props)
        
        this.state={
            buybit:'no show',
            sellbit:'no show',
            buyeth:'no show',
            seleth: 'no show'
        }
    }
    printpolygondata(){
        let arr=[]
        let str=['bitcoin','ethereum']
        let k=0
        for(let i of this.props.polygon){
arr.push(
    <Card style={{textAlign:'center'}}>
    <Comp 
    data={i}
    name={'polygon'}
    crypto={str[k]}
    />
    </Card>
    )
k=k+1
    }
    return arr
}

    printkrakendata(){
        let arr=[]
        let str=['bitcoin','ethereum']
        let k=0
        for(let i of this.props.kraken){
arr.push(
    <Card style={{textAlign:'center',backgroundColor:'#222222',color: '#dee4e7'}}>
    <Comp 
    data={i}
    name={'kraken'}
    crypto={str[k]}
    />
    </Card>
    )
k=k+1
    }
    return arr
    }
    recommendether=()=>{
        let selether=''
        let buyether=''
        if(this.props.polygon.length===0 ||this.props.polygon[0].length===0 ){
            return
        }
        if(this.props.polygon[1][0]>this.props.kraken[1][0]){
        this.setState({
            seleth:'polygon'
        })
        }
        else{
            this.setState({
                seleth:'kraken'
            })
        }
        if(this.props.polygon[1][1]>this.props.kraken[1][1]){
            this.setState(
                {
                    buyeth: 'kraken'
                }
            )
            }
            else{
                this.setState(
                    {
                        buyeth: 'polygon'
                    }
                )
            }
    }
    recommendbit=()=>{
        let selbit=''
        let buybit=''
        if(this.props.polygon.length===0 || this.props.polygon[0].length===0){
            return
        }
        if(this.props.polygon[0][0]>this.props.kraken[0][0]){
        this.setState({
            sellbit: 'polygon'
        })
        }
        else{
            this.setState({
                sellbit: 'kraken'
            })
        }
        if(this.props.polygon[0][1]>this.props.kraken[0][1]){
            this.setState({
                buybit:'kraken'
            })
            }
            else{
                this.setState({
                    buybit:'polygon'
                })
            }
    }
componentDidMount(){
    {this.recommendbit()}
    {this.recommendether()}
}

    render() {
        return (
            
            
            <div>

                <Card style={{textAlign:'center',backgroundColor:'#dee4e7'}}>
                
                    <CardContent>
                    <h1>Recommendations </h1>
                    
                    <p>
                        {'Buy Bitcoin from  '+this.state.buybit}

                    </p>
                    <p>
                    {'Sell Bitcoin on  ' +this.state.sellbit}

                    </p>
                    <p>
                        {'Buy Etherum from  '+this.state.buyeth}

                    </p>
                    <p>
                        {'Sell Ethereum on  '+this.state.seleth}

                    </p>
                    </CardContent>

                </Card>
                {this.printpolygondata()}
                
                {this.printkrakendata()}
                



            </div>
             

        )
    }
}
