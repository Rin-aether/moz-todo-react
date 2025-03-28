function Kakunin() {
  // const name = '倫太郎';
  // const age = 23;
  // const temp = `私は${name}、${age}です`;
  // console.log(temp);

  //()で囲むとオブジェクトをそのまま返せる (1行扱いなのでreturnを省略)
  const func1 = (num1, num2) => ({
    hoge: num1,
    hoge2: num2,
  });
  const test = func1(10, 20);
  console.log(test);

  //////////分割代入//////////////////////////////////////////////////////////
  const myProfile = {
    name: "瑠散花",
    age: 16,
  };
  const { name, age = 20 } = myProfile;
  //分割代入時にもデフォルト値を設定可能
  const message = `私は${name}、${age}歳です`;
  console.log(message);
  //配列の場合は持っている順番に合わせて変数を好きに設定する

  // *
  //   /////オブジェクトの省略記法//////////////////////////////////////////////////
  const name2 = "じゃけえ";
  const age2 = 31;

  // const ProfileEx = {
  //   name2: name2,
  //   age2: age2,
  // };
  //↑こういった 「プロパティ名と設定する変数が同じ場合」 は、１つにして省略可能

  //1行の省略も合わせて、こうなる↓。　一見「分割代入でもしてるのかな…？」　となりがち
  const ProfileEx = { name2, age2 };
  console.log(ProfileEx);

  // *
  ///////////スプレッド構文////////////////////////////////////////////////////
  const arr1 = [1, 2];
  const sumFunc = (num1, num2) => {
    console.log(num1 + num2);
  };
  sumFunc(arr1[0], arr1[1]);
  sumFunc(...arr1); //中身を展開し順番に処理する。　↑と同じになる
  /////まとめるときに
  const arr2 = [1, 2, 3, 4, 5];
  const [num1, num2, ...arr3] = arr2; //分割代入で１.2番目は値を、残りは配列として取り出す
  console.log(num1, num2, arr3);

  //配列のコピー・結合 ←これ大事！！
  const arr4 = [10, 20];
  const arr5 = [30, 40];

  const arr6 = [...arr4]; //全く同じ配列としてコピー
  const arr7 = [...arr4, ...arr5]; //配列と配列を結合
  console.log(arr6, arr7);
  // const arr6 = arr4;
  // コピーならこれでいいんじゃ？と思うかもだけど、これは配列の"参照"を引き継いでしまう

  // *
  ///////////mapやfilterを用いた配列の処理///////////////////////////////////////////
  const nameArr = ["瑠散花", "ミュレク", "海虎", "尨丸"];

  //map()　引数には関数をとる（今回はアロー関数）　　関数の引数には扱う要素を設定（今回はname)
  nameArr.map((name) => {
    console.log(name);
  });

  //returnすると新しい配列を生成可能
  const nameArr2 = nameArr.map((name) => {
    return name;
  });
  console.log(nameArr2);

  //filter 配列をフィルタリングして、新しい配列を生成する
  const numArr = [1, 2, 3, 4, 5];
  const newNumArr = numArr.filter((filterNum) => {
    return filterNum % 2 === 1;
  });
  console.log(newNumArr);

  //map応用 引数を二つ取ることもできる indexには”何番目の要素か”格納
  nameArr.map((name, index) =>
    console.log(`${name}は${index + 1}番目の要素です`)
  );
  //特定の条件のみ　さん付け
  // nameArr.map((name, index) => {
  // if (name === "海虎") {
  //   return name;
  // }else{
  //   name = name + "さん";
  //   return `${name}さん`;//新しいのを返す場合はこっち
  // }

  // *
  ///////////三項演算子//////////////////////////////////////////
  const price = 1300;
  // console.log(price.toLocaleString()); 数字を３桁区切りでカンマを打つ。数字じゃないとつかない。
  const formattedPrice =
    typeof price === "number" ? price.toLocaleString() : "数値にしてね";
  console.log(formattedPrice);

  const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? "100超え!" : "100未満!";
  };
  console.log(checkSum(40, 50));

  // *
  ///////////論理演算子//////////////////////////////////////////
  //truthy,falthyについて "ABC",0,10,undifined,null,NaN ,"",[],{}...
  // const val = "ABC";
  // if (val) {
  //   console.log("valはtruthyです");
  // } else {
  //   console.log("valはfalthyです");
  // }
  const num3 = null;
  const fee = num3 || "金額が未設定です"; //or文としての使い方ではなく、比較して当てはまらないと右に行く
  //正確にいうと、||は左側がtruthyの時、その時点で値を返却する。
  console.log(fee);

  const num4 = null;
  const fee2 = num4 && "何かが設定されました";//左側がOKであれば、右の判定に行く　。ダメならもう評価しない。
  //&&は左側がfalthyの時、その時点で値を返却する。
  console.log(fee2);

  return (
    <>
      <p>テストです</p>
    </>
  );
}

export default Kakunin;
