const loader = document.getElementById("loader")
const search = document.getElementById("search")
const categories = document.getElementById("categories")
const area = document.getElementById("area")
const ingredients = document.getElementById("ingredients")
const contact = document.getElementById("contact")
const form = document.getElementById("form")
const serchBox = document.getElementById("serch-box")
const searchByName = document.getElementById("search-byname")
const searchByFirst = document.getElementById("first-litter")
let links = Array.from(document.querySelectorAll(".menu-content .links ul li"))
const toggleIcon = document.querySelector(".side-menu .bars i")
const urlApi = "https://www.themealdb.com/api/json/v1/1/"


function slid() {
if (toggleIcon.className.includes("fa-xmark")) {
  $(links).animate({top :"200"},1) 
  $(".menu").animate({left: "-250px"},1)   
} else {
  $(links[0]).delay(100).animate({top :"0"}, 100)
  $(links[1]).delay(100).animate({top :"0"}, 200)
  $(links[2]).delay(100).animate({top :"0"}, 300)
  $(links[3]).delay(100).animate({top :"0"}, 400)
  $(links[4]).delay(100).animate({top :"0"}, 500)
  $(".menu").css("left", "0");
}
toggleIcon.classList.toggle("fa-xmark")
}


$( window ).on( "load", function() {
  loader.classList.add("d-none")
});

$(".side-menu .bars").click(() => {
  slid()
});

async function homePage() {
    try {
      const response = await fetch(urlApi+"search.php?s=")
        if (!response.ok) {
            throw new Error("not fetched")
        }
        const result = await response.json()
        for (let i = 0; i < result.meals.length; i++){
            let temp = `
            <div class="col-md-3">
            <div class="card rounded-3 position-relative overflow-hidden border-0">
            <img src="${result.meals[i].strMealThumb}" alt="meal-img">
            <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
            <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
            </div>
            </div>
            </div>
            `
            document.querySelector("#display-meals .row").innerHTML += temp
        }
    }
    catch(error) {
        
    }
    
}
homePage()

