const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
const now = new Date().toLocaleDateString('pt-br').slice(0, -5)

button.addEventListener("click", add)
form.addEventListener("change", save)




function add(){
    const today = (now)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso! ❌")
        return
        
    }

    nlwSetup.addDay(today)
    alert("Dia adicionado com sucesso ✔")
    

}

function save(){
    localStorage.setItem("registro@habits", JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem("registro@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()





// const data = { 
//     training: ['01-018', '01-019', '01-20'], 
//     water: ['01-018', '01-19', '01-20', '01-21'],
//     read: ['01-018', '01-20', '01-21'],
//     study: ['01-19', '01-21'],
//     food: ['01-018', '01-19', '01-20', '01-21'],
//   }
  
//   nlwSetup.setData(data)
//   nlwSetup.load()