import { createTheme } from "@mui/material"


export const colors={
    primary: '#326dee',
    secondary: '#1ac888',
    error:'#d32752',
    info:'#f6c31c',
    whiteColor:'#FFFFFF'

}


 const materialUitheme = createTheme({
    palette:{
        primary:{
            main:colors.primary,
            contrastText: '#fff',
        },
        secondary:{
            main:colors.secondary
        }
    } 
});



export default materialUitheme;