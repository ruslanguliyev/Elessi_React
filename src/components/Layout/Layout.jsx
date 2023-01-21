import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Routers'
import { Paper, ThemeProvider } from '@mui/material'
import { useSelector } from 'react-redux'
import { darkTheme, lightTheme } from "../../theme/theme";





const Layout = () => {


    // get theme from store
    const theme = useSelector((state) => state.theme);



    // ToggleSwitch component
    return (
        <>

            < ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme} >
                <Paper>
                    <Header />
                    <Routers />
                    <Footer />
                </Paper>
            </ThemeProvider >



        </>
    )
}

export default Layout