import { getAllPhotos } from "@/lib/fetch-functions";
import TopGenPhotoCard from "./TopGenPhotoCard";

const TopGeneration = async () => {
    const data = await getAllPhotos();
    const photos = data.slice(0, 8);
    return (
        <div className="mt-10 space-y-8">
            <h3 className="text-2xl font-bold">Top Generation</h3>
            <div className="grid grid-cols-4 gap-8">
                {
                    photos.map(photo => <TopGenPhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;