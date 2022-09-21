
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";

const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH"
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH"
const VALIDATOR_TYPE_EMAIL = "EMAIL"
const VALIDATOR_TYPE_PASSWORD = "PASSWORD"
const VALIDATOR_TYPE_MIN = "MIN"


export const VALIDATOR_REQUIRE = () => ({type: VALIDATOR_TYPE_REQUIRE, value: 'pp'})

export const VALIDATOR_MINLENGTH = (val:number) => ({type: VALIDATOR_TYPE_MINLENGTH, value: val})

export const VALIDATOR_MAXLENGTH = (val:number) => ({type: VALIDATOR_TYPE_MAXLENGTH, value: val})

export const VALIDATOR_EMAIL = () => ({type: VALIDATOR_TYPE_EMAIL, value: ''})
export const VALIDATOR_PASSWORD = (val:number) => ({type: VALIDATOR_TYPE_PASSWORD, value: val})

export const VALIDATOR_MIN = (val:number) => ({type: VALIDATOR_TYPE_MIN, value: val})


export const validate = (value:any, validators: {type:string, value: string | number }[]) => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
          isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
          isValid = isValid && value.trim().length >= validator.value;
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
          isValid = isValid && value.trim().length <= validator.value;
        }
       
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
          isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
        if(validator.type === VALIDATOR_TYPE_MIN){
          isValid = isValid && value>0
        }
      }
      return isValid;
}