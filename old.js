var form = document.forms.contacts;
var nameField = form.elements.name;
var telField = form.elements.tel;
var emailField = form.elements.email;




// проверка имени на соответсвие Мамин-сибиряк Андрей Николаевич
nameField.onblur = function validateName () {
    
    if ( !(this.value.match(/[А-Яа-я-]{2,}\s[А-Яа-я]{2,}\s[А-Яа-я]{2,}/ )) ) {

      this.classList.add("invalid-class");
      //... и вернуть фокус обратно
      nameField.focus();
    } else {
      this.classList.remove("invalid-class");
      this.classList.add("valid-class");
      makeSubmitButtonEnabled.call(this);
    }
  };

// проверка на соответсвие номера формату +7(999)999-99-99 и сумме цифр строго больше 40
telField.onblur = function validateTel () {
	
	let allNumbers=this.value.match(/\d/g);
	let summaAllnumbers = 0;
	
	// находим сумму всех чисел поля
	for (var i = 0; i < allNumbers.length; i++) {
		summaAllnumbers += +allNumbers[i];
	}
    
    if ( !(this.value.match(/\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/ ) && summaAllnumbers > 40 ) ) {

      this.classList.add("invalid-class");
      //... и вернуть фокус обратно
      telField.focus();
    } else {
      this.classList.remove("invalid-class");
      this.classList.add("valid-class");
      makeSubmitButtonEnabled.call(this);
      
    }
  };

// проверка поля на соответсвие xxx@gmail.com

emailField.onblur = function validateEmail () {
    
    if ( !(this.value.match(/[a-zA-z]{2,}\@gmail\.com/ )) ) {

      this.classList.add("invalid-class");
      //... и вернуть фокус обратно
      emailField.focus();
    } else {
      this.classList.remove("invalid-class");
      this.classList.add("valid-class");
      makeSubmitButtonEnabled.call(this);
    }
  };


function makeSubmitButtonEnabled() {
	var inputs = this.form.getElementsByTagName('input');
	var sumbitButton = this.form.getElementsByTagName('button');
	var counter = 0;
	
	for (var i = 0; i < inputs.length; i++) {
	if 	( inputs[i].classList.contains('valid-class') )
		counter++;
	}
	

	if ( inputs.length==counter ) 
		sumbitButton[0].disabled = false;

}

