import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { View } from '@/reusables/view';
import splash_image from '@/images/splash_image.png';
import { useImageQuery } from './query';

export function Tab2() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        status,
    } = useImageQuery();

    const ImageCard = ({ item }) => (
        <View className="rounded-lg border border-gray-300 p-4 m-2">
            <Image
                style={{ alignSelf: 'center' }}
                src={splash_image}
                width={300}
                height={250}
                alt="Splash screen image"
            />
        </View>
    );

    if (status === 'error') return <div>Error fetching data</div>;

    const flattenedData = data?.pages.flatMap(page => page.images) ?? [];

    return (
        <View className="flex flex-1">
            <InfiniteScroll
                dataLength={flattenedData.length}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<h4>Loading...</h4>}
                endMessage={<p>Loading...</p>}
            >
                <View className="flex flex-wrap justify-center">
                    {flattenedData.map(item => (
                        <ImageCard key={item.id} item={item} />
                    ))}
                </View>
            </InfiniteScroll>
        </View>
    );
}