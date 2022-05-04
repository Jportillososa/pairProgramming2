///let str = “{hello world}” brackets(srt)

function strBracket(){

    let str1= "(hello world)"
    let x1 = str1.length;

 for (let i = 0; i < x1; i++){


 if (str1[i] ==='{' || '}')
            return true;



else if(str1[i] != '{' || '}')

    return false

}}
console.log(strBracket());

