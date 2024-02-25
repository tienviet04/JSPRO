const form = document.querySelector("#add")
form.onsubmit = function(v){
    v.preventDefault()
const name = document.querySelector("#name").value
const desc = document.querySelector("#desc").value
const image = document.querySelector("#image").value
const newData = {
    name ,
    desc ,
    image
}
if(name && desc && image){
    fetch ("http://localhost:3000/products", {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newData)
    }).then(()=>{
        window.location="/index.html"
    })
    .then(()=>alert("thêm thành công"))
}else{
    alert ("Vui lòng điền đầy đủ thông tin")
}
}