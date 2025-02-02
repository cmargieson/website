import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

export default function OptimizedImage({ publicId }) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dbcp4hopu',
        },
    });

    const myImage = cld.image(`${publicId}`);

    myImage.quality('auto').format('auto');

    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    );
}