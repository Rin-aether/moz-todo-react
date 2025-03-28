import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./todo.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したよ"]);
  const [todoText, setTodoText] = useState("");

  //HTMLのイベントが発火すると"event"というオブジェクトが渡り、その中のvalueに内容情報が設定されている
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //TODO追加処理
  const onClickAdd = () => {
    //空文字の時は追加しない。if文も1行なら{}を省略できる
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //TODO削除処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //splice(何番目の要素か,消す個数)　この場合、押された箇所から１つ消す。
    setIncompleteTodos(newTodos);
  };

  //TODO完了処理
  const onClickComplete = (index) => {
    //要素削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    //完了リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //各要素を反映
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //TODO戻す処理
  const onClickBack = (index) => {
    //要素削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //未完了リストに移動
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //各要素を反映
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  //TODOの上限数管理
  const isMaxLimitTodos = incompleteTodos.length >= 5;

  return (
    <>
      <div className="container">
        <h1 class="text-center text-secondary fw-bold">TODOリスト</h1>
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={isMaxLimitTodos}
        />
        {isMaxLimitTodos && (
          <h3 style={{ color: "red" }}>
            登録できるTODOは5件までです!消化してください!
          </h3>
        )}

        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />

        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      </div>
    </>
  );
};
