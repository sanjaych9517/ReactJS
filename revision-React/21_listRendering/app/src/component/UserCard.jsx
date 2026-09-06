import React from 'react'

const UserCard = ({name, age, id}) => {
  return (
    <div>
      <h1>{id} {name} {age}</h1>
    </div>
  )
}

export default UserCard
