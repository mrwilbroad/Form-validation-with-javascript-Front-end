let radionBtns = document.querySelectorAll('input[name="region"]');
let hiddenregion = document.querySelector(".hiddenRegion");
let selectedRegion;


function validateForm(event) {
    event.preventDefault();

  
    let msg = "Your details are successfull submitted";


    let form = document.querySelector('form');
    let username = form.username.value;
    let returnStatement;
    if(username == "") {

        msg = "please fill your username";
        returnStatement = form.username.focus(); //return input-focus of where user is wrong
    }
    else {
        let email = form.email.value;

        if(email == "") {
            msg = "Please fill your email address";
            returnStatement = form.email.focus();
        }
        else {
            let emailLength = email.length;
            let atposition = email.search("@");  //return the index where @ is found
            let dotPosition = email.search(".");
            if(atposition < 0 ) {

                msg = "Email address must be valid";
               returnStatement = form.email.focus();
            }else {
                let age = form.age.value;
                age = Number(age);
                
                if(age == "" || isNaN(age) || age < 18) {

                    msg = "please your required to be above 18 years old";
                    returnStatement = form.age.focus();

                }else {

                    let genderValues = document.querySelectorAll('input[name="gender"]');
                    let gederCheck = false;
                    for(const gender of genderValues) {
                      if(gender.checked) {
                          gederCheck = true;
                          break;
                      }
                    }
                    if(gederCheck == false) {
                      msg = "please select your gender";
                    }else {

                    let mobile = form.mobile.value;
                    if(mobile == "") {

                        msg = "please fill your phone number";
                        returnStatement = form.mobile.focus();

                    }else {
                        let mobileLength = mobile.length;
                        let TzCode = mobile.slice(0,4);
                        let mobnumber = mobile.slice(4,mobileLength);

                        if(isNaN(mobnumber)) {
                            msg = "Invalid phone number , mobile must be of +255X XXXXXXXXX with Tanzania code";
                            returnStatement = form.mobile.focus();
                        }
                        
                       else if(mobileLength !== 13 || TzCode !== "+255" ) {

                            msg = "Invalid phone number , mobile must be of +255X XXXXXXXXX with Tanzania code";
                           returnStatement = form.mobile.focus();

                        }else {

                            let bachelorName = form.bachelor.value;
                            if(bachelorName == "0") {

                                msg = "Please fill your program name from the list" ;
                                returnStatement = form.bachelor.focus();

                            }
                            else {

                                let Allbtn_resident = document.querySelectorAll('input[name="region"]');
                                let statusresidentCheck = false;
                                let residentSelected;
                                for(const btnresident of Allbtn_resident) {
                                    if(btnresident.checked) {
                                        residentSelected = btnresident.value;
                                        statusresidentCheck = true;
                                        break;
                                    }
                                }
                                if(statusresidentCheck == false) {
                                    msg = "Please pick any resident or pick others to choose yours ";
                                }
                                else {

                                    if(residentSelected == "others") {

                                        let otherregion = form.otherRegion.value;
                                                if(otherregion == "") {
                                                    msg = "Please fill your region";
                                                    returnStatement = form.otherRegion.focus();
                                                }
                                    }

                                // continue here to validate other user input

                                let AllcheckBox = document.querySelectorAll('input[name ="course"]');
                                let statusCheck = false;
                                for(const checkBox of AllcheckBox) {
                                     
                                   if(checkBox.checked) {
                                        statusCheck = true;
                                        break;
                                    }
                                   
                                }
                                if(statusCheck == false) {
                                    msg = "Please choose any course for presentation";
                                    
                                }
                            }
                            
                            }

                        }
                    }
                }
            }
            }
            
        }
    }


    let ptag = document.querySelector(".validation");
   
    ptag.innerHTML = msg;
    return returnStatement;
    
}




for(const radionBtn of radionBtns ) {
     selectedRegion= radionBtn.value;
   
    radionBtn.addEventListener("click",()=> {
        selectedRegion = radionBtn.value;
        if(selectedRegion == "others") {
  
                hiddenregion.style.cssText = "margin-top: 0px !important; visibility:visible"
                // change the css style of the hiddenRegion to be visible when [others-button] is checked by user
            
        }else if(
            selectedRegion !== "others" &&
             (selectedRegion == "Kigoma" ||
            selectedRegion == "Mwanza") ||
             selectedRegion == "Dar es salam" ) 
             {
            hiddenregion.style.cssText = "margin-top: -60px !important; visibility:hidden";
            // hide again the input-field  when user click btn which is not [others-btn]
                }
    });


}



