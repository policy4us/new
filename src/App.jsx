import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './Form'
import Initial from './Initial'
import Display from './Display'
import Age from './Age'
import {  FormProvider } from './FormContext'

function App() {  return (

    <FormProvider>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/initial" element={<Initial/>} />
        <Route path="/display" element={<Display/>} />
        <Route path="/age" element={<Age/>} />
      </Routes>
    </FormProvider>
  )
}

export default App
