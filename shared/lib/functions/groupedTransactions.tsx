import { GroupedTransactions, Transaction } from '@/types/types';

export const groupTransactions = (
  transactions: Transaction[],
  Today = new Date(2025, 5, 9), // 9 June 2025
  Yesterday = new Date(2025, 5, 8), // 8 June 2025
): GroupedTransactions[] => {
  const groups: { [key: string]: Transaction[] } = {};

  transactions.forEach((transaction) => {
    const dateOnly = transaction.date.split(',')[0].trim();

    if (!groups[dateOnly]) {
      groups[dateOnly] = [];
    }
    groups[dateOnly].push(transaction);
  });

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

  const customToday = Today;
  const customYesterday = Yesterday;

  return Object.keys(groups).map((date) => ({
    title: getGroupTitle(date, customToday, customYesterday),
    data: groups[date],
  }));
};
