import React, {useState, useEffect} from 'react'
import { TextField } from '@mui/material'

interface inputProps {
    id: string,
    label: string,
    variant: 'outlined',
    FieldId: string,
    onInput: (FieldId: string, value: string, isTouched: boolean) => any
    
   
    
}
const Input = ({id, label, variant, FieldId, onInput}: inputProps) => {

  const [value, setValue] = useState<string>('')
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
  }

  const blurHandler = () => {
      setIsTouched(true)
  }

  useEffect(() => {
      onInput(FieldId, value, isTouched)
      if(value=='' && isTouched){
        setIsError(true)
      }
      if(value!==''){
        setIsError(false)
      }
      if(value.length<5 && isTouched){
        setIsError(true)
      }
  }, [value, isTouched])
  return (
    <TextField
    error={isError}
    id={isError ?'outlined-error' : id }
    label={label}
    variant={variant}
    sx={{ marginBottom: "1rem", width: "20rem" }}
    helperText={isError ? `${FieldId} should be greater than= 5 characters` : ''}
   onChange={changeHandler}
   onBlur={blurHandler}
   
  />
  )
}

export default Input