class Str {
    static lower(value) {
        console.log(value.toLowerCase());
    }

    static upper(value) {
        console.log(value.toUpperCase());
    }

    static capitalize(value) {
        console.log(
            value
            .split(" ")
            .map((value) => value.toLowerCase().replace(value.charAt(0), value.charAt(0).toUpperCase()))
            .join(" ")
        );
    }

    static reverse(value) {
        console.log(value.split("").reverse().join(""));
    }

    static contains(text, word) {
        if (typeof word === "string") {
            return console.log(text.includes(word));
        }

        if (Array.isArray(word)) {
            return console.log(word.some((value) => text.includes(value)));
        }
    }

    static random(leng = 16) {
        let str = '';
        const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < leng; i++) {
            str += alphanumeric[(Math.floor(Math.random() * alphanumeric.length))]
        }
        console.log(str);
    }

    static count(value) {
        console.log(value.length);
    }

    static countWords(value) {
        console.log(value.split(" ").length);
    }

    static slug(text, cencor = "-") {
        console.log(text.trim().replace(/[^\w ]+/g, '').replace(/ +/g, cencor));
    }

    static trim(text, length = 100, cencor = "...") {
        if (text.length > length) {
            return console.log(text.slice(0, length) + cencor);
        }

        return console.log(text);
    }
    static trimWords(text, length = 30, cencor = "...") {
        if (text.split(" ").length > length) {
            return console.log(text.split(" ").slice(0, length).join(" ") + cencor);
        }
        return console.log(text);
    }
}

Str.lower("MAKAN");
Str.upper("malam");
Str.capitalize("saya ingin makan");
Str.reverse("kasur");
Str.contains("Saya ingin makan sate", "makan");
Str.contains("Saya ingin makan sate", "rujak");
Str.contains("Saya ingin makan sate", ["sate", "rujak"]);
Str.random();
Str.random(6);
Str.random(32);
Str.count("lorem ipsum");
Str.countWords("lorem ipsum");
const title = "JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?";
Str.slug(title); // javascript-typescript-dart-bahasa-mana-yang-akan-populer-di-2018
Str.slug(title, "_"); // javascript_typescript_dart_bahasa_mana_yang_akan_populer_di_2018
const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

Str.trim("Less than 100 characters"); // Less than 100 characters

Str.trim(text); // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

Str.trim(text, 20); // Lorem ipsum dolor si...

Str.trim(text, 20, "·····"); // Lorem ipsum dolor si·····
Str.trimWords("Less than 30 words"); // Less than 30 words

Str.trimWords(text); // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

Str.trimWords(text, 3); // Lorem ipsum dolor...

Str.trimWords(text, 3, "·····"); // Lorem ipsum dolor·····