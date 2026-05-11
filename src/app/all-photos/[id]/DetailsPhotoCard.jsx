import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const DetailsPhotoCard = ({ photo }) => {
    console.log('DetailsPhotoCard', photo)
    return (
        <div>
            <Card className='w-1/2 mx-auto'>

                <div className='relative w-full aspect-square'>
                    <Image src={photo.imageUrl} alt={photo.title} fill className='object-cover rounded-xl' ></Image>
                    <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
                </div>
                <h3 className='text-xl font-bold'>{photo.title}</h3>
                <div className='flex gap-2'>
                    {
                        photo.tags.map((tag, ind) => <Chip key={ind}>{tag}</Chip>)
                    }
                </div>
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
                <div>
                    <p><span className='font-bold'>Prompt: <br /> </span>{photo.prompt}</p>
                </div>
                <div className='space-x-4'>
                    <Link href={`/all-photos`}>
                        <Button className={'flex-1'}>All Photos</Button>
                    </Link>
                    <Link href={`/`}>
                        <Button className={'flex-1'}>Home</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default DetailsPhotoCard;