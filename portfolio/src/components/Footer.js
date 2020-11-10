import React from 'react' 
import ReactBootstrap from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'

const Footer = () => {
    return(
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Created and Designed by Christina Sohn &middot; chsohn15@gmail.com
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="email" href="#"><i class="fa fa-envelope-o"></i></a></li>
                <li><a class="medium" href="#"><i class="fa fa-medium"></i></a></li>
                <li><a class="github" href="#"><i class="fa fa-github"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    )
}

export default Footer