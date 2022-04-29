//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getTitle)

document.querySelector('h2').innerText = localStorage.getItem('books') // will print local storage to the DOM on page load

function getTitle(){
  const ISBN = document.querySelector('input').value
  
  const url = `https://openlibrary.org/isbn/${ISBN}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)

        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        } else {

            let books = localStorage.getItem('books') + '' ; '' + data.title
            localStorage.setItem('books', books)

        }

        //put title into localStorage
        // let books = localStorage.getItem('books') + " ; " + data.title
        // localStorage.setItem('books', books)
         document.querySelector('h2').innerText = localStorage.getItem('books')
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

