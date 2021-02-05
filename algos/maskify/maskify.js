// // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen.Instead, we mask it.

// // Your task is to write a function maskify, which changes all but the last four characters into '#'.

//     Examples
// maskify("4556364607935616") == "############5616"
// maskify("64607935616") == "#######5616"
// maskify("1") == "1"
// maskify("") == ""

// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

/* my solution */
function maskify(nums) {
//set the lenght params, If length is more than 4 chars, mask remaining chars
    if (nums.length > 4) {
        // loop in reverse so we can set the 4 chars at the end of the string to be visible
        let reversed = reverse(nums);
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
            // this is the loop that will display the 4 digits at the end of the string
            if (i < 4) {
                newString += reversed[i];
            } else {
                // if its not the last 4 digits we want to hide/hash them out
                newString += '#';
            }
        }
        // send our new string here in reverse so it is in correct order now showint all numbers hashed out except last 4 displayed
        return reverse(newString);
    } else {
        return nums;
    }
}

function reverse(str) {
    return str.split("").reverse().join("");
}

/* other solutions */

// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// // return masked string
// function maskify(cc) {
//     return cc.replace(/.(?=....)/g, '#');
// }

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }


// // return masked string
// function maskify(cc) {
//     cc = cc.split("");
//     for (var i = 0; i < cc.length - 4; i++) {
//         cc[i] = "#";
//     }

//     cc = cc.join("");
//     return cc
// }


// maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

// // card numbers is good
// function maskify(cc) {
//     return cc.slice(-4).padStart(cc.length, '#')
// }


// // return masked string
// function maskify(cc) {
//     return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
// }


// // return masked string
// function maskify(cc) {
//     var maskedString = "";
//     for (var i = 0; i < cc.length; i++) {
//         if (i < cc.length - 4) {
//             maskedString = maskedString + "#";
//         } else {
//             maskedString = maskedString + cc.charAt(i);
//         };
//     }
//     return maskedString;
// }

// // return masked string
// function maskify(cc) {
//     return cc.replace(/(?=.{5})./g, '#')
// }

// const maskify = cc => cc.slice(-4).padStart(cc.length, '#')


// // return masked string
// function maskify(cc) {
//     return cc.substr(0, cc.length - 4).replace(/./g, '#') + cc.substr(-4)
// }

// function maskify(cc) {
//     return cc.split('').reduce(function (p, c, i) {
//         return i < cc.length - 4 ? p + '#' : p + c;
//     }, '');
// }


// function maskify(cc) {
//     var x = cc.length - 4;
//     return x > 0 ? new Array(x + 1).join('#') + cc.slice(x) : cc;
// }


// // return masked string
// function maskify(cc) {
//     return cc.split("").fill("#", 0, (cc.length - 4) > 0 ? (cc.length - 4) : 0).join("")
// }


// // return masked string
// function maskify(cc) {
//     if (cc.length <= 4) return cc
//     else return "#" + maskify(cc.substring(1, cc.length))
// }


// // return masked string
// function maskify(cc) {
//     const len = cc.length - 4
//     return len > 0 ? '#'.repeat(len) + cc.substr(len) : cc
// }