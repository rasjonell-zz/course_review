import React from 'react'
import { auth, provider } from '../../config/firebase';

export default props => (
  <div>
    <button onClick={() => auth.signInWithPopup(provider)}>Sign In</button>
  </div>
)