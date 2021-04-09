import React from 'react'
import ContentGroup from './subComponents/ContentGroup'

import HeaderGroup from './subComponents/HeaderGroup'

const Group = () => {
    return (
        <div>
            <HeaderGroup/>
            <hr className='w-full border-b-2 my-10 border-purple-300'/>
            <ContentGroup/>
        </div>
    )
}

export default Group
