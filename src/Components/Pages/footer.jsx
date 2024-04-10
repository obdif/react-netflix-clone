import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="email-get-started">
        <p>Ready to watch? Enter your email to create or restart your membersip.</p>
        <form action="">
          <input className="input" placeholder='Email address' type="email" name="email" id="email" autoComplete='true' />
          <input className='btn' type="submit" value="Get Started >" />
        </form>
      </div>
      <div className="footer-links">
        <a className='a' href="https://help.netflix.com/contactus">Questions? Contact us.</a>
        <div className="footer-link-grids">

          <div className="grid-link">
            <a href="https://media.netflix.com/">FAQ</a>
            <a href="https://media.netflix.com/">Investor Relations</a>
            <a href="https://media.netflix.com/">Privacy</a>
            <a href="https://media.netflix.com/">Speed Test</a>
          </div>

          <div className="grid-link">
            <a href="https://media.netflix.com/">Help Center</a>
            <a href="https://media.netflix.com/">Jobs</a>
            <a href="https://media.netflix.com/">Cookie Preferences</a>
            <a href="https://media.netflix.com/">Legal Notices</a>
          </div>

          <div className="grid-link">
            <a href="https://media.netflix.com/">Account</a>
            <a href="https://media.netflix.com/">Ways to Watch</a>
            <a href="https://media.netflix.com/">Corporate Information</a>
            <a href="https://media.netflix.com/">Only on Netflix</a>
          </div>

          <div className="grid-link">
            <a href="https://media.netflix.com/">Media Center</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/contactus">Contact Us</a>
          </div>

        </div>

        <div className="lang">
          <i>an</i>
        <select name="eng" id="eng">
          <option value="English">English</option>
        </select>
      </div>
      <p className='ngn'>Netflix Nigeria</p>
      </div>
    </div>
  )
}
