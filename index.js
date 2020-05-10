const encrypt = document.querySelector('#encrypt') 
const decrypt = document.querySelector('#decrypt')
const text = document.querySelector('textarea')
const resultEl = document.querySelector(".result");

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

if(!text.value) {
    decrypt.setAttribute('disabled','')
}

encrypt.addEventListener('click', () => {
    encrypt.style.backgroundColor='green'
    decrypt.removeAttribute('disabled','')
    rot13()
    decrypt.style.backgroundColor='#9441e1'
    encrypt.setAttribute('disabled','')
})

decrypt.addEventListener('click', () => {
    encrypt.style.backgroundColor='#9441e1'
    encrypt.removeAttribute('disabled','')
    rot13()
    decrypt.style.backgroundColor='green'
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