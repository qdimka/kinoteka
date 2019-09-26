import React from 'react';
import { Badge, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import classes from './FilmCard.module.css';

const FilmCard = ({imageUrl, title, year, quality}) => (
  <Card className={classes.item}>
    <CardImg top width="100%" src={imageUrl}/>
    <CardBody>
      <CardTitle className="text-truncate">{title}</CardTitle>
      <CardText>
        <small className="text-muted">{year}</small>
        <Badge color="secondary">{quality}</Badge>
      </CardText>
    </CardBody>
  </Card>
);

export default FilmCard;
