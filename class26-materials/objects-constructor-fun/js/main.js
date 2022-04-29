//Create a constructor with 4 properties and 3 methods

function MakePizza(size, toppings, crust, price){

this.size = size;
this.toppings = toppings;
this.crust = crust;
this.price = price;

this.estimatedDeliveryTime = function(){
    console.log('Calculating...')
    }

this.burnMouth = function(){
    console.log('MY MOUTH BURNSSS')
    }

this.frisbee = function(){
    console.log('YEEeeeeeeettttt')
    }
}






pizza.size = 'Large';
pizza.toppings = ['Pepperoni', 'Onion', 'Bacon', ,'Meatball'];
pizza.crust = 'Stuffed Crust';
pizza.price = '£22.99';

pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}

pizza.burnMouth = function(){
    console.log('MY MOUTH BURNS')
}

pizza.frisbee = function(){
    console.log('YEEeeeeeeetttt')
}