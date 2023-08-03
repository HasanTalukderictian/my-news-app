import React from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate non nihil quos molestiae placeat distinctio veniam esse aut laborum. Pariatur nisi, at quas dolorem iusto iure consectetur possimus qui in sed harum ex doloribus. Itaque maxime veritatis illo perferendis, neque sequi atque, qui quo modi quos voluptatibus quod voluptatum!</p>
            <p>Go Back to Register<Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;