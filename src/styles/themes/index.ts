import { createTheme } from "@mui/material"

export const colors={
    primary: '#326dee',
    secondary: '#1ac888',
    error:'#d32752',
    info:'#f6c31c'

}


 const theme = createTheme({
    palette:{
        primary:{
            main:colors.primary
        },
        secondary:{
            main:colors.secondary
        }
    },
});



export default theme;