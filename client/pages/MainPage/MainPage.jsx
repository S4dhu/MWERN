import React, { useEffect, useState } from 'react'
import api from '../../api'

import './MainPage.scss';

const MainPage = () => {
    const [value, setValue] = useState('')
    useEffect(() => {
        async function fetchData() {
            await api.test().then(value => {
                setValue(value.data.data)
            })
        }
        fetchData()
    }, [])
    return (
        <div>{value}</div>
    )
}

export default MainPage
