import React from 'react';

const PhotoDetails = async ({params}) => {
    const res = await params;
    console.log(res);
    
    return (
        <div className="mt-10 space-y-8">
            <h2 className="text-2xl font-bold">Photo Details Page</h2>
        </div>
    );
};

export default PhotoDetails;