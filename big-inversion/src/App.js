
import './App.css';

import PersonCard from './components/PersonCard';

const people = [
  {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"},
  {firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown"},
  {firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown"},
  {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}
]

function App() {
  return (
    <div className="App">
      <PersonCard firstName={people[0].firstName} lastName={people[0].lastName} age={people[0].age} hairColor={people[0].hairColor}/>
      <PersonCard firstName={people[1].firstName} lastName={people[1].lastName} age={people[1].age} hairColor={people[1].hairColor}/>
      <PersonCard firstName={people[2].firstName} lastName={people[2].lastName} age={people[2].age} hairColor={people[2].hairColor}/>
      <PersonCard firstName={people[3].firstName} lastName={people[3].lastName} age={people[3].age} hairColor={people[3].hairColor}/>
    </div>
  );
}

export default App;
