// function verificar() {
//   var data = new Date();
//   var ano = data.getFullYear();
//   var fano = document.getElementById("txtano");
//   var res = document.getElementById("res");
//   if (fano.value.length == 0 || fano.value > ano) {
//     alert("[ERRO] Verificar os dados e tente novamente!");
//   } else {
//     var fsex = document.getElementsByName("radsex");
//     var idade = ano - Number(fano.value);
//     var genero = "";
//     var img = document.createElement("img");
//     img.setAttribute("id", "foto");
//     if (fsex[0].checked) {
//       genero = "Homem";
//       if (idade >= 0 && idade < 10) {
//         img.setAttribute("src", "foto-crianca-m.png");
//       } else if (idade < 21) {
//         img.setAttribute("src", "foto-jovem-m.png");
//       } else if (idade < 50) {
//         img.setAttribute("src", "foto-adulto-m.png");
//       } else {
//         img.setAttribute("src", "foto-idoso-m.png");
//       }
//     } else if (fsex[1].checked) {
//       genero = "Mulher";
//       if (idade >= 0 && idade < 10) {
//         img.setAttribute("src", "foto-crianca-f.png");
//       } else if (idade < 21) {
//         img.setAttribute("src", "foto-jovem-f.png");
//       } else if (idade < 50) {
//         img.setAttribute("src", "foto-adulto-f.png");
//       } else {
//         img.setAttribute("src", "foto-idoso-f.png");
//       }
//     }
//     res.style.textAlign = "center";
//     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
//     res.appendChild(img);
//   }
// }

function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (fano.value == "" || fano.value > ano) {
    alert("Por favor, insira uma data de nascimento válida.");
    return;
  }

  let fsex = document.getElementsByName("radsex");
  let idade = ano - Number(fano.value);
  let genero = "";
  let img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (fsex[0].checked) {
    genero = "Homem";
    if (idade >= 0 && idade < 10) {
      img.setAttribute("src", "foto-crianca-m.png");
    } else if (idade < 21) {
      img.setAttribute("src", "foto-jovem-m.png");
    } else if (idade < 50) {
      img.setAttribute("src", "foto-adulto-m.png");
    } else {
      img.setAttribute("src", "foto-idoso-m.png");
    }
  } else if (fsex[1].checked) {
    genero = "Mulher";
    if (idade >= 0 && idade < 10) {
      img.setAttribute("src", "foto-crianca-f.png");
    } else if (idade < 21) {
      img.setAttribute("src", "foto-jovem-f.png");
    } else if (idade < 50) {
      img.setAttribute("src", "foto-adulto-f.png");
    } else {
      img.setAttribute("src", "foto-idoso-f.png");
    }
  }

  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  res.appendChild(img);
}
