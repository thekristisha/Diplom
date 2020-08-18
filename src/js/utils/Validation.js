export class Validation{
    constructor(form, field, err, errorCaption){
        this.form = form;
        this.field = field;
        this.err = err;
        this.errorCaption = errorCaption;
    }

    setSubmitButtonState = (button, state) => {
        if (!state) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }

    isValid = () => {
        this.field.setCustomValidity("");

        if (this.field.validity.valueMissing) {
            this.field.setCustomValidity(this.err);
            this.errorCaption.textContent = this.field.validationMessage;
        } else {
            this.errorCaption.textContent = '';
        }
    }


}