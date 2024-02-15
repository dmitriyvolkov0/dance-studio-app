import React from 'react'

export function TabsHeaderItem({children}){
  return(
    <span>
      {children}
    </span>
  )
}

export function TabsHeader({ children, activeTab, setActiveTab}){
  return (
    <ul className='flex justify-between border-b border-[#ddd] pb-[15px] px-[20px] mb-[25px] max-w-[300px] mx-auto'>
      {children.map((item, i) => 
        <li
          onClick={() => setActiveTab(i)}
          key={i}
          className={`${activeTab === i && ' text-brand'} font-medium cursor-pointer ease-in-out duration-300`}
        >
          {item}
        </li>
      )}
    </ul>
  )
}

export function TabsContentPage({children}){
  return (
    <>
      {children}
    </>
  )
}

export function TabsContent({ children, activeTab }) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-[300px] mx-auto'>
      {children.filter((item, i) => activeTab === i && item
      )}
    </div>
  )
}

export function Tabs({children}){
  return(
    <>
      {children}
    </>
  )
}