function viewMeals() {
    let mealName;
  addEventListener("click", e => {
    ele = [e.target]
    if (ele[0].hasAttribute("data-meal")) {
      mealName = ele[0].outerText
      async function getMeal() {
          try {
            const response = await fetch(urlApi+"search.php?s="+mealName)
              if (!response.ok) {
                  throw new Error("not fetched")
              }
              const result = await response.json()
              
              document.querySelector("#display-meals .row").innerHTML = `
               <div class="col-12">
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-0 rounded-3 overflow-hidden">
                    <img src="${result.meals[0].strMealThumb}" alt="meal-img">
                  </div>
                  <h3 class="mt-2">${result.meals[0].strMeal}</h3>
                </div>
                <div class="col-md-8">
                  <h2>Instructions</h2>
                  <p>${result.meals[0].strInstructions}</p>
                  <h3>Area : ${result.meals[0].strArea}</h3>
                  <h3>Category : ${result.meals[0].strCategory}</h3>
                  <h3>Recipes :</h3>
                  <div class="recipes">
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure1+result.meals[0].strIngredient1}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure2+result.meals[0].strIngredient2}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure3+result.meals[0].strIngredient3}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure4+result.meals[0].strIngredient4}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure5+result.meals[0].strIngredient5}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure6+result.meals[0].strIngredient9}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure7+result.meals[0].strIngredient7}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure8+result.meals[0].strIngredient8}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure9+result.meals[0].strIngredient9}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure10+result.meals[0].strIngredient10}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure11+result.meals[0].strIngredient11}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure12+result.meals[0].strIngredient12}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure13+result.meals[0].strIngredient13}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure14+result.meals[0].strIngredient14}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure15+result.meals[0].strIngredient15}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure16+result.meals[0].strIngredient16}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure17+result.meals[0].strIngredient17}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure18+result.meals[0].strIngredient18}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure19+result.meals[0].strIngredient19}</div>
                    <div class="alert alert-info d-inline-block p-1 m-1" role="alert">${result.meals[0].strMeasure20+result.meals[0].strIngredient20}</div>
                  </div>
                  <h3>Tags :</h3>
                  <div class="tags">
                  </div>
                  <a href="${result.meals[0].strSource}" target="_blank" class="btn btn-success">Source</a>
                  <a href="${result.meals[0].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
                </div>
              </div>
            </div>
              ` 
            let str = Array.from(document.querySelectorAll(".alert"))
            for(let i = 0; i < str.length; i++){
              if (str[i].innerText == "" || str[i].innerText == "0") {
                str[i].remove()
              }
              }
            let tags = result.meals[0].strTags.split(",")
            if (tags != null) {                
              for (let i = 0; i < tags.length; i++){
                  document.querySelector(".col-md-8 .tags").innerHTML += `<div class="alert alert-danger d-inline-block p-1" role="alert">${tags[i]}</div>
              `
              }
            }
          }
          catch(error) {
              
          }
          
      }
      getMeal()
    } else if (ele[0].hasAttribute("data-cate")) {
      cateName = ele[0].dataset.cate
      async function mealCate() {
        try {
          const response = await fetch(urlApi+"filter.php?c="+cateName)
          if (!response.ok) {
            throw new Error("not fetched")
          }
          const result = await response.json()
            document.querySelector("#display-meals .row").innerHTML = ""
            for (let i = 0; i < result.meals.length; i++){
                let temp = `
                <div class="col-md-3">
                <div class="card rounded-3 position-relative overflow-hidden border-0">
                <img src="${result.meals[i].strMealThumb}" alt="meal-img">
                <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
                <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
                </div>
                </div>
                </div>
                `
                document.querySelector("#display-meals .row").innerHTML += temp
            }
        }
        catch(error) {
            
        }
        
    }
    mealCate()          
    } else if (ele[0].hasAttribute("data-area")) {
      areaName = ele[0].dataset.area
      async function mealArea() {
        try {
          const response = await fetch(urlApi + "filter.php?a=" + areaName)
          if (!response.ok) {
            throw new Error("not fetched")
          }
          const result = await response.json()
            document.querySelector("#display-meals .row").innerHTML = ""
            for (let i = 0; i < result.meals.length; i++){
                let temp = `
                <div class="col-md-3">
                <div class="card rounded-3 position-relative overflow-hidden border-0">
                <img src="${result.meals[i].strMealThumb}" alt="meal-img">
                <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
                <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
                </div>
                </div>
                </div>
                `
                document.querySelector("#display-meals .row").innerHTML += temp
            }
        }
        catch(error) {
            
        }
        
    }
    mealArea()         
    }else if (ele[0].hasAttribute("data-ing")) {
      ingName = ele[0].dataset.ing
      async function mealIngredients() {
        try {
          const response = await fetch(urlApi + "filter.php?i=" + ingName)
          if (!response.ok) {
            throw new Error("not fetched")
          }
          const result = await response.json()
            document.querySelector("#display-meals .row").innerHTML = ""
            for (let i = 0; i < result.meals.length; i++){
                let temp = `
                <div class="col-md-3">
                <div class="card rounded-3 position-relative overflow-hidden border-0">
                <img src="${result.meals[i].strMealThumb}" alt="meal-img">
                <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
                <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
                </div>
                </div>
                </div>
                `
                document.querySelector("#display-meals .row").innerHTML += temp
            }
        }
        catch(error) {
            
        }
        
    }
    mealIngredients()        
    }
      })
}
viewMeals()


searchByFirst.addEventListener("keyup", () => {
  document.querySelector("#display-meals .row").innerHTML = " "
  async function serchResult() {
    try {
      const response = await fetch(urlApi+"search.php?f="+searchByFirst.value)
        if (!response.ok) {
            throw new Error("not fetched")
        }
      const result = await response.json()
      for (let i = 0; i < result.meals.length; i++){
        let temp = `
        <div class="col-md-3">
        <div class="card rounded-3 position-relative overflow-hidden border-0">
        <img src="${result.meals[i].strMealThumb}" alt="meal-img">
        <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
        <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
        </div>
        </div>
        </div>
        `
     document.querySelector("#display-meals .row").innerHTML += temp
    } 
    }
    catch(error) {
      
    } 
}
serchResult()

})
searchByName.addEventListener("keyup", () => {
    document.querySelector("#display-meals .row").innerHTML = " "
  async function serchResult() {
    try {
      const response = await fetch(urlApi+"search.php?s="+searchByName.value)
        if (!response.ok) {
            throw new Error("not fetched")
        }
      const result = await response.json()
      for (let i = 0; i < result.meals.length; i++){
        let temp = `
        <div class="col-md-3">
        <div class="card rounded-3 position-relative overflow-hidden border-0">
        <img src="${result.meals[i].strMealThumb}" alt="meal-img">
        <div data-meal="${result.meals[i].strMeal}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
        <h3 data-meal="${result.meals[i].strMeal}" class="fw-bold ms-2">${result.meals[i].strMeal}</h3>
        </div>
        </div>
        </div>
        `
     document.querySelector("#display-meals .row").innerHTML += temp
    }
      
      
    }
    catch(error) {
      
    }
  
}
serchResult()

})


