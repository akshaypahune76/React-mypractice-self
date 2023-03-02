import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtonscommon(props:any) {
    // console.log("Propes in common btn comp", props)
  return (
    <>
    {/* <h1>common button componunt</h1> */}
    <Stack spacing={2} direction="row">
      <Button variant={props.btnProps ? props.btnProps.variant:"contained"} onClick={props.btnClickHandler}>{props.btnProps ? props.btnProps.label:"Default Lable"}</Button>
    </Stack>
    </>
   
  );
}