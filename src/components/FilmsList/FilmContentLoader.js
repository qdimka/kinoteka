import React from 'react';
import ContentLoader from "react-content-loader";

const FilmContentLoader = () => (
    <ContentLoader
        width={800}
        height={600}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
        <rect x="0" y="0" rx="2" ry="2" width="200" height="140" />
        <rect x="0" y="146" rx="2" ry="2" width="200" height="16" />

        <rect x="220" y="0" rx="2" ry="2" width="200" height="140" />
        <rect x="220" y="146" rx="2" ry="2" width="200" height="16" />

        <rect x="440" y="0" rx="2" ry="2" width="200" height="140" />
        <rect x="440" y="146" rx="2" ry="2" width="200" height="16" />
    </ContentLoader>
);

export default FilmContentLoader;