const btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    const textArea = document.getElementById("txt");
  const vowelCount = document.getElementById("result");
  const text = textArea.value.toLowerCase(); 
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  vowelCount.innerHTML= `Vowel Count: ${count}`;   
})
const resetBtn=document.querySelector(".btn-1")
resetBtn.addEventListener("click",()=>{
document.getElementById("txt").value = ""; 
document.getElementById("result").innerHTML= "Vowel Count: 0"; 
})

