function handleSpeak() {
    const textBox = document.getElementById('textbox').value
    const speech = new SpeechSynthesisUtterance(textBox)
    speechSynthesis.speak(speech)

    const microPhone = document.getElementById("circle")

    if(speech){
        microPhone.classList.add('speaking')
    }

    speech.onend = () => {
        microPhone.classList.remove('speaking')
    };
}
   
    
