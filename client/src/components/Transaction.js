import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionType =
    transaction.amount < 0 ? 'border-red-400 bg-red-100 text-red-700' : 'border-green-400 bg-green-100 text-green-700';

  return (
    <li
      className={`flex justify-between items-center mb-3 p-3 rounded-xl shadow-sm border ${transactionType}`}
    >
      <span className="font-medium">{transaction.text}</span>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="ml-4 px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        ✖
      </button>
    </li>
  );
};
