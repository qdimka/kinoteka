import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import classes from './FilmCard.module.css';

const FilmCard = ( props ) => (
    <Card className={classes.card}>
        <CardImg top width="100%" src={props.url}/>
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText className="text-truncate">
                {props.description}
            </CardText>
            <CardText>
                <small className="text-muted">{props.year}</small>
            </CardText>
        </CardBody>
    </Card>
);

export default FilmCard;