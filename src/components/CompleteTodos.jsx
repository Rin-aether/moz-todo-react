export const CompleteTodos = ({ todos, onClickBack }) => {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">完了のTODO</div>
        <ul className="list-group list-group-flush">
          {todos.map((todo, index) => (
            <li key={todo} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{todo}</span>
              <button className="btn btn-secondary btn-sm" onClick={() => onClickBack(index)}>
                戻す
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  