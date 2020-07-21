let regex = /[\W_]/g;
const cleanPalindrome = (str) => str.toLowerCase().replace(regex, '');

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

function palindrome(str) {
    const strPalindrome = cleanPalindrome(str);
    const reversePalindrome = reverseString(strPalindrome);
    if (reversePalindrome === strPalindrome) {
        console.log(true);
        return 'true';
    } else {
        console.log(false);
        return 'false';
    }
}

let str1 = "ibu ratna antar ubi";

let str2 = "kasur ini rusak";

let str3 = "A nut for a jar of tuna.";

let str4 = "Borrow or rob?";

let str5 = "Was it a car or a cat I saw?";

let str6 = "Yo, banana boy!";

let str7 = "UFO tofu?";


palindrome(str1);
palindrome(str2);
palindrome(str3);
palindrome(str4);
palindrome(str5);
palindrome(str6);
palindrome(str7);