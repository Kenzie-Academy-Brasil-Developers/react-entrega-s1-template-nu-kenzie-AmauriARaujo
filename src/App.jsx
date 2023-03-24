

import './App.css'
import { Header } from './components/Header/header'
import { Form } from './components/Form/form'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { ValueList } from './components/ValueList/list'

const App=()=> {
  const [valueList,setValueList]=useState([

  ]

  )

  const addValueToList=(formData)=>{
    const newValue={...formData,id:uuidv4(),value: Number(formData.value)}
   
    setValueList([...valueList,newValue])

    
  }

  const deleteCard=(cardId)=>{
    const newValueList=valueList.filter((card)=>{
      return card.id !== cardId
    })
    setValueList(newValueList)
  }

 


  return (

    <>
    
      <Header/>
    <div className="App">

      <Form addValueToList={addValueToList}/>
     
  <ValueList valueList={valueList} deleteCard={deleteCard}/>
     
    </div>

    
    </>
   
  )
}

export default App