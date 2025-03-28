export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div className="mb-3 input-wrap">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <button className="btn btn-primary" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
