const faStream = document.querySelector('.fa-stream')
const faClose = document.querySelector('.fa-close')
const asideEl = document.querySelector('aside')

const cocktailContainer =document.querySelector('.cocktail-container')
 const submit = document.querySelector('.submit')
 const searchBox = document.querySelector('.searchBox')
 const randonContainer = document.querySelector('.cocktail-random')
  
 const searchEl = document.querySelector('.searchBox-2')
  const submitBtn = document.querySelector('.submit-btn')
  const showText = document.querySelector('.show-Text')
  const bigImg = document.querySelector('.big-1')
  const smallImg = document.getElementsByClassName('small-1')



//   ====================footer element start here==========================
      submitBtn.addEventListener('submit', (e)=>{
            e.preventDefault();
             
          showText.innerHTML = 'thank you for contact us we will get back to you in 30 minutes'
       const searchIput = searchEl.value.trim();
            
      })


        

      
//   ====================footer element ends here==========================
faStream.addEventListener('click', ()=>{
   asideEl.style.display ='block'
})
faClose.addEventListener('click', ()=>{
  asideEl.style.display ='none'
})

// ===========================Bar img changing start here=======================
   smallImg[0].addEventListener('click', ()=>{
      bigImg.src =smallImg[0].src
   })
   smallImg[1].addEventListener('click', ()=>{
      bigImg.src =smallImg[1].src
   })
   smallImg[2].addEventListener('click', ()=>{
      bigImg.src =smallImg[2].src
   })
   smallImg[3].addEventListener('click', ()=>{
      bigImg.src =smallImg[3].src
   })

       
// ===========================Bar img changing ends here=======================

// ======================================cocktail start here====================
    const myCocktail = async (enqure) =>{
       cocktailContainer.innerHTML = '<h4>loading the cocktail....</h4>'
     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${enqure}`)
      const drink = await response.json()
      cocktailContainer.innerHTML =''
          drink.drinks.forEach(mydrink => {
      
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


