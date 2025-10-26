function TodoForm(props) {

  return (

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
  );
}

export default TodoForm;


//TODO