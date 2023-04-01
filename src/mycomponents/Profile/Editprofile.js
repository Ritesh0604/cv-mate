import './Profile.css'

export default function Editprofile()
{ 
return (
<div className="stsportal-container" style={{background:"white"}} >
            
                <div className="px-3 mb-4 profile" style={{ boxShadow: "0px 6px 6px rgba(9, 9, 4, 0.57)", borderRadius: "5px"}}>
                  <div className="row">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:"10%",width:"10%"}} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </svg>
                  </div>
                 
                  
              
              
                 

                  <div className="row pb-4 px-3">
                    

                      <div className="input-group mb-3">
                    <span className="input-group-text">No.</span>
                    <div className="form-floating">
                        <input type="text" className="form-control" name="uname" id="enrollment_number" placeholder="Enrollment Number" title="Must contain 12 digits" pattern="[0-9]{12}" minLength='12' maxLength='12' required />
                        <label htmlFor="name">Enrollment Number</label>
                    </div>
                </div>
              

                      <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <div className="form-floating">
                        <input  type="text" className="form-control" name="uname" id="full_name" placeholder="Full Name" pattern="(?=.*[a-zA-Z]).{1,}" title="Only contain alphabets" required />
                        <label htmlFor="name">Full Name</label>
                    </div>
                </div>
                        

                        <div className="input-group mb-3">
                    <span className="input-group-text">.com</span>
                    <div className="form-floating">
                        <input type="email" className="form-control" name="mail" id="mail" placeholder="E-Mail" required/>
                        <label htmlFor="mail">abc@gmail.com</label>
                    </div>
                </div>
                        
                <div className="input-group mb-3">
                    <span className="input-group-text">Branch</span>
                    <div className="form-floating">
                      
                      
                      
                        <input  type="text" className="form-control" name="branch" id="branch" placeholder="branch name" pattern="(?=.*[a-zA-Z]).{1,}" title="Only contain alphabets" required />
                        </div>
                       
                      </div>

                      
<div className="input-group mb-3">

  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
                  

                  <div className='row pb-3'>
                  <div className='col justify-content-md-end d-grid gap-2 d-md-flex' >
                    <button className='btn btn-success' type="button" style={{background:"#ee4a2a"}}>cancel</button>
                  </div>

                  <div className='col justify-content-md-end '>
                    <button className='btn btn-success' type="button" style={{background:"#90EE90"}}>submit</button>
                  </div>
                  </div>
                </div>
                </div>
                </div>
                
                
)
}