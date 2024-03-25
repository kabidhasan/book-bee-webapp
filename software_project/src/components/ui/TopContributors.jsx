import React from 'react'

let Contributors = [
    {
        name: 'Rahim',
        contributions: 100,
    },
    {
        name: 'Karim',
        contributions: 80,
    },
    {
        name: 'saif',
        contributions: 70,
    },
    {
        name: 'Zakaria',
        contributions: 50,
    },
    {
        name: 'Tahmid',
        contributions: 40,
    },
    
    {
        name: 'Kabid',
        contributions: 20,
    },
    
    
]



function TopContributors() {
  return (
    <>
            <h1 className='text-2xl text-orange-500 mt-16 font-bold text-center border-2 border-black '>Top Contributors</h1>
			<ul className='flex flex-col justify-start items-center font-sans text-white text-xl font-medium border-2 border-black mb-16 divide-y divide-black'>
                {Contributors.map((contributor) => (
                    <li key={contributor.name} className='w-full'>
                        <div className='flex justify-between px-5'>
                            <p>{contributor.name}</p>
                            <p>{contributor.contributions}#</p>
                        </div>
                    </li>
                ))}
			</ul>
		</>
  )
}

export default TopContributors