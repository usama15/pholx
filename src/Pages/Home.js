import React from 'react';
import {Card} from "react-bootstrap";
import {Button} from "@material-ui/core";
import './style.css'

const Home = () => {
    return(
        <div>
            <img className='img' src='https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png' alt='headphone'/>
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
            <div className='row1'>
                <img className='img1' src='https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Mask-Group-5-1.png' alt='earphone'/>
                 <Card className='card2' >
                <Card.Body>
                <span className='sub2'>
                    Enjoy
                </span>
                <Card.Title className='sub1'>
                    With
                </Card.Title>
                <span className='sub3'>
                    EARPHONE
                </span>
                </Card.Body>
                <Button variant='contained' className='btn1'>Browse</Button>
            </Card>
                <img className='img2' src='https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/clay-apple-watch-mockup-07.png' alt='watch'/>
                <Card className='card3' >
                    <Card.Body>
                        <span className='sub2'>
                            New
                        </span>
                        <Card.Title className='sub1'>
                            Wear
                        </Card.Title>
                        <span className='sub4'>
                            GADGETS
                        </span>
                    </Card.Body>
                    <Button variant='contained' className='btn1'>Browse</Button>
                </Card>
                <img className='img3' src='https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Laptop.png' alt='laptop'/>
                 <Card className='card4' >
                    <Card.Body>
                        <span className='sub2'>
                            Trend
                        </span>
                        <Card.Title className='sub1'>
                            Devices
                        </Card.Title>
                        <span className='sub5'>
                            LAPTOP
                        </span>
                    </Card.Body>
                    <Button variant='contained' className='btn2'>Browse</Button>
                </Card>
            </div>

        </div>
    )
}
export default Home;