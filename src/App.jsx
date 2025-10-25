function App() {
  return (
    <div>
      <h1>Ma Todo-List</h1>
      
      {/* Zone d'ajout */}
      <div>
        <input 
          type="text" 
          placeholder="Ajouter une tâche..."
        />
        <button>Ajouter</button>
      </div>

      {/* Zone où les tâches s'afficheront */}
      <ul>
        <li>Exemple de tâche</li>
      </ul>
    </div>
  );
}

export default App;