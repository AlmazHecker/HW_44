import React, { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INIT_STATE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_STATE);

  const addExpenseHandler = (expense) => {
    console.log(expense);

    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* TODO: передаем данные как пропс */}
      <Expenses expenses={expenses} />
      <div>
        hello


      </div>
    </div>
  );
}

export default App;


// {
//   "explorer.confirmDelete": false,
//   "liveServer.settings.donotShowInfoMsg": true,
//   "workbench.iconTheme": "vscode-icons",
//   "vscodeGoogleTranslate.preferredLanguage": "English",
//   "files.autoSave": "onFocusChange",
//   "editor.formatOnSave": true,
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "[json]": {
//     "editor.quickSuggestions": {
//       "strings": true
//     },
//     "editor.suggest.insertMode": "replace"
//   },
//   "prettier.singleQuote": true,
//   "workbench.editor.untitled.hint": "hidden",
//   "vsicons.dontShowNewVersionMessage": true,
//   "security.workspace.trust.untrustedFiles": "open",
//   "workbench.colorTheme": "Visual Studio Dark"
// }
