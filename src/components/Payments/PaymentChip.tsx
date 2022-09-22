import React from 'react'
import {Chip} from '@mui/material'
import {PaymentChipSx} from './Styles'
type prop = {
    icon: any,
    label: string
}
const PaymentChip = ({icon, label}: prop) => {
  return (
    <Chip
        icon={icon}
        label={label}
        sx={PaymentChipSx}
      />
  )
}

export default PaymentChip