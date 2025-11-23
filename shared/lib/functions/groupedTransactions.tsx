import { monthsList } from '@/shared/constants/constants';
import { GroupedTransactions, Transaction } from '@/types/types';

export const groupTransactions = (
  transactions: Transaction[],
  today = new Date(2025, 5, 9),
  yesterday = new Date(2025, 5, 8),
  dateDisplay = false,
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
    const months = monthsList;

    const [monthStr, dayStr] = dateString.split(' ');
    const day = parseInt(dayStr);
    const month = months[monthStr];

    const currentYear = new Date().getFullYear();
    const transactionDate = new Date(
      currentYear,
      Object.keys(months).indexOf(monthStr),
      day,
    );

    // Получаем год из первой транзакции в группе
    const groupTransactions = groups[dateString];
    const firstTransaction = groupTransactions[0];
    const yearMatch = firstTransaction.date.match(/\d{4}/);

    const today = customToday || new Date();
    const yesterday = customYesterday || new Date(today);

    const year = yearMatch
      ? parseInt(yearMatch[0])
      : customToday?.getFullYear();

    if (!customYesterday) {
      yesterday.setDate(yesterday.getDate() - 1);
    }

    if (transactionDate.toDateString() === today.toDateString()) {
      return dateDisplay ? `Today ${','} ${day} ${month} ` : 'Today';
    }

    if (transactionDate.toDateString() === yesterday.toDateString()) {
      return dateDisplay ? `Yesterday${','} ${day} ${month}` : 'Yesterday';
    }

    return `${day} ${month} ${year}`;
  };

  const customToday = today;
  const customYesterday = yesterday;

  return Object.keys(groups).map((date) => ({
    title: getGroupTitle(date, customToday, customYesterday),
    data: groups[date],
  }));
};
