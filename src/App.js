// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
      </Switch>
    </Router>
  );
}

export default App;
