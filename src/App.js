/// external modules ///
import React from 'react';

/// styles ///
import './styles/App.css';

/// data ///
import { protoPerson , listOfPersons } from './data/persons';
import { protoTeam , listOfTeams } from './data/teams';

/***************************************
  STATES
***************************************/
const init = {
  'persons' : listOfPersons,
  'person' : protoPerson,
  'teams' : listOfTeams,
  'team' : protoTeam,
};

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <div className="App">
    </div>
  );
}

/**************************************/
export default App;
