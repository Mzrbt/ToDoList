import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [value, setValue] = useState("");

  const [tasks, setTasks] = useState(() => {

    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];

  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const tachesRestantes = tasks.filter(tache => !tache.completee).length;

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

  const toutSupprimer = () => {

    setTasks([]);

  }

  const supprimerTachesComp = () => {

    const nouvelleListe = tasks.filter(tache => !tache.completee);
    setTasks(nouvelleListe);

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    ajotuerTache();

  }

  return (
    <div>
      <h1>Ma Todo-List</h1>
      
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ajouter une tâche..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Ajouter</button>
          <button type="button" onClick={toutSupprimer}>Tout Supprimer</button>
          <button type="button" onClick={supprimerTachesComp}>Supprimer les tâches complétées</button>
        </form>
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
      <p>Tâches restantes : {tachesRestantes}</p>
    </div>
  );
}

export default App;