import React from 'react'

function LinkButton({children, href}) {
return (
    <a className=' text-primaryGreen cursor-pointer hover:underline text-lead font-heading ' href={href}>
        {children}
    </a>
)
}

export default LinkButton