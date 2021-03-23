let chores = document.getElementById("chores")
let getChores = function () {axios.get("https://api.vschool.io/isaiasmeza/todo")

.then(res => {
 
    for (let i=0; i<res.data.length; i++){
      let item = document.createElement("input")

      let li = document.createElement("li")
    
    let button = document.createElement("button")
    item.type = "checkbox"
    item.setAttribute("id", "item")
    item.classList.add("checkBox")
    button.textContent = "x"
    button.classList.add("delete")
    item.onchange = update
    li.innerHTML = res.data[i].title
    li.innetHTML = res.data[i].Description
    li.setAttribute(`id`, res.data[i]._id)
   
   
    if (res.data[i].completed === true){
       item.checked = true;
      li.style.textDecoration = "line-through";
      
    }

    li.append(item)

    li.append(button)
    chores.appendChild(li)
  }
})

.catch(()=> console.log("error"))}

getChores()


chores.addEventListener("click", function (e){
    let delButton = document.getElementsByClassName("delete")
    for(i=0; i<delButton.length; i++){
      if(e.target == delButton[i]){
        let del = delButton[i].parentNode
        let id = del.id
        axios.delete(`https://api.vschool.io/isaiasmeza/todo/${id}`)
        chores.removeChild(del)
      }
    }
  })
  

let update = (e) =>{
  let checkbox = document.getElementsByClassName("checkBox")
  for (i=0; i<checkbox.length; i++){
  if(checkbox[i].type === "checkbox"){    
      if (e.target == checkbox[i]){
              
   let check = checkbox[i].parentNode
        if (checkbox[i].checked){
            check.style.textDecoration='line-through'
            }                
         let id = check.id
         let select = {
         completed: checkbox[i].checked
                }
                axios.put(`https://api.vschool.io/isaiasmeza/todo/${id}`, select)
    }
  }
}}
form = document.Form
form.addEventListener("submit", function (e){
  e.preventDefault()
  let title = form.title.value
  let Description = form.Description.value
  let Todo ={
    Description:Description,
    title: title}
    

  
  axios.post("https://api.vschool.io/isaiasmeza/todo", Todo)
      .then(getChores)
      .catch(()=> console.log("error"))
    
})



