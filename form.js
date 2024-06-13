function finalizar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let data = document.getElementById ("data").value;
    let genero = document.querySelector("input[name='genero']:checked").id;
    let civil = document.querySelector("input[name='civil']:checked").id;
    let tel = document.getElementById('tel').value;
    let escolaridade = document.getElementById('escola').value;
    let cargo = document.querySelector("input[name='cargo']:checked").value;
    let obs = document.getElementById('obs').value;
    let res = document.getElementById("res");

    let dadosFormulario = {
        nome: nome,
        sobrenome: sobrenome,
        data: data,
        genero: genero,
        civil: civil,
        tel: tel,
        escolaridade: escolaridade,
        cargo: cargo,
        obs: obs
    }

    if (!nome || !sobrenome || !data || !genero || !civil || !tel || !escolaridade || !cargo || !obs) {
        alert("Por favor preencha todos os espaços");
    } else {
        alert("Enviado com sucesso!!");

        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("data").value = "";
        document.querySelector("input[name='genero']:checked").checked = false;
        document.querySelector("input[name='civil']:checked").checked = false;
        document.getElementById("tel").value = "";
        document.getElementById("escola").value = "";
        document.querySelector("input[name='cargo']:checked").checked = false;
        document.getElementById("obs").value = "";
    }
    
    


}