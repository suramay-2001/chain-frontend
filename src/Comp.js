import { CardActions, CardContent } from '@mui/material'
import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
export default class Comp extends Component {
    constructor(props){
super(props)
    }
    render() {
        return (
            <CardContent>
                        <Card.Header>
                       <h1> {this.props.name}</h1>
                        </Card.Header>
                        <Accordion.Body>
                    {console.log(this.props)}
                    <Card>

                    <Card.Title>
                        <h2> {this.props.crypto}</h2>
                    </Card.Title>
                    <Card.Text>
                            {'SELL  '+

                            this.props.data[0]}

                    </Card.Text>

                    <Card.Text>
                            {'BUY  '+
                            this.props.data[1]}
                            
                    </Card.Text>
                    </Card>
                    </Accordion.Body>
                    </CardContent>
        
        )
    }
}
