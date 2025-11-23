import bgGold from '@/shared/assets/images/cards/bgGold.png';
import bgVirtual from '@/shared/assets/images/cards/bgVirtual.png';
import CardTypeIcon from '@/shared/assets/svg/CardIcons/CardTypeIcon';
import data from '@/shared/constants/mockData/data.json';
import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../shared/ui/ThemedText';
import { ThemedView } from '../../shared/ui/ThemedView';

type CardClassType = 'premium' | 'standart';
type CardsType = 'debit' | 'virtual';
type CardItemType = {
  id: number;
  class: CardClassType;
  remainder: string;
  type: CardsType;
  account: string;
};

enum CardsTypeEnum {
  Debit = 'Debit',
  Virtual = 'Virtual',
}

const cardData = data as CardItemType[];

const CardDetailsList = () => {
  const renderItem = ({ item }: { item: CardItemType }) => (
    <ThemedView style={styles.cardsContainerItem}>
      <Image
        source={item.class === 'premium' ? bgGold : bgVirtual}
        style={styles.containerItemImage}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <CardTypeIcon />
        <ThemedText style={styles.remainder} type="defaultSemiBold">
          ${item.remainder}
        </ThemedText>
        <View style={styles.bottom}>
          <ThemedText>
            {item.type === 'debit'
              ? CardsTypeEnum.Debit
              : CardsTypeEnum.Virtual}
          </ThemedText>
          <ThemedText>{item.account}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={cardData}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  content: { gap: 16 },

  cardsContainerItem: {
    width: 142,
    height: 98,
  },
  containerItemImage: {
    width: 142,
    height: 98,
    borderRadius: 16,
  },

  info: {
    position: 'absolute',
    width: 142,
    height: 98,
    padding: 12,
    gap: 8,
  },

  class: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  remainder: {
    fontSize: 18,
    lineHeight: 18,
  },

  type: {
    fontSize: 14,
    color: '#888',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardDetailsList;
