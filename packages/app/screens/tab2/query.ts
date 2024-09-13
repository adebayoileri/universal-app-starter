import { useInfiniteQuery } from '@tanstack/react-query';
import splash_image from '@/images/splash_image.png';

// Mock API call to fetch images
export const fetchImages = async ({ pageParam = 0 }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const images = Array.from({ length: 10 }, (_, i) => ({
        id: `${pageParam}-${i}`,
        source: splash_image,
    }));

    return { images, nextPage: pageParam + 1 };
};

export const useImageQuery = () => {
    return useInfiniteQuery({
        queryKey: ['images'],
        queryFn: fetchImages,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 0,
    });
};
