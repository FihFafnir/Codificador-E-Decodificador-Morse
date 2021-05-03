let inputs = document.querySelectorAll(".input")
function encoder(alphabet) {
  let separateText = alphabet.normalize("NFD").toLowerCase().split("")
  let codedText = []
  for (let i = 0; i < separateText.length; i++) {
    switch (separateText[i]) {
      case 'a':
        codedText.push(".-")
        break;
      case 'b':
        codedText.push("-...")
        break;
      case 'c':
        codedText.push("-.-.")
        break;
      case 'd':
        codedText.push("-..")
        break;
      case 'e':
        codedText.push(".")
        break;
      case 'f':
        codedText.push("..-.")
        break;
      case 'g':
        codedText.push("--.")
        break;
      case 'h':
        codedText.push("....")
        break;
      case 'i':
        codedText.push("..")
        break;
      case 'j':
        codedText.push(".---")
        break;
      case 'k':
        codedText.push("-.-")
        break;
      case 'l':
        codedText.push(".-..")
        break;
      case 'm':
        codedText.push("--")
        break;
      case 'n':
        codedText.push("-.")
        break;
      case 'o':
        codedText.push("---")
        break;
      case 'p':
        codedText.push(".--.")
        break;
      case 'q':
        codedText.push("--.-")
        break;
      case 'r':
        codedText.push(".-.")
        break;
      case 's':
        codedText.push("...")
        break;
      case 't':
        codedText.push("-")
        break;
      case 'u':
        codedText.push("..-")
        break;
      case 'v':
        codedText.push("...-")
        break;
      case 'w':
        codedText.push(".--")
        break;
      case 'x':
        codedText.push("-..-")
        break;
      case 'y':
        codedText.push("-.--")
        break;
      case 'z':
        codedText.push("--..")
        break;
      case '1':
        codedText.push(".----")
        break;
      case '2':
        codedText.push("..---")
        break;
      case '3':
        codedText.push("...--")
        break;
      case '4':
        codedText.push("....-")
        break;
      case '5':
        codedText.push(".....")
        break;
      case '6':
        codedText.push("-....")
        break;
      case '7':
        codedText.push("--...")
        break;
      case '8':
        codedText.push("---..")
        break;
      case '9':
        codedText.push("----.")
        break;
      case '0':
        codedText.push("-----")
        break;
    }
  }
  writeResult(codedText, 1)
}
function decoder(morse) {
  let separateText = morse.split("/")
  let decodedText = []
  for (let i = 0; i < separateText.length; i++) {
    switch (separateText[i]) {
      case '.-':
        decodedText.push("a")
        break;
      case '-...':
        decodedText.push("b")
        break;
      case '-.-.':
        decodedText.push("c")
        break;
      case '-..':
        decodedText.push("d")
        break;
      case '.':
        decodedText.push("e")
        break;
      case '..-.':
        decodedText.push("f")
        break;
      case '--.':
        decodedText.push("g")
        break;
      case '....':
        decodedText.push("h")
        break;
      case '..':
        decodedText.push("i")
        break;
      case '.---':
        decodedText.push("j")
        break;
      case '-.-':
        decodedText.push("k")
        break;
      case '.-..':
        decodedText.push("l")
        break;
      case '--':
        decodedText.push("m")
        break;
      case '-.':
        decodedText.push("n")
        break;
      case '---':
        decodedText.push("o")
        break;
      case '.--.':
        decodedText.push("p")
        break;
      case '--.-':
        decodedText.push("q")
        break;
      case '.-.':
        decodedText.push("r")
        break;
      case '...':
        decodedText.push("s")
        break;
      case '-':
        decodedText.push("t")
        break;
      case '..-':
        decodedText.push("u")
        break;
      case '...-':
        decodedText.push("v")
        break;
      case '.--':
        decodedText.push("w")
        break;
      case '-..-':
        decodedText.push("x")
        break;
      case '-.--':
        decodedText.push("y")
        break;
      case '--..':
        decodedText.push("z")
        break;
      case '.----':
        decodedText.push("1")
        break;
      case '..---':
        decodedText.push("2")
        break;
      case '...--':
        decodedText.push("3")
        break;
      case '....-':
        decodedText.push("4")
        break;
      case '.....':
        decodedText.push("5")
        break;
      case '-....':
        decodedText.push("6")
        break;
      case '--...':
        decodedText.push("7")
        break;
      case '---..':
        decodedText.push("8")
        break;
      case '----.':
        decodedText.push("9")
        break;
      case '-----':
        decodedText.push("0")
        break;
    }
  }
  writeResult(decodedText, 0)
}
function writeResult(txt, number) {
  inputs[number].innerHTML = ""
  for(let i = 0; i < txt.length; i++) {
    if(number == 1) {
      inputs[number].innerHTML += `${txt[i]}/`  
    } else {
      inputs[number].innerHTML += `${txt[i]} `
    } 
  }
}