Object.defineProperty(global.Element.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(str) {
        this.innerHTML = this.textContent = str;
    }
  });

document.body.innerHTML = `
    <h1>Caesar cipher</h1>
		<div class="input_container">
			<textarea
				cols="50"
				rows="10"
				type=""
				placeholder="Type here..."
			></textarea>
			<div class="buttons">
				<button id="encrypt">Encrypt</button>
				<button id="decrypt">Decrypt</button>
			</div>
		</div>
	<h3>Result:</h3>
	<p class="result"></p>
`;

const encrypt = document.querySelector('#encrypt') 
const decrypt = document.querySelector('#decrypt')
const text = document.querySelector('textarea')
const resultEl = document.querySelector(".result");

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

encrypt.addEventListener('click', () => {
    decrypt.removeAttribute('disabled','')
    rot13()
    encrypt.setAttribute('disabled','')
})

decrypt.addEventListener('click', () => {
    encrypt.removeAttribute('disabled','')
    rot13()
    decrypt.setAttribute('disabled','')
})

const rot13 = () => {
    let input = [...text.value]

    input.forEach((char,index) => {
        
        if(alphabet.includes(char.toUpperCase())){
            let charIndex = alphabet.indexOf(char.toUpperCase())
            
            if(charIndex > alphabet.length - 14) {
                if(char == char.toUpperCase()){
                    input[index] = alphabet[charIndex - 13]
                }else {
                    input[index] = alphabet[charIndex - 13].toLowerCase()
                }
                
            }else {
                if(char == char.toUpperCase()){
                    input[index] = alphabet[charIndex + 13]
                }else {
                    input[index] = alphabet[charIndex + 13].toLowerCase()
                }
            }
            
        }else {
            input[index] = char
        }
    })
    const str = input.toString()
    text.value = str.replace(/,/g,'')
    resultEl.innerHTML=text.value
}
const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise #
describe("ROT13", () => {
	const inputEl = document.querySelector("textarea");
	const encryptBtnEl = document.querySelector("#encrypt");
	const decryptBtnEl = document.querySelector("#decrypt");
	const resultEl = document.querySelector(".result");

	test("on click of #encrypt should encrypt input value", () => {
		inputEl.value = "Some random text!";

		fireEvent.click(encryptBtnEl);
		expect(resultEl.innerHTML).toEqual("Fbzr enaqbz grkg!");
	});

	test("on click of #decrypt should decrypt input value", () => {
		inputEl.value = "Fbzr enaqbz grkg arrqf gb or qrpelcgrq!";

		fireEvent.click(decryptBtnEl);
		expect(resultEl.innerHTML).toEqual(
			"Some random text needs to be decrypted!"
		);
	});
});
