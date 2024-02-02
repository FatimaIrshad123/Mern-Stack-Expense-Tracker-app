const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const { Admin, Income,Expense } = require('../backened/db/index');
const {adminMiddleware} = require('./middleware/admin')
const jwtSecret = 'Fatima'
app.use(cors())
app.use(bodyParser.json());

app.post('/signup', async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    const admin = await Admin.find({username});
    let x = admin.find(x => x.username = username)

    if (typeof(x) == 'undefined'){
        Admin.create({
            username,
            password
        }).then (function (){
            let token = jwt.sign({username},jwtSecret,{expiresIn:'24h'})
            res.json({msg:'Admin created Successfully',token})
        })
    }else{
        res.json({msg : 'Admin already exist'})}
});

app.post('/signin', async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    let admin = await Admin.find({
        username : req.body.username,
        password : req.body.password
    })

    let x = admin.find(x => x.username = username)
    
    if (typeof(x) == "object"){
        let token = jwt.sign({username},jwtSecret)
            res.json({msg:'Login successfully',token})
    }
    else{
        res.status(403).json({msg : 'Incorrect Email or password'})
    }
});

app.post('/income', adminMiddleware,async (req, res) => {
    let title = req.body.title    
    let income = req.body.income;
    const newIncome = await Income.create({
            title,
            income
        })
        res.json(newIncome)
});

app.get('/income', adminMiddleware,async (req, res) => {
        let x = await Income.find({})
        res.json(x)
});

app.post('/expense', adminMiddleware,async (req, res) => {
        let expensetitle = req.body.expensetitle    
        let expense = req.body.expense;
        const newExpense = await Expense.create({
                expensetitle,
                expense
            })
        res.json(newExpense)
}); 

app.get('/expense', adminMiddleware,async (req, res) => {
    let x = await Expense.find({})
    res.json(x)
});

app.get('/me',adminMiddleware,async(req,res)=> {
        res.json({
            user : req.user
        })
    })
    
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
