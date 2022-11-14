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

// ⭐️class名でHTML要素を取得
document.getElementsByClassName('sampleP').item(0).style.color = 'blue';

// (2)画像を変更する
const sam1 = document.getElementById('sam1');
sam1.src = 'img/image1.png';


//③イベント(クリック)を使ってみる！

//クリックごとに画像が変わる
let photoCount = 1;

const btn = document.getElementsByTagName('input').item(0);
btn.addEventListener('click', () => {
    // let randomNum = Math.floor(Math.random()*4) + 1;
    // sam1.src = 'img/image' + randomNum + '.png';
    if (photoCount === 4) {
        photoCount = 1;
    } else {
        photoCount++;
    }
    document.getElementsByClassName('countP').item(0).textContent = photoCount + '枚目';
    sam1.src = 'img/image' + photoCount + '.png';
});