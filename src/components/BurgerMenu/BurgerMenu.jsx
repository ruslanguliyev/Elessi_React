import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import React from 'react'

const BurgerMenu = () => {
    return (
        <Box
            position="fixed"
            zIndex={10}
            right="0"
            top="0"
            overflow="auto"
            width="max(400px, 30%)"
            height="100%"
            backgroundColor="white"
        >
            <Box padding='30px' overflow='auto' height='100%'>
                
            </Box>
        </Box>
    )
}

export default BurgerMenu