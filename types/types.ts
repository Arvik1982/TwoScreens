export interface Transaction {
  id: number;
  date: string;
  summ: number;
  type: string;
  name: string;
  img?: string;
}
export interface GroupedTransactions {
  title: string;
  data: Transaction[];
}

export type TransactionsData = GroupedTransactions[];
