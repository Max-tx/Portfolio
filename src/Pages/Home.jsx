import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import emailjs from 'emailjs-com';
import Slider from "react-slick"; //for slider carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_meiadmw',   // Replace with your EmailJS Service ID
                'template_b3w0zsd',  // Replace with your EmailJS Template ID
                form.current,
                '9jE1GVdagL5T8t8NW'  // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span className="span">me!</span></h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <input type="text" name="from_name" placeholder="Name" required />
                    <input type="email" name="reply_to" placeholder="Email address" required />
                </div>
                <div className="input-box">
                    <input type="text" name="mobile" placeholder="Mobile number" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                </div>
                {/* <textarea name="message" cols="30" rows="10" placeholder="Message description" required></textarea> */}
                <textarea name="message" class="message-textarea" placeholder="Message description" required></textarea>

                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
};
const ProjectCarousel = () => {
    // let sliderRef = useRef(null);
    
const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // For screens below 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
};  
return (
    <section className="project" id="project"> 
            <h2 className="heading">My <span className="span">projects</span></h2>
            <div className="projectcontent">
            {/* <Slider {...settings}> */}
            <Slider className="slider-container" {...settings}>
                <div className="project-box">
                    <img src="/assets/Images/Kalakriti.png"/>
                    <div className="layer">
                        <h4>Kalakriti</h4>
                        <p>Kalakriti empowers Indian artists to showcase and sell traditional art globally. By fostering fair pay, secure transactions, and community engagement, it connects artists with buyers and promotes Indian cultural heritage worldwide through features like art search and interactive forums.</p>
                        <a href="https://max-tx.github.io/Kalakriti-_-The-culture-/" target="_blank" rel="noopener noreferrer" className="view-btn">Read more</a>
                   </div>
                </div>
                <div className="project-box">
                    <img src="/assets/Images/College site.png"/>
                    <div className="layer">
                        <h4>CampusConnect!</h4>
                        <p>CampusConnect is a College Site Clone project that replicates the design and functionality of my college's website. It provides students and faculty with an intuitive platform to access resources, essential information, and services, offering a seamless and familiar experience.
                        </p>
                        <a href="https://max-tx.github.io/College-Site/" target="_blank" rel="noopener noreferrer" className="view-btn">Read more</a>
                    </div>
                </div>
                <div className="project-box">
                    <img src="/assets/Images/Portfolio.png"/>
                    <div className="layer">
                        <h4>Personal Portfolio</h4>
                        <p>My Personal Portfolio is a visually engaging project designed to highlight my academic achievements, skills, projects, and extracurricular activities. It offers a comprehensive overview of my educational journey and demonstrates my potential to prospective universities and employers.</p>
                        <a href="https://mohitparmar.vercel.app/" target="_blank" rel="noopener noreferrer" className="view-btn">Read more</a>
                    </div>
                </div>
            </Slider>
            </div>
        </section>
);
};

