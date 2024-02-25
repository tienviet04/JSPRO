const callApi = ()=>{
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))
}
callApi();

const render = (data) =>{
    const app = document.querySelector("#app")
    const html = data.map((v)=>{
        return`
        <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${v.name}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${v.desc}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700"><img src="${v.image}"></td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${v.id}</td>
        <td class="whitespace-nowrap px-4 py-2">
        <button>
        <a
            href="/delete.html?id=${v.id}"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
            delete
        </a>
        <a
            href="/update.html?id=${v.id}"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
            update
        </a>
        </button>
        </td>
    </tr>
    `
    }) 
    
    app.innerHTML = html.join("")
    
}