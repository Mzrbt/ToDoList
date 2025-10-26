function TodoItem(props) {

  return (

    <li>
      <input
        type="checkbox"
        checked={props.tache.completee}
        onChange={() => props.onToggle(props.tache.id)}
      />
      <span className={props.tache.completee ? 'completed' : ''}>
        {props.tache.texte}
      </span>
      <button onClick={() => props.onDelete(props.tache.id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;