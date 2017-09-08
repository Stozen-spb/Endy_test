



var names = document.querySelectorAll('.form-name');
var tels = document.querySelectorAll('.form-tel');
var emails = document.querySelectorAll('.form-email');

for (let i = 0; i < names.length; i++) {
	names[i].addEventListener('blur', function validateName(event) {
		// проверка имени на соответсвие Мамин-Сибиряк Эмануэль-Юлиан Панкратц
		
		if ( !(event.target.value.match(/[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}/ )) ) {
	  //invalid field	
      event.target.classList.add("invalid-class");
      
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

for (let i = 0; i < tels.length; i++) {
	tels[i].addEventListener('blur',function validateTel (event) {
		
		let allNumbers=event.target.value.match(/\d/g);
		let summaAllnumbers = 0;
		
		//проверка на наличие чисел
		if ( !(allNumbers===null) ) {
			
				// находим сумму всех чисел поля
				for (let i = 0; i < allNumbers.length; i++) {
					summaAllnumbers += +allNumbers[i];
				}
		}
	    // проверка на корректность формата номера и сумму
	    if ( !(event.target.value.match(/\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/ ) && summaAllnumbers > 40 )  ) {
	    	//invalid field
	      event.target.classList.add("invalid-class");
	      
      	  
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

for (let i = 0; i < emails.length; i++) {

	emails[i].addEventListener('blur', function validateEmail (event) {
    
    if ( !(event.target.value.match(/[a-zA-z]{2,}\@gmail\.com/ )) ) {

      event.target.classList.add("invalid-class");
   
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
	let inputs = this.form.getElementsByTagName('input');
	let sumbitButton = this.form.querySelector('.send-form');
	let counter = 0;
	
	for (let i = 0; i < inputs.length; i++) {
	if 	( inputs[i].classList.contains('valid-class') )
		counter++;
	}
	

	if ( inputs.length==counter ) 
		sumbitButton.disabled = false;

}

// Плагин анимированный плейсхолдер

function getCoords(elem) { // координаты относ документа
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
  var input = document.querySelectorAll('[data-placeholder]'); // кастомные интпуты
  var forms = document.getElementsByTagName('form');


  for (let i = 0; i < forms.length; i++) { // вешаем обработчики на все формы
  
  forms[i].addEventListener("focus", function(event) {
      if (!event.target.hasAttribute('data-placeholder')) return;
      ShowPlaceholderTooltip.call(event.target); // вызываем функцию с контекстом к текущему элементу

      // var g = ShowPlaceholderTooltip.bind(event.target); вариант с bind
      // g();
        
    }, true);
 
  forms[i].addEventListener("blur",function(event) {
      if (!event.target.hasAttribute('data-placeholder')) return;
      removePlaceHolderTooltip();
        
    }, true);
}
    

 
    function ShowPlaceholderTooltip () { // показывает подсказку при фокусе
      let parentCoords = getCoords(this);
      let placeholderTooltip = document.createElement('div');
      placeholderTooltip.classList.add('placeholder-tooltip');
      placeholderTooltip.textContent = this.dataset.placeholder;
      document.body.appendChild(placeholderTooltip);
      placeholderTooltip.style.top = parentCoords.top - placeholderTooltip.offsetHeight  +'px'; //координаты подсказки
      placeholderTooltip.style.left = parentCoords.left + 'px';
    }

     function removePlaceHolderTooltip () { // убираем подсказку
      let tooltip = document.querySelector('.placeholder-tooltip');
      document.body.removeChild(tooltip);
 
    }   