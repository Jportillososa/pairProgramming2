

function vowelChecker(x) {

let Char= x.toLowerCase().charAt(0);


if (Char=== 'a'||Char=== 'e'||Char=== 'i'||Char=== 'o'||Char=== 'u'){
 
    console.log('This is a vowel');
    
}
else{
     console.log('This is not a vowel');
}
}

vowelChecker('a');
