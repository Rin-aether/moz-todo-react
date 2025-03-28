export const ColorfulMessage = (props) => {
  //    const ColorfulMessage = ({color, children })
  // のように、引数の時点で分割代入することも可能
  const { color, children } = props;
  const style = {
    color: color,
    fontSize: "20px",
  };
  return <h1 style={style}>{children}</h1>;
  //   props.childrenを使えば、タグで囲った内容がそのまま使える
};
