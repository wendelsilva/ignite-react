import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[]);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }


    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    if (!context) {
        throw new Error('useTransactions must be used within a TransactionsProvider');
    }

    return context;
}