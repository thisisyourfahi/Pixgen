export const getAllPhotos = async () => {
    const res = await fetch('https://pixgen-fahiyan.vercel.app/data.json');
    const data = await res.json();
    return data;
} 