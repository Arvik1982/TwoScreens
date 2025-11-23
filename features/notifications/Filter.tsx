import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Filter() {
  const filterItems = ['All', 'Payments', 'System', 'Delivery', 'Travel'];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selectItemFunction = (index: number): void => {
    setSelectedItemIndex(index);
  };
  return (
    <ThemedView style={styles.container}>
      {filterItems.map((item, index) => {
        return (
          <TouchableOpacity
            key={index + item}
            style={{
              padding: 12,
              borderBottomColor:
                index === selectedItemIndex ? '#FE5900' : '#1F1F1F',
              borderBottomWidth: index === selectedItemIndex ? 2 : 1,
            }}
            onPress={() => selectItemFunction(index)}
          >
            <ThemedText
              darkColor={index === selectedItemIndex ? '#FE5900' : '#AEAEAE'}
            >
              {item}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
