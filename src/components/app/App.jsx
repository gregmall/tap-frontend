import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterPage from '../containers/character/CharacterPage';
import NewCharacter from '../containers/newcharacter/NewCharacter';
import Detail from '../containers/detail/Detail';
import Header from '../header/Header';
import UpdateCharacter from '../containers/update/UpdateCharacter';


export default function App() {
 
  return (

    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path ="/newcharacter" component= {NewCharacter} />
        <Route exact path ="/detail/:id" component ={Detail} />
        <Route exact path = "/update/:id" component={UpdateCharacter} />
      </Switch>
    </Router>

    </>
  );
}
