const operation = document.getElementById("operation");
const result = document.getElementById("result");
const replaceDiv = document.getElementById("replaceDiv");
const resetBtn = document.getElementById("resetBtn");

operation.addEventListener("change", function () {

    let text = document.getElementById("str").value;

    if (text.trim() === "") {
        result.innerHTML = "Please enter a string.";
        replaceDiv.style.display = "none";
        return;
    }

    result.innerHTML = "";
    replaceDiv.style.display = "none";

    if (this.value === "reverse") {

        let arr = text.split("");

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {

            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        result.innerHTML = "Reverse String: " + arr.join("");
    }

    else if (this.value === "replace") {

        replaceDiv.style.display = "block";
    }

    else if (this.value === "palindrome") {

        let arr = text.split("");

        let left = 0;
        let right = arr.length - 1;
        let isPalindrome = true;

        while (left < right) {

            if (arr[left] !== arr[right]) {
                isPalindrome = false;
                break;
            }

            left++;
            right--;
        }

        if (isPalindrome) {
            result.innerHTML = "The string is a palindrome.";
        }
        else {
            result.innerHTML = "The string is not a palindrome.";
        }
    }

});

function replaceChar() {

    let text = document.getElementById("str").value;
    let oldChar = document.getElementById("oldChar").value;
    let newChar = document.getElementById("newChar").value;

    if (oldChar === "" || newChar === "") {
        result.innerHTML = "Please enter both characters.";
        return;
    }

    let updated = "";

    for (let i = 0; i < text.length; i++) {

        if (text[i] === oldChar) {
            updated += newChar;
        }
        else {
            updated += text[i];
        }

    }

    result.innerHTML = "Final String: " + updated;
}

resetBtn.addEventListener("click", function () {

    document.getElementById("str").value = "";
    document.getElementById("oldChar").value = "";
    document.getElementById("newChar").value = "";
    document.getElementById("operation").selectedIndex = 0;

    replaceDiv.style.display = "none";
    result.innerHTML = "";

});