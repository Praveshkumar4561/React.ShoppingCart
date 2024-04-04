import React from 'react'

export default function Login() {
  return (
    <div>
      <form action="/login" method="post">
      <input type="text" name='email' placeholder='enter your email'/><br /><br />
      <input type="text" name='password' placeholder='enter your password'/><br /><br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
