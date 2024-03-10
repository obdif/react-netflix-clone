import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="email-get-started">
        <p>Ready to watch? Enter your email to create or restart your membersip.</p>
        <form action="" method="post">
          <input className="input" placeholder='Email address' type="email" name="" id="" />
          <input className='btn' type="submit" value="Get Started >" />
        </form>
      </div>
      <div className="footer-links">
        <a className='a' href="">Questions? Contact us.</a>
        <div className="footer-link-grids">

          <div className="grid-link">
            <a href="">FAQ</a>
            <a href="">Investor Relations</a>
            <a href="">Privacy</a>
            <a href="">Speed Test</a>
          </div>

          <div className="grid-link">
            <a href="">Help Center</a>
            <a href="">Jobs</a>
            <a href="">Cookie Preferences</a>
            <a href="">Legal Notices</a>
          </div>

          <div className="grid-link">
            <a href="">Account</a>
            <a href="">Ways to Watch</a>
            <a href="">Corporate Information</a>
            <a href="">Only on Netflix</a>
          </div>

          <div className="grid-link">
            <a href="">Media Center</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
            {/* <a href=""></a> */}
          </div>

        </div>

        <div className="lang">
          <i>an</i>
        <select name="" id="">
          <option value="English">English</option>
        </select>
      </div>
      <p className='ngn'>Netflix Nigeria</p>
      </div>
    </div>
  )
}
