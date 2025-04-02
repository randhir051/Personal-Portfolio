import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';


const SimpleImageCollage = () => {

    const photos = [
        {
            src: "./workshop_albela.jpeg",
            width: 4,
            height: 4.2,
            title: "Workshop at Albela house"
        },
        {
            src: "./AlbelaHouseMural.jpeg",
            width: 6,
            height: 3.5,
            title: "A wall art at Albela House"
        },
        {
            src: "./AlbelaHousePerformance.jpeg",
            width: 5,
            height: 4,
            title: "Draupadi: a collaborative act illustrating the life of Draupadi with a twist."
        },
        {
            src: "./Burnout.jpg",
            width: 5,
            height: 4,
            title: "Burnout"
        },
        {
            src: "./TheCloset.jpg",
            width: 5,
            height: 5,
            title: "Illustration of a kid in a closet"
        },
        {
            src: "./RMF2.jpg",
            width: 9,
            height: 6,
            title: "Design for RMF 2.0"
        },
        {
            src: "./sunflower.jpg",
            width: 6,
            height: 6,
            title: "A tiny sculpture of a kid holding sunflower"
        },
        {
            src: "./skeleton.jpg",
            width: 3,
            height: 4,
            title: "Autumn"
        },
        {
            src: "./fade.jpg",
            width: 5,
            height: 5,
            title: "Breakup"
        },
        {
            src: "./samsar.jpg",
            width: 11,
            height: 5.5,
            title: "How the world churns"
        },
        {
            src: "./Coffee.jpeg",
            width: 4,
            height: 5.5,
            title: "Puck with a cup earring"
        },
        {
            src: "./hugs.jpg",
            width: 4,
            height: 4,
            title: "Intimacy"
        },
        {
            src: "./sun.jpg",
            width: 4,
            height: 4,
            title: "Illustration of celestial masculine and feminine"
        },
        {
            src: "./coffee_set.jpg",
            width: 4,
            height: 4,
            title: "Illustration of celestial masculine and feminine"
        },
        {
            src: "./tabla.jpeg",
            width: 4,
            height: 3.5,
            title: "Illustration of celestial masculine and feminine"
        },
        {
            src: "./leafy.jpg",
            width: 4,
            height: 3,
            title: "Illustration of celestial masculine and feminine"
        },
    ];

    return (
        <div className="m-lg-g p-lg-5">
            <div className="align-self-auto m-auto mx-auto mx-5 align-items-center align-middle align-self-center">
                <Gallery photos={photos}
                         columns={3}
                         direction={'column'}

                         margin={5} />
            </div>
        </div>
    )

};

export default SimpleImageCollage;