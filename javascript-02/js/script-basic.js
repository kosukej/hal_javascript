// 1. ログ出し
console.log('script-basic.js is now loaded');

// 2. htmlタグの利用
document.write("<h2>JS</h2>");

// 3. 連結
let userName = "Taro";
document.write('<h2>' + userName + '</h2>');

// 4. 構造の書き出し(留意が必要な例 例: <imgタグ>)
document.write('<img src="img/image1.png" alt="1">');

// 6. リンクの追加
document.write('<a href="https://www.google.com/">Googleへ</a>');

// ②プロパティの制御方法

// 1. ドキュメントの背景色
document.bgColor = '#5ababa'; // background color
document.fgColor = 'white'; // foreground color

// ③document以外のオブジェクト

// 1. アラート
// window.alert('Hello JS!');

// 2. プロンプト
// window.prompt('what is your name?', 'Enter your name');


// 4. 変数の活用
// 変数の種類(宣言)
// その1： 格納する値が変化する(通常の変数) let 変数名 = 初期値;
// その2： 格納する値が変化しない(定数) const 変数名 = 初期値;

let secondUserName = "春太郎";
document.write('<h2>' + secondUserName + '</h2>');

let inputBgCol = window.prompt('背景色を入力してください', '背景色');
document.bgColor = inputBgCol;

let inputFgCol = window.prompt('文字色を入力してください', '文字色');
document.fgColor = inputFgCol;


// h1の文字色をコントロールする
document.getElementsByTagName('h1').item(0).style.color = 'red';

// DOM(DocumentObjectModel)
// 読み込まれた位置でjsファイルは実行されるされる