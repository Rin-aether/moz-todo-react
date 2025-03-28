export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-header bg-warning text-white">未完了のTODO</div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, index) => (
          <li
            key={todo}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{todo}</span>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => onClickComplete(index)}
              >
                完了
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onClickDelete(index)}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
