let velocidadeCarro = 80

while(velocidadeCarro > 0){
    alert("O carro está a " + velocidadeCarro + "km/h")
    velocidadeCarro -= 20
    alert("Diminuindo 20 km/h")

    if(velocidadeCarro === 40){
        break
    }
}

alert("O carro parou")