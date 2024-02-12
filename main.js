const encoderInput = document.querySelector("#encoder");
const decoderInput = document.querySelector("#decoder");

const morseCodeList = {
    char2Morse: {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        " ": "/",
    },
    morse2Char: {},
};

for (const [key, value] of Object.entries(morseCodeList.char2Morse))
    morseCodeList.morse2Char[value] = key;

function encoder(text) {
    const characters = text.normalize("NFD").toLowerCase().split("");
    const codedCharacters = characters.map(
        (character) => morseCodeList.char2Morse[character] || ""
    );
    const codedText = codedCharacters.join(" ");
    return codedText;
}

function decoder(morseCode) {
    const separateMorseCode = morseCode.split(" ");
    const decodedLetters = separateMorseCode.map(
        (morse) => morseCodeList.morse2Char[morse] || ""
    );
    const decodedText = decodedLetters.join("");
    return decodedText;
}

encoderInput.onkeyup = () =>
    (decoderInput.textContent = encoder(encoderInput.textContent));
decoderInput.onkeyup = () =>
    (encoderInput.textContent = decoder(decoderInput.textContent));
