import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  View,
  Pressable as PressButton,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  Text,
  Platform,
} from 'react-native';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsMountedRef } from '../../helpers/useIsMountedRef';

// https://www.instantwebtools.net/fake-rest-api#read-passenger-by-id
const URL = 'https://api.instantwebtools.net/v1/passenger';
// https://api.instantwebtools.net/v1/passenger?page=2&size=10

type Passenger = {
  _id: string;
  name: string;
  airline: Array[{
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    head_quaters: string;
    website: string;
    established: string;
  }];
};

const LIMIT_ITEM_LENGTH = 10;

const FlatListPagination = () => {
  // Define State
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const [passengers, setPassengers] = useState<Passenger | []>([]);
  const [nextPage, setNextPage] = useState<number | null>(null);

  const insets = useSafeAreaInsets();
  const isMounted = useIsMountedRef();

  const onRefresh = useCallback(() => {
    console.log('IS REFRESH: ', isRefreshing);
    setIsRefreshing(true);
  }, []);

  const handleLoadMore = useCallback(() => {
    console.log('IS LOAD MORE: ', isLoadMore);
    if (!isLoadMore && nextPage) {
      setIsLoadMore(true);
    }
  }, [isLoadMore, nextPage]);

  useEffect(() => {
    if (isRefreshing) {
      getListPassengers(true);
    }
  }, [isRefreshing]);

  useEffect(() => {
    if (isLoadMore) {
      getListPassengers(false, true);
    }
  }, [isLoadMore, nextPage]);

  const addListPassengers = (
    listPassenger: Array<Passenger>,
    nextPage: number,
  ) => {
    setPassengers([...passengers, ...listPassenger]);
    setNextPage(nextPage);
  };

  const setListPassengers = (
    listPassenger: Array<Passenger>,
    nextPage: number,
  ) => {
    setPassengers(listPassenger);
    setNextPage(nextPage);
  };

  const getListPassengersAPI = async (page: number, limitRecord: number) => {
    console.log('getListPassengersAPI page: ', page);
    const dataResponse = await axios.get(
      `${URL}?page=${page}&size=${limitRecord}`,
    );

    return { data: dataResponse.data.data, nextPage: ++page };
  };

  const getListPassengers = async (
    forceRefresh: boolean = false,
    loadMore: boolean = false,
  ) => {
    try {
      const result = await getListPassengersAPI(
        !forceRefresh ? nextPage : 0,
        LIMIT_ITEM_LENGTH,
      );
      console.log('RESULT DATA: ', result);
      if (!isMounted) {
        return;
      }

      if (nextPage && loadMore) {
        setIsLoadMore(false);
        addListPassengers(result.data, result.nextPage);
      } else {
        setIsRefreshing(false);
        // setPassengers([]);
        setListPassengers(result.data, result.nextPage);
      }
    } catch (error) {
      console.log('GET LIST DOCTOR ERROR: ', error);
    }
  };

  const onKeyGenerate = (item: Passenger, index: number) => `${item._id}`;

  const onRenderItem = ({
    item,
    index,
  }: {
    item: Passenger;
    index: number;
  }) => (
    <PressButton
      onPress={() => {}}
      style={{
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        width: Platform.OS === 'android' ? 300 : 280,
        borderRadius: 12,
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
    </PressButton>
  );

  const onRenderEmptyList = useMemo(
    () => (
      <View
        style={{
          flex: 1,
          marginTop: 180,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>
          Currently there is no data to display.
        </Text>
      </View>
    ),
    [],
  );

  const onRenderFooter = useMemo(() => {
    return (
      (isLoadMore && (
        <View style={{ width: '100%', paddingTop: 6 }}>
          <ActivityIndicator color={'#34C759'} size="small" />
        </View>
      )) ||
      null
    );
  }, [isLoadMore]);

  return (
    <View
      style={[
        { flex: 1, backgroundColor: 'white' },
        { paddingTop: insets.top },
      ]}>
      <FlatList
        style={[
          { flex: 1, backgroundColor: '#F6F9FF', paddingBottom: insets.bottom },
        ]}
        contentContainerStyle={{ padding: 16, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            colors={['#34C759']}
            tintColor={'#34C759'}
            onRefresh={onRefresh}
          />
        }
        data={passengers}
        keyExtractor={onKeyGenerate}
        renderItem={onRenderItem}
        ListEmptyComponent={onRenderEmptyList}
        initialNumToRender={9}
        removeClippedSubviews={passengers.length > LIMIT_ITEM_LENGTH}
        maxToRenderPerBatch={9}
        windowSize={19}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={onRenderFooter}
      />
    </View>
  );
};

export default React.memo(FlatListPagination);
