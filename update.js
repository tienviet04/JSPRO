const searchF = new URLSearchParams(location.search)
const id = searchF.get("id")
const fUpdate = document.querySelector("#update")

const start = () =>{
    fetch("http://localhost:3000/products/" + id)
    .then(res => res.json())
    .then(data => updateFrom(data))
}
start();

const updateFrom = (data) =>{
    const html = `
    <div>
            <label for="email" class="sr-only">name</label>
    
            <div class="relative">
            <input
                id="name"
                value="${data.name}"
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
            />
    
            </div>
        </div>
    
        <div>
            <label for="password" class="sr-only">desc</label>
    
            <div class="relative">
            <input
                id="desc"
                value="${data.desc}"
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter desc"
            />
    
            </div>
        </div>
        <div>
            <label for="password" class="sr-only">image</label>
    
            <div class="relative">
            <input
            id="image"
            value="${data.image}"
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter image"
            />
    
            </div>
        </div>
    
        <div class="flex items-center justify-between">
         
    
            <button
            type="submit"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
           update
            </button>
        </div>
    `
    fUpdate.innerHTML = html
}
    fUpdate.onsubmit = function(v){
        v.preventDefault()
        const name = document.querySelector("#name").value
        const desc = document.querySelector("#desc").value
        const image = document.querySelector("#image").value
        const newData = {
            name : name,
            desc : desc,
            image : image
        }
        if(name && desc && image){
            fetch ("http://localhost:3000/products/" + id, {
                method : "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newData)
            }).then(()=>{
                window.location="/index.html"
            })
            .then(()=>alert("Sửa thành công"))
        }else{
            alert ("Vui lòng điền đầy đủ thông tin")
        }
    }