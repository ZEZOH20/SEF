import React, { useState, useReducer, useEffect } from 'react'
import { setLocalStorage } from '../../hooks/setLocalStorage/setLocalStorage'
import Theme from './Theme'


const ThemeSwitch = () => {

    const initialState = {
        mainColor: '#000000',
        secondColor: '#ffffff',
    }
    const { setItem, getItem } = setLocalStorage('themeColor')

    const reducer = (state, action) => {
        switch (action.type) {
            case 'switchMode':
                const newState = {
                    mainColor: state.secondColor,
                    secondColor: state.mainColor
                }
                setItem(newState)
                return newState

            case 'loadMode':
                const localStorageItem = getItem()
                return localStorageItem ? {
                    mainColor: localStorageItem.mainColor,
                    secondColor: localStorageItem.secondColor
                } : initialState
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        //need to handel performance loading from localStorage
        dispatch({ type: 'loadMode' })
    }, [])

    return (
        <Theme props={{ state, dispatch }} />
    )
}

export default ThemeSwitch


/*
 you need to use reducer

 text
 button
 background

 */

