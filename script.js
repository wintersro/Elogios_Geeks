// script.js
const elogios = [
    "Você é o bug mais encantador que já encontrei! 💖",
    "Se eu fosse um código, você seria minha função favorita! 💻",
    "Se eu fosse um loop infinito, queria ficar preso ao seu lado! 🔄",
    "Você faz meu coração bater mais forte que um overclock! ❤️",
    "Sem você, meu código teria muitos erros de sintaxe! 📝",
    "Você não é apenas um bug no meu sistema... você é a falha mais linda que o universo do amor já codificou! 💘🐞",
    "Você é o patch perfeito para todos os meus crashes emocionais. 💾❤️",
    "Se você fosse um código, estaria livre de bugs e cheio de amor. 💖👨‍💻",
    "Nos algoritmos do meu coração, você é o `return true` de toda felicidade. 🧠💕",
    "Você é o commit mais lindo que já fiz na branch da minha vida. 🌸✨",
    "Se eu fosse um sistema, você seria meu root de confiança. 🔐❤️",
    "Nosso amor é mais forte que uma senha de 256 bits! 🔐"
  ];
  
  function gerarElogio() {
    const nome = document.getElementById("nome").value.trim();
    const frase = document.getElementById("frase").value.trim();
    const mensagem = document.getElementById("mensagem");
    
    if (!nome || !frase) {
      mensagem.innerText = "Por favor, preencha seu nome e uma frase!";
      return;
    }
    
    const elogio = elogios[Math.floor(Math.random() * elogios.length)];
    mensagem.innerText = `${nome}, ${frase}. ${elogio}`;
    
    tocarMusica();
    criarEmojiAnimado();
    tocarSomEfeito();
  }
  
  function copiarElogio() {
    const mensagem = document.getElementById("mensagem").innerText;
    navigator.clipboard.writeText(mensagem);
    tocarSomEfeito();
    alert("Elogio copiado! ✨");
  }
  
  function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("frase").value = "";
    document.getElementById("mensagem").innerText = "";
  }
  
  function tocarMusica() {
    const musica = document.getElementById("musica");
    if (musica.paused) {
      musica.play();
    }
  }
  
  function pausarMusica() {
    const musica = document.getElementById("musica");
    if (!musica.paused) {
      musica.pause();
    }
  }
  
  function tocarSomEfeito() {
    document.getElementById("efeitoSom").play();
  }
  
  function criarEmojiAnimado() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = "💖";
    emoji.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }

  function alternarModo() {
    document.body.classList.toggle("modo-noturno");
  }
  