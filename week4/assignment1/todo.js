axios.get("https://api.vschool.io/isaiasmeza/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++ ){
        const h2 = document.createElement("h2")
        if(response.data[i].completed === true){
            h2.textContent = `${response.data[i].title}`
            h2.style.textDecoration="line-through"
        } else{
            h2.textContent = `${response.data[i].title}`
        
        }
        
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))