import clsx from 'clsx';
import axios from 'axios';
import { useRef } from 'react';
import { LoadingPosts } from './LoadingPosts';
import useLazyLoad from '../hooks/useLazyLoad';
import { Gallery } from './Gallery'
import { NUM_PER_PAGE, IMAGES_URL } from '../config';
import { IImage,GridImage } from './Gallery';

export const GalleryPage:React.FC = () => {
    const triggerRef = useRef(null);
    const onGrabData = (currentPage:any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const confidedEndPoint = `${IMAGES_URL}&per_page=${NUM_PER_PAGE}&page=${currentPage}`;
                const data = (await axios.get(confidedEndPoint))?.data;
                const imagesList = data.map((imageInfo:any)=>{
                    return new GridImage(
                        imageInfo.id,
                        imageInfo?.urls?.regular,
                        imageInfo.description,
                        imageInfo.color)
                })
                resolve(imagesList);
            } catch (error) {
                reject(error);
            }
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

    return (
        <div className="gallery">
            <Gallery images={data} />
            <div ref={triggerRef} className={clsx('trigger', { visible: loading })}>
            <LoadingPosts />
            </div>
        </div>
    );
};
