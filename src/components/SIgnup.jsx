import React from 'react'

export default function SIgnup() {
  return (
    <div>
      <form action="/" method="post">
      Name:-<input type="text" placeholder='enter your name' name='name'/><br /><br />

      ContactNumber:-<input type="text" placeholder='enter your contact no' name='mobilenumber'/><br /><br />

      Email:-<input type="text" placeholder='enter your email' name='email'/><br /><br />
      
      Password:-<input type="text" placeholder='enter your password' name='password'/><br /><br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
