import React from 'react'
import { connect } from 'react-redux'
import addToTotal from '../actions'

let AddTotoalForm = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e=> {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addToTotal(input.value))
                input.value=''
            }}>
                <input ref={node=>{
                    input=node
                }} />
                <button type="submit">
                    Add To Total
                </button>
            </form>
        </div>
    )
}
AddTotoalForm = connect ()(AddTotoalForm)

export default AddTotoalForm