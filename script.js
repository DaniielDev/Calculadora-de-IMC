
function calcular(){
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let calculo = peso / (altura*altura)
    
    if(peso == 0 || altura == 0){
        resultado.innerHTML = `Por favor digite os dados corretamente!`
    }else if(calculo < 17){      
         resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} você está muito abaixo do peso!`
    }else if(calculo < 18.49){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} você está abaixo do peso`
    }else if(calculo > 18.5 && calculo < 24.99){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} você está com o peso normal`
    }else if(calculo > 29){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} você está acima do peso`
    }
}