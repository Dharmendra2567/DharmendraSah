import React from 'react'

export const Footer = () => {
  return (
    <>
        <div class="b-example-divider"></div>

{/* <div class="container-fluid"> */}
 <div className='row'>
 <footer class="d-flex  flex-lg-nowrap justify-content-between bg-info w-100 align-items-center py-4 px-5 mt-3 border-top">
    <div class="col-md-4 d-flex flex-column align-items-center">
      <h6>Dharmendra Prasad Sah Teli</h6>
      <p className='py-0'>deardharmendra.2567@gmail.com</p>
      <p className='py-0'>+91 8102841309</p>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex fs-5">
    <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-linkedin"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-twitter-x" ></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram" ></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-facebook"></i></a></li>
    </ul>
  </footer>
 </div>
{/* </div> */}
    </>
  )
}
