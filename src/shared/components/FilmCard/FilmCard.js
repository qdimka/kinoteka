import React from 'react';
import classes from './FilmCard.module.css';
import { Badge } from 'reactstrap';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/es/CardTitle';
import CardBody from 'reactstrap/lib/CardBody';
import CardImg from 'reactstrap/lib/CardImg';
import Card from 'reactstrap/lib/Card';

const FilmCard = ({ imageUrl, title, year, quality }) => (
  <Card className={classes.item}>
    <CardImg top width="100%" src={imageUrl}/>
    <CardBody>
      <CardTitle className="text-truncate">{title}</CardTitle>
      <CardText>
        <span className={classes.bages}>
          <Badge color="secondary">{year}</Badge>
          <Badge color="success">{quality}</Badge>
        </span>
      </CardText>
    </CardBody>
  </Card>
);

export default FilmCard;
