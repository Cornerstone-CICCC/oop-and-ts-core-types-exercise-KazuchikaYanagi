"use strict";
// Exercise: Create a function `setTheme` that accepts a parameter with the literal type 'dark' or 'light'.
// The function should return a string saying "Theme set to [theme]".
// let theme: "dark" | "light";
function setTheme(theme) {
    return `Theme set to ${theme}`;
}
console.log(setTheme("dark"));
// Expected output: "Theme set to dark"
