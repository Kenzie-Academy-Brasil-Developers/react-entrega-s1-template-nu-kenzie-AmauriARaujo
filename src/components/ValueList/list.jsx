import { Card } from "./CardValues/card"
import styles from"./list.module.css"

export const ValueList=({valueList,deleteCard})=>{


   

        const total=valueList.reduce((previousValue,currentValue)=>previousValue+currentValue.value,0,)
    
    return(
        <>
            {valueList.length >0 ?(
            <>
              <div className={styles.totalValue}>
                <p>Valor Total:</p>
              <span>R$: {total.toFixed(2)}</span>
              <small>O valor se refere ao saldo</small>
              </div>
                
                <ul>
                <span>Resumo Financeiro</span>

                    {valueList.map(value=>{
                        return <Card key={value.id} id={value.id} description={value.description} value={value.value} category={value.category} deleteCard={deleteCard}/>
                        })}
                </ul>
            </> 
            ):(
            <>
                <div className={styles.valores}>

                <span>Resumo Financeiro</span>
                <h1>Você ainda não possui nenhum lançamento</h1>

                </div>
            </>
            )}
        </>
    )
}     