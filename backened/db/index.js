const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('Mongodb url/Expense-tracking-app');

// Define schemas
const AdminSchema = mongoose.Schema({
    username : String,
    password : String
});

const IncomeSchema = new mongoose.Schema({
    title : String,
    income : Number, 
});

const ExpenseSchema = new mongoose.Schema({
    expensetitle : String,
    expense : Number, 
});

const Admin = mongoose.model('Admin', AdminSchema);
const Income = mongoose.model('Income', IncomeSchema);
const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = {
    Admin,
   Income,
   Expense
}