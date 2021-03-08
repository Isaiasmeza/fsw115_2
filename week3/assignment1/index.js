const xhr = new XMLHttpRequest()
xhr.open("Get", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText 
        const data = JSON.parse(JSONdata)
        const obj = data.objects[0]
        const pokedex = obj.pokemon
        pokemon(pokedex)
        console.log(pokedex)
    }
}
function pokemon(arr){
   for(let i =0; i < arr.length; i++){
        let p = document.createElement("p")
        p.innerHTML = arr[i].name
        document.body.append(p)
    }
}