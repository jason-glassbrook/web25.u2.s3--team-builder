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

      <section id="forms">
        <header>
          <h2>Forms</h2>
        </header>
        <main>

          <section id="person-form">
            <header>
              <h3>Add Person</h3>
            </header>
            <main>
              
            </main>
          </section>

          <section id="team-form">
            <header>
              <h3>Add Team</h3>
            </header>
            <main>
              
            </main>
          </section>

        </main>
      </section>

      <section id="lists">
        <header>
          <h2>Lists</h2>
        </header>
        <main>

          <section id="persons-list">
            <header>
              <h3>Current Persons</h3>
            </header>
            <main>
              
            </main>
          </section>

          <section id="teams-list">
            <header>
              <h3>Current Teams</h3>
            </header>
            <main>
              
            </main>
          </section>

        </main>
      </section>

    </div>
  );
}

/**************************************/
export default App;
