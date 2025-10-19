import React, { useEffect, useState } from 'react'

function CoinTable() {

    const [count, setCount] = useState(0)

    const [flag, setFlag] = useState(false)

    async function download() {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const result = await response.json();

        console.log(result)
    }

    useEffect(() => {
        download();
    }, [count])

  return (
    <>
        CoinTable
        <br />
        {count}
        <br />
        <button onClick={()=> setCount(count+1)}>Counter</button>
        <br />
        {flag && <div>Flag is true</div>}
        <button onClick={() => setFlag(!flag)}>Toggle</button>
    </>
  )
}

export default CoinTable