const passArea = document.querySelector("#password")
const btn = document.querySelector("#generate")
btn.addEventListener("click",()=>{
const generatePass = ()=>{
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["!","@","#","$","%","^","&","*","+","~","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="]

let pass = []
let lowLetter = alphabet.map((a) =>a.toLowerCase())
let sum = [...alphabet,...lowLetter]
for(let i = 0;i<3;i++){
    const num = Math.floor(Math.random() * 10)
    pass.push(num)
}
for(let i = 0;i<2;i++){
    const sym = Math.floor(Math.random()* symbols.length)
    pass.push(symbols[sym])
}
for(let i = 0;i<3;i++){
    const sumLetter = Math.floor(Math.random() * sum.length)
    pass.push(sum[sumLetter])
}
    const low2 = Math.floor(Math.random() * lowLetter.length)
    pass.push(lowLetter[low2])
    const upper = Math.floor(Math.random() * alphabet.length)
    pass.push(alphabet[upper])
    const sortingPass = (x)=>{
      result = x.sort(() => Math.random()- 0.5)
      text = result.join("")
      passArea.innerText = text
    }
    sortingPass(pass)
}


generatePass()
})

const copyButton = document.getElementById('copy')


copyButton.addEventListener("click", () => {
    // Select the password text from the passArea
    const passwordToCopy = passArea.innerText;

    // Copy the password text to the clipboard
    navigator.clipboard.writeText(passwordToCopy).then(() => {
        // You can optionally provide feedback that the password has been copied
        console.log("Password copied to clipboard!");
    }).catch((err) => {
        console.error("Unable to copy password to clipboard", err);
    });
});

