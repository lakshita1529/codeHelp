import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CodeHelp from './CodeHelpLandPage/CodeHelp'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CodeHelp/>}/>
                   
                </Routes>
            </BrowserRouter>   
        </>
    )
}

export default App