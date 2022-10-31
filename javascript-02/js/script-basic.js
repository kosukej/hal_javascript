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
document.write('<a href="https://www.google.com/">Google</a>');

// ②プロパティの制御方法

// 1. ドキュメントの背景色
document.bgColor = 'olive'; // background color
document.fgColor = 'white'; // foreground color

// ③document以外のオブジェクト

// 1. アラート
window.alert('Hello JS!');

// 2. プロンプト
var name = window.prompt('what is your name?', 'Enter your name');
document.write('<br>名前: '+ name);