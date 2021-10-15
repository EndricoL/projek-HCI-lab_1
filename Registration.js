const form = document.getElementById("formId")
const fName = document.getElementById("fnId")
const lName = document.getElementById("lnId")
const email = document.getElementById("emailId")
const male = document.getElementById("mRadio")
const female = document.getElementById("fRadio")
const address = document.getElementById("addressId")
const city = document.getElementById("cityId")
const checkbox = document.getElementById("cb1")

let errorMessage = ""
let genderChoosed = ""

form.addEventListener("submit",(e)=>{
    if(fName.value === ""){
        errorMessage = "First Name must be filled"
    }
    else if(lName.value === ""){
        errorMessage = "Last Name must be filled"
    }
    else if(email.value === ""){
        errorMessage = "Email must be filled"
    }
    else if(!(female.checked || male.checked)){
        errorMessage = "Gender must be choosed!"
    }
    else if(address.value === ""){
        errorMessage = "Address must be filled"
    }
    else if(city.value === ""){
        errorMessage = "City must be filled"
    }
    else if(!checkbox.checked){
        errorMessage = "Agreement must be checked"
    }

    if(female.checked)
    {
        genderChoice = "Female"

    }
    else(male.checked)
    {
        genderChoice = "Male"
    }


    if(errorMessage.length > 0){
        error.innerHTML = errorMessage
        error.style = "color: red"
        e.preventDefault()
    }

})