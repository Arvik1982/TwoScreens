import BillsonImg from '@/assets/images/Billson.jpg';
import NetflixImg from '@/assets/images/Nfx.png';
import StarbucksImg from '@/assets/images/Sbks.png';
import { Colors } from '@/constants/colors';
import { GroupedTransactions, Transaction } from '@/types/types';
import React, { memo, useMemo } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const imageMap = {
    'Billson.jpg': BillsonImg,
    'Sbks.jpg': StarbucksImg,
    'Nfx.jpg': NetflixImg,
  };

  const groupedTransactions = useMemo((): GroupedTransactions[] => {
    const groups: { [key: string]: Transaction[] } = {};

    transactions.forEach((transaction) => {
      const dateOnly = transaction.date.split(',')[0].trim();

      if (!groups[dateOnly]) {
        groups[dateOnly] = [];
      }
      groups[dateOnly].push(transaction);
    });

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const getGroupTitle = (
      dateString: string,
      customToday?: Date,
      customYesterday?: Date,
    ): string => {
      const months: { [key: string]: string } = {
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Apr',
        May: 'May',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dec',
      };

      const [monthStr, dayStr] = dateString.split(' ');
      const day = parseInt(dayStr);
      const month = months[monthStr];

      const currentYear = new Date().getFullYear();
      const transactionDate = new Date(
        currentYear,
        Object.keys(months).indexOf(monthStr),
        day,
      );

      // Используем кастомные даты или текущие по умолчанию
      const today = customToday || new Date();
      const yesterday = customYesterday || new Date(today);
      if (!customYesterday) {
        yesterday.setDate(yesterday.getDate() - 1);
      }

      if (transactionDate.toDateString() === today.toDateString()) {
        return 'Today';
      }

      if (transactionDate.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      }

      return `${month} ${day}`;
    };

    const customToday = new Date(2025, 5, 9); // 9 June 2025
    const customYesterday = new Date(2025, 5, 8); // 8 June 2025

    return Object.keys(groups).map((date) => ({
      title: getGroupTitle(date, customToday, customYesterday),
      data: groups[date],
    }));
  }, [transactions]);

  const renderTransaction = (transaction: Transaction) => {
    return (
      <ThemedView
        lightColor={Colors.light.backgroundItem}
        darkColor={Colors.dark.backgroundItem}
        key={transaction.id}
        style={styles.transactionItem}
      >
        <ThemedView
          style={styles.transactionLeft}
          lightColor={Colors.light.backgroundItem}
          darkColor={Colors.dark.backgroundItem}
        >
          <ThemedView
            style={[
              styles.transactionIcon,
              !transaction.img && styles.iconAdditional,
            ]}
            lightColor={Colors.light.backgroundItem}
            darkColor={Colors.dark.backgroundItem}
          >
            {transaction.img ? (
              <Image
                style={styles.transactionImg}
                source={imageMap[transaction.img as keyof typeof imageMap]}
              ></Image>
            ) : (
              <ThemedText darkColor="#0F0F0F">
                {transaction.name.charAt(0)}
              </ThemedText>
            )}
          </ThemedView>
          <ThemedView
            lightColor={Colors.light.backgroundItem}
            darkColor={Colors.dark.backgroundItem}
          >
            <ThemedText type="defaultMedium">{transaction.name}</ThemedText>
            <ThemedView
              lightColor={Colors.light.backgroundItem}
              darkColor={Colors.dark.backgroundItem}
            >
              <ThemedView
                lightColor={Colors.light.backgroundItem}
                darkColor={Colors.dark.backgroundItem}
                style={styles.transactionType}
              >
                <ThemedView
                  lightColor={Colors.light.backgroundItem}
                  darkColor={Colors.dark.backgroundItem}
                  style={styles.dot}
                ></ThemedView>
                <ThemedText style={{ color: '#B3B3B3' }} type="default">
                  {transaction.type}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView
          lightColor={Colors.light.backgroundItem}
          darkColor={Colors.dark.backgroundItem}
        >
          <ThemedText type="defaultMedium">
            ${Math.abs(transaction.summ).toFixed(2)}
          </ThemedText>
          <ThemedText style={{ color: '#B3B3B3' }} type="default">
            {transaction.date}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    );
  };

  const renderDayGroup = (group: GroupedTransactions) => (
    <ThemedView key={group.title} style={styles.dayGroup}>
      <ThemedText style={{ fontSize: 16 }} type="defaultMedium">
        {group.title}
      </ThemedText>
      <ThemedView style={styles.transactionsList}>
        {group.data.map(renderTransaction)}
      </ThemedView>
    </ThemedView>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {groupedTransactions.map(renderDayGroup)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dayGroup: {
    marginBottom: 24,
    gap: 10,
  },

  transactionsList: {
    backgroundColor: 'transparent',
    borderRadius: 0,
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    gap: 12,
    borderRadius: 16,
    padding: 16,
    marginBottom: 3,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  iconAdditional: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionImg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dot: { width: 6, height: 6, borderRadius: 50 },
});

export default memo(TransactionList);
