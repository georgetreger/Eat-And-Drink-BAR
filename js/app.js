const faStream = document.querySelector('.fa-stream')
const faClose = document.querySelector('.fa-close')
const asideEl = document.querySelector('aside')

const cocktailContainer =document.querySelector('.cocktail-container')
 const submit = document.querySelector('.submit')
 const searchBox = document.querySelector('.searchBox')
 const randonContainer = document.querySelector('.cocktail-random')


faStream.addEventListener('click', ()=>{
   asideEl.style.display ='block'
})
faClose.addEventListener('click', ()=>{
  asideEl.style.display ='none'
})

// ======================================cocktail start here====================
    const myCocktail = async (enqure) =>{
       cocktailContainer.innerHTML = '<h4>loading the cocktail....</h4>'
     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${enqure}`)
      const drink = await response.json()
      cocktailContainer.innerHTML =''
          drink.drinks.forEach(mydrink => {
               console.log(drink);
                
               const myDiv = document.createElement('div')
                 myDiv.classList.add('cocktail');
                 myDiv.innerHTML =`
                  <img src="${mydrink.strDrinkThumb}">
                   <h2>${mydrink.strAlcoholic}</h2>
                   <h3>${mydrink.strCategory}</h3>
                 `
                 cocktailContainer.appendChild(myDiv)
          });
    }
 
   submit.addEventListener('click',(e)=>{
      e.preventDefault();
       const mySearch = searchBox.value.trim();
       myCocktail(mySearch)
   })
// ======================================cocktail ends here====================






// ======================================random start here====================
   const myRandom = async () =>{
// ======================================cocktail ends here====================
    const random = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
    const randomData = await random.json();
           console.log(randomData);
        randomData.drinks.forEach(randomdrink =>{
          const randomDiv = document.createElement('div')
              randomDiv.classList.add('random');
              randomDiv.innerHTML =`
               <img src="${randomdrink.strDrinkThumb}">
               <h2>${randomdrink.strDrink}</h2>
              `
            randonContainer.appendChild(randomDiv)
        })
   }


   myRandom();
// ======================================random ends here====================

