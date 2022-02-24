const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const sndBtn = document.querySelectorAll('form .send-btn');
const form = document.querySelector('form');

const mieszkanie = document.getElementById("mieszkanie");

nextBtn.forEach(button=>{
    button.addEventListener('click', () => {
        changeStep('next');
    })
})
prevBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('prev');
    })
})
sndBtn.forEach(button=>{
    button.addEventListener('click', () => {
        changeStep('send');
    })
})


function mieszkanieSelectCheck(nameSelect){
    console.log(nameSelect);
    if(nameSelect){
        opcja_mieszkanieValue = document.getElementById("opcja_mieszkanie").value;
        if(opcja_mieszkanieValue == nameSelect.value){
            mieszkanie.style.display = "block";
            mieszkanie.innerHTML =
            '<label for="przestrzen">Metraż <small>*</small></label><input type="text" name="przestrzen" id="przestrzen" pattern="[a-z]{10}" value="" size="22" tabindex="5" class="sm-form-control required textarea" required><label id="przestrzen-error" class="error" for="przestrzen" style="display: inline-block;"></label><p style="font-size: small; color: red;" id="blad1"></p>';
        }
        else{
            mieszkanie.style.display = "none";
            mieszkanie.innerHTML =
            '<label for="przestrzen">Metraż</label><input type="text" name="przestrzen" id="przestrzen" value="" class="sm-form-control"><p></p>';
        }
    }
    else{
        mieszkanie.style.display = "none";
        mieszkanie.innerHTML =
        '<label for="przestrzen">Metraż</label><input type="text" name="przestrzen" id="przestrzen" value="" class="sm-form-control"><p></p>';
    }
}

function validation(formIndex){
    const toValid = []
    const elements = document.getElementById('step-'+(formIndex+1).toString()).getElementsByClassName("required");

    const inpObj1 = document.getElementById("przestrzen");
    const inpObj2 = document.getElementById("rok");
    const inpObj3 = document.getElementById("miasto");
    const inpObj4 = document.getElementById("ulica");
    const inpObj5 = document.getElementById("nr_domu");
    const inpObj6 = document.getElementById("imie");
    const inpObj7 = document.getElementById("imie");
    const inpObj8 = document.getElementById("email");

    var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    for(let item of elements){
        item.value ? toValid.push(true) : toValid.push(false)
    }
    if(toValid.every(singleValid => singleValid === false)){
        return false;
    }else if(toValid.every(singleValid => singleValid === true)){
        if(mieszkanie.style.display === "block"){
            if(inpObj1.value.length >= 10){
                if(inpObj2.value === ""){
                    return true;
                }else if(inpObj2.value != ""){
                    if(inpObj2.value <= 2022){
                        if(inpObj2.value >= 1600){
                            if(inpObj3.value === "" && inpObj4.value === "" && inpObj5.value === ""){
                                return true;
                            }else if(inpObj3.value != "" && inpObj4.value != "" && inpObj5.value != ""){
                                if(inpObj3.value.length >= 3 && inpObj4.value.length >= 3 && inpObj5.value.length >= 1){
                                    if((inpObj6.value === "") && (inpObj7.value === "") && (inpObj8.value === "")){
                                        return true;
                                    }else if((inpObj6.value != "") && (inpObj7.value != "") && (inpObj8.value != "")){
                                        if(inpObj6.value.length >= 3 && (inpObj7.value.length <= 14 && inpObj8.value.length >= 9) && re.test(inpObj6.value)){
                                            return true;
                                        }else if(inpObj6.value.length < 3 || (inpObj7.value.length > 14 || inpObj8.value.length < 9) || !re.test(inpObj6.value)){
                                            return false;
                                        }
                                    }
                                }else if(inpObj3.value.length < 3 || inpObj4.value.length < 3 || inpObj5.value.length < 1){
                                    return false;
                                }
                            }
                        }else if(inpObj2.value < 1600){
                            return false;
                        }
                    }else if(inpObj2.value > 2022){
                        return false;
                    }
                }
            }else if(inpObj1.value.length < 10){
                return false;
            }
        }else if(mieszkanie.style.display === "none"){
                if(inpObj2.value === ""){
                    return true;
                }else if(inpObj2.value != ""){
                    if(inpObj2.value <= 2022){
                        if(inpObj2.value >= 1600){
                            if(inpObj3.value === "" && inpObj4.value === "" && inpObj5.value === ""){
                                return true;
                            }else if(inpObj3.value != "" && inpObj4.value != "" && inpObj5.value != ""){
                                if(inpObj3.value.length >= 3 && inpObj4.value.length >= 3 && inpObj5.value.length >= 1){
                                    if((inpObj6.value === "") && (inpObj7.value === "") && (inpObj8.value === "")){
                                        return true;
                                    }else if((inpObj6.value != "") && (inpObj7.value != "") && (inpObj8.value != "")){
                                        if(inpObj6.value.length >= 3 && (inpObj7.value.length <= 14 && inpObj8.value.length >= 9) && re.test(inpObj6.value)){
                                            return true;
                                        }else if(inpObj6.value.length < 3 || (inpObj7.value.length > 14 || inpObj8.value.length < 9) || !re.test(inpObj6.value)){
                                            return false;
                                        }
                                    }
                                }else if(inpObj3.value.length < 3 || inpObj4.value.length < 3 || inpObj5.value.length < 1){
                                    return false;
                                }
                            }
                        }else if(inpObj2.value < 1600){
                            return false;
                        }
                    }else if(inpObj2.value > 2022){
                        return false;
                    }
                }
            }
    }else{
        console.log('No validation elements' ,toValid);
        return false;
    }
}

