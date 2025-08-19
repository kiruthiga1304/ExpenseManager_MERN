import React, { Component, useState, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-600 bg-red-100 rounded-md">
          <h2 className="text-xl font-bold">Something went wrong in the dashboard.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ✅ AddTransaction Component (Form with rounded inputs & placeholders)
function AddTransactionForm() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount, // convert to number
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter transaction detail..."
        className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount (negative = expense, positive = income)"
        className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}

function Dashboard() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        {/* Main Background */}
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 font-sans text-gray-800">
          
          {/* Header */}
          <div className="shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 sticky top-0 z-10">
            <div className="h-20 flex items-center justify-center">
              <h1 className="text-3xl font-extrabold text-white tracking-wide font-[Poppins]">
                Expense Tracker
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">

              {/* Balance */}
              <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-blue-200 to-indigo-200 text-center">
                <h2 className="text-xl font-bold mb-4">Your Balance</h2>
                <Balance />
              </div>

              {/* Income/Expenses */}
              <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-200 to-pink-200 text-center">
                <h2 className="text-xl font-bold mb-4">Income & Expenses</h2>
                <IncomeExpenses />
              </div>

              {/* Add Transaction */}
              <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-200 to-blue-200 text-center">
                <h2 className="text-xl font-bold mb-6">Add New Transaction</h2>
                <AddTransactionForm /> {/* ✅ Rounded inputs + placeholders */}
              </div>
            </div>

            {/* Right Column */}
            <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-pink-200 to-purple-200 text-center">
              <h2 className="text-xl font-bold mb-4">History</h2>
              <TransactionList />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </ErrorBoundary>
  );
}

export default Dashboard;
