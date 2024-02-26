//console.log("Olá JS")

    let c1 ="amarelo"
    let c2 ="laranja"
    let c3 ="verde"
    let c4 ="roxo"
    let c5 ="rosa"

    const dados = [c1,c2,c3,c4,c5]

    console.log(dados[1])

    let cor = "roxo"

    for(let i=0;i<dados.length;i++){

        if(cor == dados[i]){
            console.log("encontrado")
        } else {
    console.log("Não encontrado")
    }

    }