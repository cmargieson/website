import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function CloudinaryImage({ publicId }) {
    const cld = new Cloudinary({ cloud: { cloudName: 'dbcp4hopu' } });

    const myImage = cld.image(`${publicId}`);

    myImage.quality('auto').format('auto');

    return (<AdvancedImage cldImg={myImage} />);
}