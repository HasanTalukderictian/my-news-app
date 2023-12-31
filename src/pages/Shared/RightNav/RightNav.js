import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div className='mt-4'>
           <h4>Login With</h4>
            <Button className='mb-2 ' variant="outline-primary"> <FaGoogle/> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Githb</Button>

            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                 
             </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;