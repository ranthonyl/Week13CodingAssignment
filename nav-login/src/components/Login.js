import React from 'react'

function Login() {
  return (
    <div className="container">
      <h3>Login</h3>
    <form action=""> 
				<div> 
					<label htmlFor="UserName">UserName</label>
                    <br></br>
					<input type="text" name="UserName" id="UserName"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
                    <br></br>
					<input type="text" name="passw" id="passw"/> 
				</div> 
                <br></br>
				<button type="submit">Login</button>
                <br></br>
			</form> 
            <br></br> 
    </div>
    
  )
}

export default Login