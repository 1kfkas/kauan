function MakeImage(source){
    return new Image().src = source;
}

const coisas = ["um lixo", "fofo", "meu melhor amigo", "um gostoso", "um nerd", "redpilado", "sigma", "a Ai"];
const imagens = [MakeImage("images/lixo.png"), MakeImage("images/fofo.jpg"), MakeImage("images/amigo.jpg"),
                MakeImage("images/gostoso.gif"), MakeImage("images/nerd.gif"), MakeImage("images/redpill.gif"),
                MakeImage("images/sigma.gif"), MakeImage("images/ai.jpeg")];

let pastValue = 0;

document.getElementById("girar").addEventListener("click", function() {
    var value = Math.round(Math.random()*(coisas.length-1));

    if(value == pastValue){
        if(value < coisas.length-1){
            value++;
        } else if(value > 0){
            value--;
        }
    }

    pastValue = value;

    document.getElementById("ser").innerText = coisas[value];
    document.getElementById("ilustracao").src = imagens[value];
})
