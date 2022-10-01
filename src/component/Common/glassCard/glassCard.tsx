import { Box, BoxProps } from '@mui/material';
import React from 'react';


interface  glassCardProps extends BoxProps{

}

const GlassCard:React.FC<glassCardProps> = (props:glassCardProps) => {

    const {...rest}=props;
  
  return (
    <p>hi</p>
    // <Box className={useStyles.glass}{...rest} />
  )
}

export default GlassCard;