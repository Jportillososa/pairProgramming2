let str1='So dark the con of man';
let str2='Madonna of the Rocks';

function isAnagram(str1,str2)
{
    
    // Get lengths of both strings
    let x1 = str1.length;
    let x2 = str2.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (x1 != x2)
        return false;

    // Sort both strings
    str1.sort();
    str2.sort();

    // Compare sorted strings
    for (let i = 0; i < x1; i++)
        if (str1[i] != str2[i])
            return false;

return true;
}
 
// Function Call
    if (isAnagram(str1,str2))
        console.log("The two strings are anagram of each other");
    else
        console.log("The two strings are not anagram of each other");
    