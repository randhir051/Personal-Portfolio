import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';


const SimpleImageCollage = () => {

    const photos = [
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//hiramanPagare.jpg",
            width: 4,
            height: 3,
            title: "Beach sunset"
        },
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//IMG_4523.PNG",
            width: 6,
            height: 3,
            title: "City skyline"
        },
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//IMG_6906.HEIC",
            width: 2,
            height: 1,
            title: "Mountain view"
        },
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//Screenshot%202024-09-20%20at%2011.51.37%20AM.png",
            width: 9,
            height: 5,
            title: "Forest trail"
        },
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//Screenshot%202024-09-20%20at%2011.53.58%20AM.png",
            width: 5,
            height: 3,
            title: "Waterfall"
        },
        {
            src: "https://difbckudemwgfuobdige.supabase.co/storage/v1/object/public/images//Screenshot%202024-09-20%20at%2011.58.40%20AM.png",
            width: 8,
            height: 5,
            title: "Desert landscape"
        }
    ];

    return (
        <div className="m-lg-g p-lg-5">
            <div className="align-self-auto m-auto mx-auto mx-5 align-items-center align-middle align-self-center">
                <Gallery photos={photos}
                         columns={1}
                         margin={5} />
            </div>
        </div>
    )

};

export default SimpleImageCollage;