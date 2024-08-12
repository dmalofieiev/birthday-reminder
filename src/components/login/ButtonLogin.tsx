import { Button } from '@mui/material'
import React from 'react'
import { IButtonProps } from '../../types/interfaces'

export const ButtonLogin: React.FC<IButtonProps> = ({onSave}) => {
  return (
   <Button variant="outlined" onClick={onSave}>SAVE</Button>
  )
}
