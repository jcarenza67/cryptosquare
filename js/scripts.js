function cryptoString(string) {
  const sentence = string.split ("");

  for (let i = sentence.length -1; i > 0; i--) {
    let math = Math.floor(Math.random () * (i + 1));
    let crypt = sentence[i];
    sentence[i] = sentence[math];
    sentence [math] = crypt

  }

  let random = sentence.join("");

  return random;
}

window.addEventListener("load", function(){
  const submitBtn = document.getElementById("submit")
  const inputField = document.getElementById("input")
  const resultDiv = document.getElementById("crypto")

  submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    const inputString = inputField.value;
    const result = cryptoString(inputString);

    resultDiv.textContent = result
  });
});