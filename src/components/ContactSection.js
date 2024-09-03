import React from 'react'

const ContactSection = () => {
  return (
   <>
         <div className='row'>
          <h1 className='header-text text-center pt-5 pb-3'>Contact</h1>
          <div className='w-100 d-flex flex-wrap flex-lg-nowrap '>
            <div className='d-flex p-5 flex-item flex-column text-center align-items-center bg-info w-100 h-auto'>
              <h2>Let's Connect</h2>
              <img src='./images/what_ask.png' className='h-80 w-50' alt='my image' ></img>
              <div className='d-flex justify-content-end contact-icon'>
                <img src='./images/insta22.png' alt='insta icon'></img>
                <img src='./images/linkedin_icon.png'></img>
                <img src='./images/gmail1.png'></img>
                <img src='./images/github_icon1.png'></img>
              </div>
              <div className='' style={{fontFamily:'"Robota", sans-serif'}}>
              <h5><b>How can I help You?</b></h5>
              <p>Feel free to reach out to me via the provided profile links above.</p>
              </div>
            </div>
            <div className='flex-item  p-4 bg-info w-100  form '>
              <div class="p-5 card shadow-lg">
                <label for="fullname" class="form-label">Full Namel</label>
                <input type="text" class="form-control" id="fullname" placeholder="Enter Full Name" />
             
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control bg-info-400 p-2" id="address" placeholder="Enter Address including country name" />

                <label for="gender" className='form-label'>Gender</label>
                <select class="form-select w-50" aria-label="gender">
                  <option selected>Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>

                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter Email" />

                <label for="textarea" class="form-label">Message</label>
                <textarea class="form-control" id="textarea" placeholder="Type message here" rows='3' />

                <button className='btn btn-primary mt-4' type='submit'>Submit</button>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default ContactSection