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
  /// states ///
  const [persons , setPersons] = React.useState (init.persons);
  const [teams , setTeams] = React.useState (init.teams);

  /// thing ///
  return (
    <div className="App">
    </div>
  );
}

/**************************************/
export default App;
