import React from 'react'

function MyProfile({profile}) {
  return (
    <div>
        {profile.firstname} {profile.lastname}
        </div>
    
  )
}

export default MyProfile