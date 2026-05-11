import TopGenPhotoCard from "@/components/homepage/TopGenPhotoCard";
import { getAllPhotos } from "@/lib/fetch-functions";

const AllPhotosPage = async () => {
    const photos = await getAllPhotos();
    return (
        <div className="mt-10 space-y-8">
            <h3 className="text-2xl font-bold">All Photos</h3>
            <div className="grid grid-cols-4 gap-8">
                {
                    photos.map(photo => <TopGenPhotoCard key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;