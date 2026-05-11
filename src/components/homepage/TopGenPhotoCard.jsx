import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const TopGenPhotoCard = ({ photo }) => {
    console.log('photo card:', photo);

    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo.imageUrl} alt={photo.title} fill className='object-cover rounded-xl' ></Image>
                <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div className='space-y-1'>
                <h3>{photo.title}</h3>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <FaHeart />
                        <p>{photo.likes}</p>
                    </div>
                    <Separator orientation='vertical' />
                    <div className='flex items-center gap-2'>
                        <PiDownloadSimpleBold />
                        <p>{photo.downloads}</p>
                    </div>
                </div>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
                <Button variant='outline' className={'w-full'}>View</Button>
            </Link>
        </Card>
    );
};

export default TopGenPhotoCard;