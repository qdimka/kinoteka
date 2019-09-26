import React from 'react';
import ContentLoader from "react-content-loader";
import classes from "./FilmCard.module.css";

const FilmCardContentLoader = () => (
    <div className={classes.item}>
        <ContentLoader
            height={480}
            width={350}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb">

            <rect x="0" y="0" rx="5" ry="5" width="350" height="450"/>
            <rect x="0" y="460" rx="5" ry="5" width="350" height="20"/>

        </ContentLoader>
    </div>
);

export default FilmCardContentLoader;