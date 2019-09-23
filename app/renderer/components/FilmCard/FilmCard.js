import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import classes from './FilmCard.module.css';

const FilmCard = ({url, title, description, year}) => (
  <Card className={classes.item}>
    <CardImg top width="100%" src={url}/>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText className="text-truncate">
        {description}
      </CardText>
      <CardText>
        <small className="text-muted">{year}</small>
      </CardText>
    </CardBody>
  </Card>
);

export default FilmCard;
