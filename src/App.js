import React, {component}from 'react';
import './App.css';
import logo from './img/Logo.png';
import instagram from './img/inst.png';
import dribble from './img/dribbble.png';
import twitter from './img/twitter1.png';
import vimeo from './img/vimeo.png';
import newsimg1 from './img/news-img-1.png';
import newsimg2 from './img/news-img-2.png';

const date = <p>May 8, 2018</p>;
const NewsTitle =  <h3>Design is not Just Look Woow, Its means...</h3>;

var App = () => {
    return (
        <body>
        <header>
            <div class="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="lang">
                <ul>
                    <li><a href="#">Fra</a></li>
                    <li><a href="#">Rus</a></li>
                    <li><a href="#">Eng</a></li>
                </ul>
            </div>
        </header>
        <div class="main-section">
            <div class="main-desc">
                <h1>React <span>Internship</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Neque error iure, qui asperiores sit voluptatibus consequatur architecto perferendis soluta ut!</p>
                <a href="#" class="btn">View profile</a>
                <div class="social">
                    <ul>
                        <li><a href="#"><img src={instagram} alt="Instagram"/></a></li>
                        <li><a href="#"><img src={dribble} alt="Dribbble"/></a></li>
                        <li><a href="#"><img src={twitter} alt="Twitter"/></a></li>
                        <li><a href="#"><img src={vimeo} alt="Vimeo"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="main-image"></div>
        </div>
        <div class="latest-news">
            <div class="container">
                <h2>Latest News</h2>
                <div class="news-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsa repudiandae consequuntur non corrupti,<br/> necessitatibus nostrum illo voluptates expedita magni enim.</p>
                </div>
            </div>
            <div class="container">
                <div class="news">
                    <div class="news-id">
                        <div class="news-img">
                            <img src={newsimg1} alt="Image 1"/>
                        </div>
                        <div class="news-count">
                            <ul>
                                <li><a href="#">By: Adams</a></li>
                                <li><a href="#">25 Comments</a></li>
                                <li><a href="#">1k Likes</a></li>
                            </ul>
                        </div>
                        <div class="news-title">
                            {NewsTitle}
                        </div>
                        <div class="btn-read-more"><a href="#">Read more</a></div>
                        <div class="date">{date}</div>
                    </div>
                    <div class="news-id">
                        <div class="news-img">
                            <img src={newsimg2} alt="Image 1"/>
                        </div>
                        <div class="news-count">
                            <ul>
                                <li><a href="#">By: Adams</a></li>
                                <li><a href="#">25 Comments</a></li>
                                <li><a href="#">1k Likes</a></li>
                            </ul>
                        </div>
                        <div class="news-title">
                            {NewsTitle}
                        </div>
                        <div class="btn-read-more"><a href="#">Read more</a></div>
                        <div class="date">{date}</div>
                    </div>
                    <div class="news-id">
                        <div class="news-img">
                            <img src="img-assets/news-img-3.png" alt="Image 1"/>
                        </div>
                        <div class="news-count">
                            <ul>
                                <li><a href="#">By: Adams</a></li>
                                <li><a href="#">25 Comments</a></li>
                                <li><a href="#">1k Likes</a></li>
                            </ul>
                        </div>
                        <div class="news-title">
                            {NewsTitle}
                        </div>
                        <div class="btn-read-more"><a href="#">Read more</a></div>
                        <div class="date">{date}</div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="contact-form">
                    <div class="form-desc">
                        <p>Let`s make something new, different and more meaningful or make thing more visual or Conceptual? <span>Just Say Hello!</span></p>
                    </div>
                    <div class="arrow"></div>
                    <div class="form">
                        <form>
                            <div>
                                <input type="text" name="" required=""/>
                                    <label>Name</label>
                            </div>
                            <div>
                                <input type="email" name="" required=""/>
                                    <label>Mail</label>
                            </div>
                            <div>
                                <input type="text" name="" required=""/>
                                    <label>Budget</label>
                            </div>
                            <div>
                                <textarea required=""></textarea>
                                <label>Description</label>
                            </div>
                            <div class="btn-submit">
                                <input type="submit" name="" value="Hire me"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="contacts">
                    <ul>
                        <li>+380661234567</li>
                        <li>your@gmail.com</li>
                        <li>28 Green Tower, Street Name, <br/> New York City, USA</li>
                    </ul>
                </div>
                <div class="social-footer">
                    <ul>
                        <li><a href="#"><img src={instagram} alt="Instagram"/></a></li>
                        <li><a href="#"><img src={dribble} alt="Dribbble"/></a></li>
                        <li><a href="#"><img src={twitter} alt="Twitter"/></a></li>
                        <li><a href="#"><img src={vimeo} alt="Vimeo"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <p><a href="https://s3.envato.com/files/254548372/02_ozlan_personal_home_page_dark.jpg">Copyright @ 2018 Giant_Theme, All rights reserved.<br/> Created by Giant_Design</a></p>
        </div>
        </body>
    )
}
export default App;
