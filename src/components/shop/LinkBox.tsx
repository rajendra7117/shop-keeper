import React from 'react'
import { Paper } from '@mui/material'
import { PaperSx } from './Styles'
import { NavLink } from 'react-router-dom'
import { AnyMap } from 'immer/dist/internal'

type prop = {
    url: string,
    text: string,
}
const LinkBox = ({url, text}:prop) => {
  return (
    <Paper
    elevation={5}
    variant="outlined"
    sx={PaperSx}
    className="flex-col"
  >
    <NavLink to={url}>{text}</NavLink>
  </Paper>
  )
}

export default LinkBox