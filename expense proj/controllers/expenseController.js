
const { Expense } = require('../models');

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.render('expenses', { expenses });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createExpense = async (req, res) => {
  const { description, amount } = req.body;
  try {
    await Expense.create({ description, amount });
    res.redirect('/expenses');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.destroy({ where: { id } });
    res.redirect('/expenses');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.editExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByPk(id);
    res.render('editExpense', { expense });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  try {
    await Expense.update({ description, amount }, { where: { id } });
    res.redirect('/expenses');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
