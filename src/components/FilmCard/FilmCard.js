import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const FilmCard = ( props ) => (
    <Card>
        <CardImg top width="100%" src={props.url}/>
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>
                {props.description}
            </CardText>
            <CardText>
                <small className="text-muted">{props.year}</small>
            </CardText>
        </CardBody>
    </Card>
);

export default FilmCard;