$('#brif-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Минимальная длинна имени 15 символа")
    },
    phone: {
      required: "Укажите телефон",
    },
    email: "Введите корректный email"
  },
},
);

$('#offer-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  errorClass: "invalid-offer",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Минимальная длинна имени 15 символа")
    },
    phone: {
      required: "Укажите телефон",
    }
  }
});

$('#modal-form').validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени 2 символа"),
      maxlength: jQuery.validator.format("Минимальная длинна имени 15 символа")
    },
    phone: {
      required: "Укажите телефон",
    },
  }
});

// mask input

$('input[type="tel"]').mask('+7 (999) 999-99-99');
