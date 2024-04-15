import dynamic from 'next/dynamic';
import React from 'react'

const Card = dynamic(() => import('components/Card/Card'))

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

    return (<div>
        <h1>Frontend News articles</h1>
        <div className='card-container'>
            {data.map((item) => (
                <Card key={item} />
            ))}
        </div>
    </div>
    )
}

export default page