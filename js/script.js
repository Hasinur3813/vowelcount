let text = document.getElementById('inputBox');
let countBox = document.getElementById('countBox');

let v = ["a","e", "i", "o", "u",'A','E','I','O','U'];


function vowelCount(str){
    let count = 0;
    for(let vowel of str){
        if (v.includes(vowel)){
            count++;
            countBox.classList.add('active');
        }else{
            countBox.classList.remove('active');
        }
    }
    countBox.innerHTML = count;
}