function Step1(){
    const inpObj = document.getElementById("przestrzen");
    
    if(mieszkanie.style.display === "block" && inpObj.value.length < 10){
        document.getElementById("blad1").innerHTML = "Wprowadź przynajmniej 10 znaków.";
        inpObj.style.borderColor = "red";
    }else if(mieszkanie.style.display === "block" && inpObj.value.length >= 10){
        document.getElementById("blad1").innerHTML = "";
        inpObj.style.borderColor = "";
    }else if(mieszkanie.style.display === "none"){
        document.getElementById("blad1").innerHTML = "";
    }
}

function Step2(){
    const inpObj = document.getElementById("rok");
    
    if(inpObj.value > 2022 || inpObj.value < 1600){
        document.getElementById("blad2").innerHTML = "Wprowadzany rok musi być z przedziału 1600-2022.";
        inpObj.style.borderColor = "red";
    }else if(inpObj.value <= 2022 && inpObj.value >= 1600){
        document.getElementById("blad2").innerHTML = "";
        inpObj.style.borderColor = "";
    }
}

function Step3(){
    const inpObj1 = document.getElementById("miasto");
    const inpObj2 = document.getElementById("ulica");
    const inpObj3 = document.getElementById("nr_domu");
    
    if(inpObj1.value.length < 3 && inpObj2.value.length < 3 && inpObj3.value < 1){
        document.getElementById("blad3").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad4").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad5").innerHTML = "Wprowadź numer domu.";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length >= 3 && inpObj2.value.length < 3 && inpObj3.value < 1){
        document.getElementById("blad3").innerHTML = "";
        document.getElementById("blad4").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad5").innerHTML = "Wprowadź numer domu.";

        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length < 3 && inpObj2.value.length >= 3 && inpObj3.value < 1){
        document.getElementById("blad3").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad4").innerHTML = "";
        document.getElementById("blad5").innerHTML = "Wprowadź numer domu.";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length < 3 && inpObj2.value.length < 3 && inpObj3.value >= 1){
        document.getElementById("blad3").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad4").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad5").innerHTML = "";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length >= 3 && inpObj2.value.length >= 3 && inpObj3.value < 1){
        document.getElementById("blad3").innerHTML = "";
        document.getElementById("blad4").innerHTML = "";
        document.getElementById("blad5").innerHTML = "Wprowadź numer domu.";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length >= 3 && inpObj2.value.length < 3 && inpObj3.value >= 1){
        document.getElementById("blad3").innerHTML = "";
        document.getElementById("blad4").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad5").innerHTML = "";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length < 3 && inpObj2.value.length >= 3 && inpObj3.value >= 1){
        document.getElementById("blad3").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad4").innerHTML = "";
        document.getElementById("blad5").innerHTML = "";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length >= 3 && inpObj2.value.length >= 3 && inpObj3.value >= 1){
        document.getElementById("blad3").innerHTML = "";
        document.getElementById("blad4").innerHTML = "";
        document.getElementById("blad5").innerHTML = "";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "";
    }
}

