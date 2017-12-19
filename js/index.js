
(function () {

var names = document.querySelectorAll('.form-name');
var tels = document.querySelectorAll('.form-tel');
var emails = document.querySelectorAll('.form-email');

for (var i = 0; i < names.length; i++) {
	names[i].addEventListener('blur', function validateName(event) {
		// проверка имени на соответсвие Мамин-Сибиряк Эмануэль-Юлиан Панкратц
		if ( !(this.value.match(/^[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}\s[А-Я]{1}[А-Яа-я-]{1,}$/ )) ) {
	  //invalid field	
      this.classList.add("invalid-class");
      //...вернуть фокус обратно
      //nameField.focus();
       return;
    } else { //valid field
        this.classList.remove("invalid-class");
        this.classList.add("valid-class");
        makeSubmitButtonEnabled.call(this);
    	}

	});
}

for (var i = 0; i < tels.length; i++) {
	tels[i].addEventListener('blur',function validateTel (event) {
		var allNumbers=event.target.value.match(/\d/g);
		var summaAllnumbers = 0;
		//проверка на наличие чисел
		if ( !(allNumbers===null) ) {
				// находим сумму всех чисел поля
				for (var i = 0; i < allNumbers.length; i++) {
					summaAllnumbers += +allNumbers[i];
				}
		}
	    // проверка на корректность формата номера и сумму
	    if ( !(this.value.match(/^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/ ) && summaAllnumbers > 40 )  ) {
	    	//invalid field
	      this.classList.add("invalid-class");
	      return;

	    } else {
  	      this.classList.remove("invalid-class");
  	      this.classList.add("valid-class");
  	      makeSubmitButtonEnabled.call(this);
	      
	      }
	  });
   
}

for (var i = 0; i < emails.length; i++) {
	emails[i].addEventListener('blur', function validateEmail (event) {
        if ( !(this.value.match(/^[a-zA-z]{2,}\@gmail\.com$/ )) ) {
      this.classList.add("invalid-class");
      return;
    } else {
        this.classList.remove("invalid-class");
        this.classList.add("valid-class");
        makeSubmitButtonEnabled.call(this);
      }
  });
}



// проверка всех полей на валидность, есди да то включаем кнопку submit
function makeSubmitButtonEnabled() {
	var inputs = this.form.getElementsByTagName('input');
	var submitButton = this.form.querySelector('.send-form');
	var validInputs = this.form.querySelectorAll('.valid-class');

	if ( inputs.length == validInputs.length) {
		submitButton.disabled = false;
	}
}
}());

// Плагин анимированный плейсхолдер
(function () {

  function getCoords(elem) { // координаты относ документа
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  }
    var input = document.querySelectorAll('[data-placeholder]'); // кастомные интпуты
      var forms = document.getElementsByTagName('form');

      for (var i = 0; i < forms.length; i++) { // вешаем обработчики на все формы
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
      

  // показывает подсказку при фокусе
  function ShowPlaceholderTooltip () { 
    var parentCoords = getCoords(this);
    var placeholderTooltip = document.createElement('div');
    placeholderTooltip.classList.add('placeholder-tooltip');
    placeholderTooltip.textContent = this.dataset.placeholder;
    document.body.appendChild(placeholderTooltip);
    placeholderTooltip.style.position = 'absolute';
    placeholderTooltip.style.top = parentCoords.top - placeholderTooltip.offsetHeight  +'px'; //координаты подсказки
    placeholderTooltip.style.left = parentCoords.left + 'px';
  }
   // убираем подсказку
   function removePlaceHolderTooltip () { 
    var tooltip = document.querySelector('.placeholder-tooltip');
    document.body.removeChild(tooltip);

  }  

}()); 