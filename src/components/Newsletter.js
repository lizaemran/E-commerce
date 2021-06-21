import React from 'react'

const Newsletter = () => {
    return (
    <div className="Newsletter">
			<form action="/examples/actions/confirmation.php" method="post">
				<div class="modal-header">
					<h4>Subscribe to our newsletter</h4>	
					</div>
				<div class="modal-body" >					
					<p>Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
					<div class="input-group">
						<input type="email" class="form-control" placeholder="Enter your email" required/>
						<div >
							<input type="submit" id="bttn" class="btn btn-primary" value="Subscribe"/>
						</div>
					</div>
				</div>
			</form>			
            </div>
    )
}

export default Newsletter