categories.addEventListener("click", () => {
  document.querySelector("#display-meals .row").innerHTML = ""
  async function serchResult() {
    try {
      const response = await fetch(urlApi+"categories.php")
        if (!response.ok) {
            throw new Error("not fetched")
        }
      const result = await response.json()
      for (let i = 0; i < result.categories.length; i++){
        let description = result.categories[i].strCategoryDescription.slice(0,150)
        let temp = `
        <div class="col-md-3 overflow-hidden">
        <div class="card rounded-3 position-relative overflow-hidden border-0">
        <img src="${result.categories[i].strCategoryThumb}" alt="meal-img">
        <div data-cate="${result.categories[i].strCategory}" class="filter bg-light position-absolute top-100 bottom-0 start-0 end-0 bg-opacity-75 align-content-center">
        <h3 data-cate="${result.categories[i].strCategory}" class="fw-bold text-center">${result.categories[i].strCategory}</h3>
        <p data-cate="${result.categories[i].strCategory}" style="font-size:0.7em;" class="fs-6 p-3 text-center fw-medium">${description}</p>
        </div>
        </div>
        </div>
        `
        document.querySelector("#display-meals .row").innerHTML += temp
      } 
      
    }
    catch(error) {
      
    } 
}
serchResult()

})

area.addEventListener("click", () => {
  document.querySelector("#display-meals .row").innerHTML = ""
  async function serchResult() {
    try {
      const response = await fetch(urlApi+"list.php?a=list")
        if (!response.ok) {
            throw new Error("not fetched")
        }
      const result = await response.json()
      for (let i = 0; i < result.meals.length; i++){
        let temp = `
                <div data-area="${result.meals[i].strArea}" class="area m-5 col-md-3 d-flex flex-column align-items-center justify-content-center">
                  <i data-area="${result.meals[i].strArea}" class="fa-solid fa-house-flag fa-5x"></i>
                  <h3 data-area="${result.meals[i].strArea}" class="mt-3 text-center">${result.meals[i].strArea}</h3>
                </div>
        `
        document.querySelector("#display-meals .row").innerHTML += temp
      } 
      
    }
    catch(error) {
      
    } 
}
serchResult()
})



ingredients.addEventListener("click", () => {
  document.querySelector("#display-meals .row").innerHTML = ""
  async function serchResult() {
    try {
      const response = await fetch(urlApi+"list.php?i=list")
        if (!response.ok) {
            throw new Error("not fetched")
        }
      const result = await response.json()
      const Ingr = result.meals.slice(0, 20)
      for (let i = 0; i < Ingr.length; i++){
        let description = Ingr[i].strDescription.slice(0,150)
       let temp = `
               <div data-ing="${Ingr[i].strIngredient}" class="area m-5 col-md-3 d-flex flex-column align-items-center justify-content-center">
                 <i data-ing="${Ingr[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-5x"></i>
                 <h3 data-ing="${Ingr[i].strIngredient}" class="mt-3 text-center">${Ingr[i].strIngredient}</h3>
                  <p data-ing="${Ingr[i].strIngredient}"  class="p-2 ms-2 text-center fw-medium">${description}</p>
               </div>
       `
        document.querySelector("#display-meals .row").innerHTML += temp
      } 
      
    }
    catch(error) {
      
    } 
}
serchResult()
})

search.addEventListener("click", () => {
  serchBox.classList.remove("d-none")
  form.classList.add("d-none")
  slid()
  document.querySelector("#display-meals .row").innerHTML = ``
})
categories.addEventListener("click", () => {
  serchBox.classList.add("d-none")
  form.classList.add("d-none")
  slid()
  document.querySelector("#display-meals .row").innerHTML = ``
})
area.addEventListener("click", () => {
  serchBox.classList.add("d-none")
  form.classList.add("d-none")
  slid()
  document.querySelector("#display-meals .row").innerHTML = ``
})
ingredients.addEventListener("click", () => {
  serchBox.classList.add("d-none")
  form.classList.add("d-none")
  slid()
  document.querySelector("#display-meals .row").innerHTML = ``
})
contact.addEventListener("click", () => {
  serchBox.classList.add("d-none")
  form.classList.remove("d-none")
  slid()
  document.querySelector("#display-meals .row").innerHTML = ``
})