export interface inputProps {
    id: string;
    label: string;
    variant: "outlined";
    FieldId: string;
    type: string ;
    defaultValue: any;
    onInput: (FieldId: string, value: string, isTouched: boolean, isValid: boolean) => any;
    validators: { type: string; value: string | number }[];
  }
  
 export interface stateType {
    value: string;
    isTouched: boolean;
    isValid: boolean;
  }

  export interface formInputs1 {
    "shopName": stateType,
    "operaterName": stateType,
    "shopLocation": stateType,
    "shopCategory": stateType
  }

  export interface formInputs2 {
    "email": stateType,
    "password": stateType
  }
  export interface formStateType {
    inputs: any,
    isValid: boolean
  }

  
type Payload = {
    value: string;
    validators: { type: string; value: string | number }[];
  };
 export  type Action = {
    type: string;
    payload: Payload;
  };

export interface type2 {FieldId:string, value:string, isTouched:boolean, isValid:boolean}

//products interfaces


export interface product{
  key: number,
  id: number,
  name: string,
  price: string
}




//payments interfaces


export interface PreviousPaymentProps {
  icon1: any;
  icon2: any;
  icon3: any;
  label1: string;
  label2: string;
  label3: string;
};
