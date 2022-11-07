console.log('script-dom.js is now loaded');

// ①HTML要素を取得する(getElemtns~)

// (1)h1の背景色を変更する
const firstH1 = document.getElementsByTagName('h1').item(0); // h1要素を取得
firstH1.style.backgroundColor = 'pink'; // h1要素の背景色を変更

// (2)h1の文字色を変更する
firstH1.style.color = 'limegreen'; // h1要素の文字色を変更

// (3)divの一つ目、(1)背景色、(2)横幅を変更(200px)
const div1 = document.getElementsByTagName('div').item(0); // div要素を取得
div1.style.backgroundColor = 'yellow'; // div要素の背景色を変更
div1.style.width = '200px'; // div要素の横幅を変更

// 定数はconst(再代入不可能なもの), 変数はlet(再代入可能なもの)
// div1 = document.getElementsByTagName('div').item(1) 左のように2回目の代入をするとエラーが発生する

// ②id要素を取得する

// (1)文字色を変更する
const idSample = document.getElementById('sample');
idSample.style.color = 'red';

// (2)srcを変更する
const sam1 = document.getElementById('sam1').style.src = 'img/image4.png'