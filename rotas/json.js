const rotas = [
    {
        id: "1",
        nomedarota: "ROTA105",
        url: "https://www.google.com/maps/dir/-29.978641,+-51.200317/'-29.823841,-51.171570'/@-29.9009914,-51.2783658,12z/data=!4m15!4m14!1m8!2m2!1d-51.200317!2d-29.978641!3m4!1m2!1d-51.1771535!2d-29.9102045!3s0x9519700725af8c35:0xf05c49ede5ac8368!1m3!2m2!1d-51.17157!2d-29.823841!3e0",
    },
    {
        id: "2",
        nomedarota: "ROTA104",
        url: "https://www.google.com/maps/dir/-29.978641,-51.200317/'-29.823841,-51.171570'/@-29.9009914,-51.2783658,12z/data=!4m22!4m21!1m15!3m4!1m2!1d-51.2120405!2d-29.9321277!3s0x95197adbeed77f87:0x78702d7d776d06e6!3m4!1m2!1d-51.2298748!2d-29.8711786!3s0x951965ca7824a63b:0x7da195d5ba1df576!3m4!1m2!1d-51.2112811!2d-29.8472483!3s0x951965ca7824a63b:0x7da195d5ba1df576!1m3!2m2!1d-51.17157!2d-29.823841!3e0",
    },
    {
        id: "3",
        nomedarota: "ROTA117",
        url: "https://www.google.com/maps/dir/'-22.909043,-43.209287'/'-22.805449,-43.289423'/@-22.8357026,-43.2737486,14.08z/data=!4m40!4m39!1m33!2m2!1d-43.209287!2d-22.909043!3m4!1m2!1d-43.213979!2d-22.8938633!3s0x997ee002efc255:0xd4a3426c5f1a2fc1!3m4!1m2!1d-43.2338228!2d-22.8864351!3s0x997ebfaac8e74b:0xa2ed563767807!3m4!1m2!1d-43.247539!2d-22.8662904!3s0x997eab8905bf89:0xf3e9bf0e0c311e4c!3m4!1m2!1d-43.250472!2d-22.8433836!3s0x99796013bb1dad:0xd34a007aa1381a62!3m4!1m2!1d-43.2803541!2d-22.8222853!3s0x997bb029843233:0x618cb02518ea6628!3m4!1m2!1d-43.2859775!2d-22.8177216!3s0x997ba954834f6d:0x1ac1d875faf4b02c!1m3!2m2!1d-43.289423!2d-22.805449!3e0",
    }
   
]

console.log(rotas);

const rotasJson = JSON.stringify(rotas)
const objRotas = JSON.parse(rotasJson);

let conteudo = "";

objRotas.map(function(item, index){



})

document.querySelector("#tabela").innerHTML = conteudo;

// https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d29401.589496505425!2d-43.2312625!3d-22.9060413!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-22.9062017!2d-43.1946602!4m3!3m2!1d-22.9052801!2d-43.2417728!5e0!3m2!1spt-BR!2sbr!4v1712262578161!5m2!1spt-BR!2sbr

