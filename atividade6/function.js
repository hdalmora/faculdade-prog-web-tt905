function profilePicture(element){
    document.getElementById("intro").innerHTML = "Minha foto de perfil";
    document.getElementById("food").innerHTML = "";
    document.getElementById("intro2").innerHTML = "";
    const frame = document.getElementById("frame");  
    frame.style.backgroundImage="url('"+element.src+"')";
    document.getElementById("botaoPrevious").innerHTML = "Previous";
    document.getElementById("botaoNext").innerHTML = "Next";
}

function displayPicture(element){
    const frame = document.getElementById("frame");  
    frame.style.backgroundImage="url('"+element.src+"')";  
}

function undisplayPicture(){
    const frame = document.getElementById("frame");
    frame.style.backgroundImage="none";
}

const descricaoGabriel = ["Minha foto de perfil",
"Meu time do coração",
"Uma boa lembrança",
"Ultimo encontro com meus colegas do curso técnico",
"Apresentação do projeto final do curso técnico"
]

    const descricaoHenrique = ["Minha foto de perfil",
"Meu animal de estimação",
"Minha casa",
"Meu hobbie"
];

const imagesGabriel = ["../assets/profile-pic-gabriel.jpg", 
"../assets/time-gabriel.jpg", 
"../assets/copa-brasil-2014.jpg", 
"../assets/almoco-formatura.jpg",
"../assets/projeto-final-senai.jpg"]

const imagesHenrique = ["../assets/profile-pic-3.png", 
"../assets/meu-gato.png", 
"../assets/em-casa.jfif",
"../assets/meu-sport.jfif"
]


var current = 0;

function mod(n,m){
    return ((n%m)+m)%m;
}

function movePrevious(){
    const frame = document.getElementById("frame");
    let nome = document.getElementById("nome").innerHTML;
    if(nome == "Gabriel Henrique Martins"){
        current = mod(current - 1, imagesGabriel.length);
        frame.style.backgroundImage="url('"+imagesGabriel[current]+"')";
        document.getElementById("intro").innerHTML = descricaoGabriel[current];
    }else if(nome == "Henrique Dal Mora Rosendo da Silva"){
        current = mod(current - 1, imagesHenrique.length);
        frame.style.backgroundImage="url('"+imagesHenrique[current]+"')";
        document.getElementById("intro").innerHTML = descricaoHenrique[current];
    }
}   

function moveNext(){
    const frame = document.getElementById("frame");
    let nome = document.getElementById("nome").innerHTML;
    if(nome == "Gabriel Henrique Martins"){
        current = mod(current + 1, imagesGabriel.length);
        frame.style.backgroundImage="url('"+imagesGabriel[current]+"')";
        document.getElementById("intro").innerHTML = descricaoGabriel[current];
    }else if(nome == "Henrique Dal Mora Rosendo da Silva"){
        current = mod(current + 1, imagesHenrique.length);
        frame.style.backgroundImage="url('"+imagesHenrique[current]+"')";
        document.getElementById("intro").innerHTML = descricaoHenrique[current];
    }
}
