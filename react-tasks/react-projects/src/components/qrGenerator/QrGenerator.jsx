import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

const QrGenerator = () => {
    const [input, setInput] = new useState('')
    const [QrcodeValue, setQrcodeValue] = new useState('')
    const handelQRcode = () => {
        setQrcodeValue(input)
        setInput('')
    }
    useEffect(() => {
        console.log(QrcodeValue)
    }, [QrcodeValue])
    return (
        <div className=' w-11/12 mx-auto mt-5'>
            <div className='grid grid-cols-2 gap-2'>
                <input className=' p-3 border-none focus:border-none bg-black/90 text-white/90 rounded-sm ' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter QRcode Value' />
                <button disabled={input == '' ? true : false} className=' max-w-sm p-3  text-xl rounded-md  text-white/90 disabled:text-white/85  font-bold bg-red-900 disabled:bg-red-950 ' onClick={handelQRcode} >New QRcode</button>
                <QRCode value={QrcodeValue} className=' mx-auto' fgColor='#450a0a' />
            </div>
        </div>
    )
}

export default QrGenerator
