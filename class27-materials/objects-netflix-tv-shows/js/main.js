//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeShow {
    constructor(title, rating, age, seasons){
        this.title = title
        this.rating = rating 
        this.age = age
        this.seasons = seasons
    }
    play(){
        console.log('Playing show')
    }
    pause(){
        console.log('Show pauses')
    }
    popUp(){
        alert('Are you still watching...?')
    }
}