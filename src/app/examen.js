
//loop
for(let i = 1 ; i<=100 ; i++){


    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");

    }else if( i%3 == 0){
        console.log("Fizz");
        
    }else if( i%5 == 0){
        console.log("Buzz");
        continue;
    }else{
        console.log(i);
    }

   
    


}



escribe una funcion que cuente del 1 al 100 e imprima por pantalla
"Fizz" si el numero es divisible entre 3, "Buzz" si es divisible entre 5 y
"FizzBuzz" si es divisible entre 3 y 5, la salida debe ser asi:

1 
2 
Fizz
4 
Buzz 
Fizz
7 
8 
Fizz
Buzz 
11 
Fizz
13 
14 
FizzBuzz
16