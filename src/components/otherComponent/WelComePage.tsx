import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Interface } from "readline";
import BasicButtonscommon from "../commonComponunt/BasicButtonCommon";
import BasicButtons from "../commonComponunt/BasicButtonCommon";
import BasicRating from "./BasicRatingComponent";
import CustomizedRating from "./RatingComponents";

interface starvalueprops {
    onRouteChange:any
}

const WelComePage= () => {
    const [starvalue, setStarvalue] = useState<any>(0);
    const [buttonProps, setbuttonProps] = useState({
        variant:'contained',
        label:'Dashboard Button'
    });
   
    return(
        <>
         <h1> Welcome </h1>
         <h1> To </h1>
         <h1> Vision IT </h1>
         <h1> React </h1>
         <h1> Devolopment </h1>
         <h1> Site </h1>
          <TextField id="outlined-basic" 
              label="Outlined" 
              variant="outlined" 
              value={starvalue} 
              onChange={(e: any) => setStarvalue(e.target.value)}
          />
          <h2>Star Value: {starvalue}</h2>
         <BasicRating starRating={starvalue} />
         <BasicButtonscommon btnProps={buttonProps} />
        </>
    )

}

export default WelComePage;