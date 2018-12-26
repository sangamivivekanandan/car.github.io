concatString();
replaceString();
findandReplace();

function concatString(){
    var str1 = "Hello ";
    var str2 = "world!";
    var result = str1.concat(str2);
    console.log(result);
}
function replaceString(){
    var myStr = 'Today is monday , It is cloudy';
    var newStr = myStr.replace(/,/g, 'and');
    var newStr1 = myStr.replace(/monday/g, 'saturday');
    console.log( newStr ); 
    console.log( newStr1 ); 
}
function titleCase(str){
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    return words.join(' '); 
}
    console.log(titleCase("all the letter are in small case"));

function palindrome(str){
    var reverseStr = str.split('').reverse().join(''); 
    return reverseStr === str;
}
    console.log( palindrome("nitin"));

function reverse(str){
    var arr = str.split(" ");
    arr.reverse();
    return arr.join(" ");
}
    console.log(reverse("all the letter are in small case"));

function findandReplace(){
    var strng = 'Javascript is awesome';
    var newStrng = strng.replace(/awesome/g, 'impressive');
    console.log( newStrng ); 
}

function count(string, char){
    var result = new RegExp(char, "gi");
    return string.match(result).length;
}
    var str = 'search the no of occurrences OF a word in a sentence';
    console.log(count(str, 'OF')); 