import React, { useState } from 'react'
import AddMemberForm from './AddMemberForm'
import GroupingList from './GroupingList'
import ListMember from './ListMember'

const ContentGroup = () => {

    let [list, setList] = useState([])

    const addMember = (member) => {
        
        setList([...list, member]);
    }

    const removeMember = (id) => {
        const newList = list.filter(lst => lst.id !== id);
        setList(newList)
    }

    return (
        <div className='text-left text-gray-700 font-semibold'>
          <h1 className='text-4xl font-semibold'>Setting Group :</h1>
          <AddMemberForm addMember={addMember} list={list}/>
          <hr className='w-full border-b-2 my-5 border-purple-300'/>
          <ListMember removeMember={removeMember} list={list}/>
          <hr className='w-full border-b-2 my-10 border-purple-300'/>
          <GroupingList list={list}/>
        </div>
    )
}

export default ContentGroup
