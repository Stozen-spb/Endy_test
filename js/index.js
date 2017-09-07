



var names = document.getElementsByName('name');
var tels = document.getElementsByName('tel');
var emails = document.getElementsByName('email');

for (var i = 0; i < names.length; i++) {
	names[i].addEventListener('blur', function validateName(e) {
		// проверка имени на соответсвие Мамин-Сибиряк Эмануэль-Юлиан Панкратц
		
		if ( !(event.target.value.match(/[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}/ )) ) {
	  //invalid field	
      event.target.classList.add("invalid-class");
      alert('Формат ФИО: Иванов-Петров Алексей Владимирович');
      //...вернуть фокус обратно
      //nameField.focus();
       return false;

    } else { //valid field
      event.target.classList.remove("invalid-class");
      event.target.classList.add("valid-class");
      makeSubmitButtonEnabled.call(event.target);
    	}

	});
}

for (var i = 0; i < tels.length; i++) {
	tels[i].addEventListener('blur',function validateTel (e) {
		
		let allNumbers=event.target.value.match(/\d/g);
		let summaAllnumbers = 0;
		
		//проверка на наличие чисел
		if ( !(allNumbers===null) ) {
			
				// находим сумму всех чисел поля
				for (var i = 0; i < allNumbers.length; i++) {
					summaAllnumbers += +allNumbers[i];
				}
		}
	    
	    if ( !(event.target.value.match(/\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/ ) || summaAllnumbers > 40 )  ) {
	    	//invalid field
	      event.target.classList.add("invalid-class");
	      alert('Формат телефона: +7(999)999-99-99');
      	  
	      //... вернуть фокус обратно
	      //telField.focus();
	      return false;

	    } else {
	      event.target.classList.remove("invalid-class");
	      event.target.classList.add("valid-class");
	      makeSubmitButtonEnabled.call(event.target);
	      
	    }
	  });
   
}

for (var i = 0; i < emails.length; i++) {

	emails[i].addEventListener('blur', function validateEmail (e) {
    // проверка на соответсвие номера формату +7(999)999-99-99 и сумме цифр строго больше 40
    if ( !(event.target.value.match(/[a-zA-z]{2,}\@gmail\.com/ )) ) {

      event.target.classList.add("invalid-class");
      alert('Формат почты: example@gmail.com');
      //... вернуть фокус обратно
      //emailField.focus();
      return false;
    } else {
      event.target.classList.remove("invalid-class");
      event.target.classList.add("valid-class");
      makeSubmitButtonEnabled.call(event.target);
    }
  });
}



// проверка всех полей на валидность, есди да то включаем кнопку submit
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

