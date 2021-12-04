let dev_ = document.createElement("div");
// gr-parent
dev_.className = "searsh-data";
let s_un = document.createElement("div");
// parent
let dev_1 = document.createElement("div")
dev_1.className = "s-un";
// child 
let img = document.createElement("img");
img.className = "img"
let cont_text = document.createElement("h1")


img.src = "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
cont_text.className = "text";

s_un.appendChild(cont_text);
s_un.appendChild(img);

dev_.appendChild(s_un)
document.body.appendChild(dev_)

let price = [40, 30, 40, 50, 10]
for (let i = 0; i < 4; i++) {
    let dev_ = document.createElement("div");
    // gr-parent
    dev_.className = "searsh-data";
    let s_un = document.createElement("div");
    // parent
    s_un.className = "s-un";
    // child 
    let img = document.createElement("img");
    img.className = "img"
    let cont_text = document.createElement("div")
    cont_text.className = "text";
    let type = document.createElement("h1")
    type.id = "type"
    let local = document.createElement("h1")
    local.id = "local"
    let price = document.createElement("h1")
    price.id = "price"
    let contact = document.createElement("h1")
    contact.id = "contact"
    s_un.appendChild(img);

    cont_text.appendChild(type)
    cont_text.appendChild(local)
    cont_text.appendChild(price)
    cont_text.appendChild(contact)

    s_un.appendChild(cont_text);

    dev_.appendChild(s_un)
    document.getElementById("price").textContent = price_[i]

    document.body.appendChild(dev_)
}


for (let j = 0; j < 5;) {
    document.getElementById(`price${j}`).textContent = price_1[j]

}

document.getElementById("img").src