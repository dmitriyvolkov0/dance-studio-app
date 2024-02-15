import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`max-w-[400px] px-[15px] mx-auto ${className}`}>
        {children}
    </div>
  )
}
