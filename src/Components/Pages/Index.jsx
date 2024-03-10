import {React, useState} from 'react';
import netflixIcon from "../Assets/netflixIcon.png";
import netflixLogo from '../Assets/netflixLogo.png';
import netflixBg from "../Assets/netflix bg.jpeg";
import baby from "../Assets/baby.png";
import tv from "../Assets/tv.png";
import {FaPlus, FaTimes} from 'react-icons/fa';
import { Faq } from './faq';



export const Index = () => {

  return (
    <div className="netflix-clone"> 
        {/* ===================== HERO PAGE ======================= */}
        <div className="hero-page">
            <div className="bg-overlay"></div>
            <div className="neflix-sign">
                <div className="netflix-logo">
                    <img src={netflixLogo} alt="" srcset="" width={200}/>
                </div>
                <div className="sign-in">
                    <button>Sign In</button>
                </div>
            </div>

            <div className="hero-text">
                <div className="hero1">
                <h1>Unlimited movies, TV Shows, and more</h1>
                <p>Start at N1,600. Cancel anytime.</p>
                </div>
               
                <div className="get-stated">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="get-stated-email-btn">
                        <form action="">
                            <input className='input' placeholder='Email Address' required type="email" name="" id="" />
                            <input className='btn' type="submit" value="Get Started &nbsp; >" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
{/* ==============HERO PAGE ENDS-====================== */}
            <div className="netflix-body-img">
                <div className="blue-cl"></div>
            </div>
        
        <div className="netflix-body">
        
            <div className="netflix-plan">
                <h1>Plans to suit your needs and your budget</h1>
                <p>Enjoy Netflix starting at just ₦1,600.</p>
            </div>

            <div className="reason-to-join">
                <h4 className='sub-title'>More Reasons to Join</h4>
                <div className="reason-cards">
                    
                    <div className="card">
                        <h3>Enjoy on your TV</h3>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        <div className="card-img-">
                            {/* <img src={tv} alt="" width={100} srcset="" /> */}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Download your shows to watch offline</h3>
                        <p>Save your favorites easily and always have something to watch.</p>
                        <div className="card-img-">
                            {/* <img src={baby} alt="" width={100} srcset="" /> */}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Watch everywhere</h3>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        <div className="card-img-">
                            {/* <img src={tv} alt="" width={100} srcset="" /> */}
                        </div>
                    </div>


                    <div className="card">
                        <h3>Create profiles for kids</h3>
                        <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                        <div className="card-img-">
                            {/* <img src={baby} alt="" width={100} srcset="" /> */}
                        </div>
                    </div>

                </div>
            </div>
            

            <div className="faq">
            <h3 className='sub-title'>Frequently Asked Questions</h3>
            <Faq/>
            </div>

        </div>


    </div>
  )
}
