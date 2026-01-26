/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


*/

const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
    ];

//Tasks:
    //1. filter() all credit transactions
    let creditTransactions = transactions.filter(txn => txn.type === "credit");
    //2. map() to extract only transaction amounts
    let transactionAmounts = transactions.map(txn => txn.amount);
    //3. reduce() to calculate final account balance
    let finalBalance = transactions.reduce((acc, txn) => acc + (txn.type === "credit" ? txn.amount : -txn.amount), 0);
    //4. find() the first debit transaction
    let firstDebitTransaction = transactions.find(txn => txn.type === "debit");
    //5. findIndex() of transaction with amount 10000
    let index = transactions.findIndex(txn => txn.amount === 10000);