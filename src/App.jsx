import './App.css'
import { useState } from "react";

function App() {

  const [value, setValue] = useState("");

  const [tasks, setTasks] = useState([{id: 1, texte: "Ma tâche", completee: false}, {id: 2, texte: "Tache2", completee: false}]);

  const ajotuerTache = () => {

    if (value.trim() === '') return;

    const nouvelleTache = {
      id: Date.now(),
      texte: value,
      completee: false
    };

    setTasks([...tasks, nouvelleTache]);

    setValue("");

  };

  const supprimerTache = (id) => {

    const nouvelleListe = tasks.filter(tache => tache.id !== id);
    setTasks(nouvelleListe);

  };

  const toogleTache = (id) => {

    const nouvelleListe = tasks.map(tache =>
                            tache.id === id ? {...tache, completee: !tache.completee} : tache
                          )

    setTasks(nouvelleListe);

  }

  return (
    <div>
      <h1>Ma Todo-List</h1>
      
      <div>
        <input 
          type="text" 
          placeholder="Ajouter une tâche..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={ajotuerTache}>Ajouter</button>
      </div>
      <ul>
        {tasks.map((tache) => (
          <li key={tache.id}>
            <input
              type="checkbox"
              checked={tache.completee}
              onChange={() => toogleTache(tache.id)}
            />
            <span className={tache.completee ? 'completed' : ''}>
              {tache.texte}
            </span>
            <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;