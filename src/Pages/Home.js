import React from 'react';
import {Card} from "react-bootstrap";
import {Button} from "@material-ui/core";
import './style.css'

const Home = () => {
    return(
        <div>
            <img className='img' src='https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png'/>
            <Card className='card1' >
                <Card.Body>
                <span className='title2'>
                    Beats Solo
                </span>
                <Card.Title className='title1'>
                    Wireless
                </Card.Title>
                <span className='title3'>
                    HEADPHONE
                </span>
                </Card.Body>
                <Button variant='contained' className='btn'>Shop By Category</Button>
            </Card>

        </div>
    )
}
export default Home;