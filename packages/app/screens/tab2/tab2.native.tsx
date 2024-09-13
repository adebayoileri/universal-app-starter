import { FlatList, Image, ActivityIndicator } from 'react-native';
import { Text } from '@/reusables/components/ui/text';
import { View } from '@/reusables/view';
import { useImageQuery } from './query';

export function Tab2() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        status,
        isFetchingNextPage
    } = useImageQuery();

    const renderItem = ({ item }) => (
        <View className="rounded-lg border border-gray-300 p-4 m-2 bg-white">
            <Image
                source={item.source}
                style={{ width: 300, height: 250, alignSelf: 'center' }}
                resizeMode="contain"
            />
        </View>
    );

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    if (status === 'error') {
        return <Text className="text-red-500 text-center">Error loading images</Text>;
    }

    return (
        <FlatList
            data={data?.pages.flatMap(page => page.images)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() =>
                isFetchingNextPage ? <ActivityIndicator size="small" color="#0000ff" /> : null
            }
        />
    );
};