function Home() {
    const typedElement = useRef(null);

    useEffect(() => {
      const typed = new Typed(typedElement.current, {
        strings: ["Web Developer", "Photo Editor", "Competitive Coder"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }, []);      
      
  return (
<div>
    <main> 
        <section className="home" id="home">
            <div className="left-home">
                <h3 className="Hi">Hey, my self</h3>
                <h1 className="name">Mohit</h1>
                <h3 className="Hi">and I am a passionate</h3><span ref={typedElement} id="element"></span>
                <div className="social-media">
                    <a href="https://github.com/Max-tx"
                        target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/mohitparmar_4g08/" target="_blank" rel="noopener noreferrer"><i
                            className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/mohit-parmar-b34932240" target="_blank" rel="noopener noreferrer"><i
                            className='bx bxl-linkedin'></i></a>
                </div>
                    <a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>

            </div>
            <div className="right-home">
                <img src="assets/Images/Self_image.png" alt="image" />
            </div>
        </section>
        <section className="about" id="about">
            <div className="left-about">
                <img src="assets/Images/Self_image.png" alt="image"/>
            </div>
            <div className="right-about">
                <h2 className="heading">About <span className="span">me</span></h2>
                <h3>Web-devoloper</h3><p></p>
                <p>I'm a final-year Computer Science Engineering student at Shri G.S. Institute of Technology & Science in Indore! I'm passionately sharpening my skills in Data Structures and Algorithms and actively contributing to web development projects. My enthusiasm for learning and exploring new technologies drives me, and I look forward to the amazing opportunities ahead!</p>
                <a href="#" className="btn">Read more</a>
            </div>
        </section>
        <section className="education" id="education">
            <h2 className="heading">Education <span className="span">journey</span></h2>
            <div className="container">
                <div className="education-content">
                    <div className="education-box">
                        <div className="front-box" id="metrics"></div>
                        <div className="back-box">
                            <h3>10th</h3>
                            <div>(2018-19)</div>
                            <p>School For Excellence,ujjain</p>
                        </div>
                    </div>
                </div>

                <div className="education-content">
                    <div className="education-box">
                        <div className="front-box" id="post-metrics"></div>
                        <div className="back-box">
                            <h3>12th</h3>
                            <div>Science (P C M)<br/>(2020-21)</div>
                            <p>School For Excellence,ujjain</p>
                        </div>
                    </div>
                </div>

                <div className="education-content">
                    <div className="education-box">
                        <div className="front-box" id="graduate"></div>
                        <div className="back-box">
                            <h3>B.TECH</h3>
                            <div>Computer Science Engineer <br />(2021-25)</div>
                            <p>S G S I T S, indore</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section className="skill" id="skill">
            <h2 className="heading">My <span className="span">skills</span></h2>
            <div className="skillscontent">
                <div className="box">
                    <i className='bx bx-code-alt'></i>
                    <h3>web-development</h3>
                    <p>I am a web developer who crafts visually appealing and functional websites, utilizing my
                        expertise in programming languages and design principles to create seamless online experiences
                        for users.
                    </p>
                    <a href="#" className="btn">Read more</a>
                </div>
                <div className="box">
                    <i className='bx bx-laptop'></i>
                    {/* <i className='bx bx-laptop bx-tada bx-flip-horizontal' ></i> */}
                    <h3>Competitive codding</h3>
                    <p>I am a competitive coder who thrives on solving complex algorithmic problems efficiently and
                        effectively, utilizing my programming skills and strategic thinking to excel in coding
                        competitions and achieve optimal results.
                    </p>
                    <a href="#" className="btn">Read more</a>
                </div>
                <div className="box">
                    <i className='bx bxl-microsoft'></i>
                    <h3>MS-office</h3>
                    <p>I am proficient in MS Office tools, including Word, Excel, and PowerPoint. I create polished documents, perform efficient data analysis, and deliver compelling presentations, ensuring productivity and professional excellence.I
                    </p>
                    <a href="#" className="btn">Read more</a>
                </div>
            </div>

        </section>
        <ProjectCarousel/>
        {/* <section className="project" id="project"> 
            <h2 className="heading">My <span className="span">projects</span></h2>
            <div className="projectcontent">
                <div className="project-box">
                    <img src="/assets/Images/Kalakriti.png"/>
                    <div className="layer">
                        <h4>Kalakriti</h4>
                        <p>Kalakriti empowers Indian artists to showcase and sell traditional art globally. By fostering fair pay, secure transactions, and community engagement, it connects artists with buyers and promotes Indian cultural heritage worldwide through features like art search and interactive forums.</p>
                        <a href="https://max-tx.github.io/Kalakriti-_-The-culture-/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>

                    </div>

                </div>

                <div className="project-box">
                    <img src="/assets/Images/College site.png"/>
                    <div className="layer">
                        <h4>CampusConnect!</h4>
                        <p>CampusConnect is a College Site Clone project that replicates the design and functionality of my college's website. It provides students and faculty with an intuitive platform to access resources, essential information, and services, offering a seamless and familiar experience.
                        </p>
                        <a href="https://max-tx.github.io/College-Site/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src="/assets/Images/Portfolio.png"/>
                    <div className="layer">
                        <h4>Personal Portfolio</h4>
                        <p>My Personal Portfolio is a visually engaging project designed to highlight my academic achievements, skills, projects, and extracurricular activities. It offers a comprehensive overview of my educational journey and demonstrates my potential to prospective universities and employers.</p>
                        <a href="https://mohitparmar.vercel.app/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>

                    </div>
                </div>
            </div>

        </section> */}
        {/* <section className="contact" id="contact">
            <h2 className="heading">Contact <span className="span">me!</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email address"/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="mobile number"/>
                    <input type="text" placeholder="subject"/>
                </div>
                <textarea cols="30" rows="10" placeholder="message discription"></textarea>
                <input type="submit" value="send message" className="btn"/>
            </form>
        </section> */}
        {/* <section className="contact" id="contact">
            <h2 className="heading">Contact <span className="span">me!</span></h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                        <input type="text" name="from_name" placeholder="Name" required />
                        <input type="email" name="reply_to" placeholder="Email address" required />
                </div>
                <div className="input-box">
                        <input type="text" name="mobile" placeholder="Mobile number" required />
                        <input type="text" name="subject" placeholder="Subject" required />
                </div>
                        <textarea name="message" cols="30" rows="10" placeholder="Message description" required></textarea>
                        <input type="submit" value="Send Message" className="btn" />
            </form>
        </section> */}
            <ContactForm />
   </main>
</div>
  )
}

export default Home;