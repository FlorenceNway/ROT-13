document.body.innerHTML = `
    <section class='wrapper'>
    <h1>Caesar cipher</h1>
    <div class="input_container">
        <textarea
            cols="50"
            rows="10"
            type=""
            placeholder="Type here..."
        ></textarea>
        <div class="buttons">
            <button id="encrypt" disabled>Encrypt</button>
            <button id="decrypt" disabled>Decrypt</button>
        </div>
    </div>
    <div class='result-wrapper'>
        <h3>Result:</h3>
        <p class="result"></p>
    </div>
    </section>
`;