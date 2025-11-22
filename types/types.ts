export interface Transaction {
  id: number;
  date: string;
  summ: number;
  type: string;
  name: string;
  img?: string;
}
export interface Notification extends Transaction {
  description?: string;
  noteType?: string;
  year?: string;
}
export interface GroupedTransactions {
  title: string;
  data: Transaction[];
}

export interface GroupedNotifications {
  title: string;
  data: Notification[];
}

export type TransactionsData = GroupedTransactions[];
