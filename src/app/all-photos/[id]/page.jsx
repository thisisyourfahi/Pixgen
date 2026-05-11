import { getAllPhotos } from '@/lib/fetch-functions';
import React from 'react';
import DetailsPhotoCard from './DetailsPhotoCard';

const PhotoDetails = async ({ params }) => {
    const { id } = await params;

    const photos = await getAllPhotos();
    const photo = photos.find(photo => photo.id == id);

    return (
        <div className="mt-10 space-y-8">
            <h2 className="text-2xl font-bold">Photo Details Page</h2>

            <DetailsPhotoCard photo={photo} />
        </div>
    );
};

export default PhotoDetails;