function Step4(){
    const inpObj1 = document.getElementById("imie");
    const inpObj2 = document.getElementById("telefon");
    const inpObj3 = document.getElementById("email");

    var re3 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if(inpObj1.value.length < 3 && (inpObj2.value.length > 14 || inpObj2.value.length < 9) && !re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad7").innerHTML = "Wprowadź poprawny numer telefonu.";
        document.getElementById("blad8").innerHTML = "Wprowadź poprawny adres email.";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length >= 3 && (inpObj2.value.length > 14 || inpObj2.value.length < 9) && !re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "";
        document.getElementById("blad7").innerHTML = "Wprowadź poprawny numer telefonu.";
        document.getElementById("blad8").innerHTML = "Wprowadź poprawny adres email.";

        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length < 3 && (inpObj2.value.length <= 14 && inpObj2.value.length >= 9) && !re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad7").innerHTML = "";
        document.getElementById("blad8").innerHTML = "Wprowadź poprawny adres email.";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length < 3 && (inpObj2.value.length > 14 || inpObj2.value.length < 9) && re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad7").innerHTML = "Wprowadź poprawny numer telefonu.";
        document.getElementById("blad8").innerHTML = "";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length >= 3 && (inpObj2.value.length <= 14 && inpObj2.value.length >= 9) && !re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "";
        document.getElementById("blad7").innerHTML = "";
        document.getElementById("blad8").innerHTML = "Wprowadź poprawny adres email.";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "red";
    }else if(inpObj1.value.length >= 3 && (inpObj2.value.length > 14 || inpObj2.value.length < 9) && re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "";
        document.getElementById("blad7").innerHTML = "Wprowadź poprawny numer telefonu.";
        document.getElementById("blad8").innerHTML = "";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "red";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length < 3 && (inpObj2.value.length <= 14 && inpObj2.value.length >= 9) && re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "Wprowadź przynajmniej 3 znaki.";
        document.getElementById("blad7").innerHTML = "";
        document.getElementById("blad8").innerHTML = "";
        
        inpObj1.style.borderColor = "red";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "";
    }else if(inpObj1.value.length >= 3 && (inpObj2.value.length <= 14 && inpObj2.value.length >= 9) && re3.test(inpObj3.value)){
        document.getElementById("blad6").innerHTML = "";
        document.getElementById("blad7").innerHTML = "";
        document.getElementById("blad8").innerHTML = "";
        
        inpObj1.style.borderColor = "";
        inpObj2.style.borderColor = "";
        inpObj3.style.borderColor = "";
        
        alert('Dziękuję bardzo!');
    }
}

function changeStep(btn){
    let index = steps.indexOf(document.querySelector('form .step.active'));
    steps[index].classList.remove('active');
    console.log('step-'+(index+1).toString())
    if(btn === 'next' && validation(index)){
        index ++;
    }else if(btn === 'next' && !validation(index)){
        console.log('Not validation');
    }else if(btn === 'send' && validation(index)){
        console.log('Validation');
    }else if(btn === 'send' && !validation(index)){
        console.log('Not validation');
    }else{
        index --;
    }
    steps[index].classList.add('active');
}