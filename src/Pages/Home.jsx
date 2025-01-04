import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import emailjs from 'emailjs-com';
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
                <textarea name="message" cols="30" rows="10" placeholder="Message description" required></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
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
                <img src="/assets/Images/Picsart.png" alt="image" />
            </div>
        </section>
        <section className="about" id="about">
            <div className="left-about">
                <img src="/assets/Images/Picsart.png" alt="image"/>
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
                    <p>With my MS Office skills, I am proficient in utilizing the suite's applications such as Word,
                        Excel, and PowerPoint to create professional documents, analyze data, and deliver impactful
                        presentations, enhancing productivity and communication in various professional settings.
                    </p>
                    <a href="#" className="btn">Read more</a>
                </div>
            </div>

        </section>
        <section className="project" id="project">
            <h2 className="heading">My <span className="span">projects</span></h2>
            <div className="projectcontent">
                <div className="project-box">
                    <img src="/assets/Images/Kalakriti.png"/>
                    <div className="layer">
                        <h4>Expense Tracker</h4>
                        <p>Expense Tracker is a project designed to help users efficiently manage and track their
                            financial expenses, providing a user-friendly interface and robust features for budgeting,
                            categorizing expenses, and generating insightful reports.</p>
                        <a href="https://max-tx.github.io/Kalakriti-_-The-culture-/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>

                    </div>

                </div>

                <div className="project-box">
                    <img src="/assets/Images/College site.png"/>
                    <div className="layer">
                        <h4>College site Clone</h4>
                        <p>My College Site Clone is a project that aims to replicate the functionalities and design of
                            my college's website, providing students and faculty with a familiar and intuitive platform
                            for accessing important information, resources, and services specific to our institution.
                        </p>
                        <a href="https://max-tx.github.io/College-Site/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src="/assets/Images/Portfolio.png"/>
                    <div className="layer">
                        <h4>Self Portfolio</h4>
                        <p>My Portfolio is a project created to showcase my academic achievements, skills, projects, and
                            extracurricular activities in a visually engaging way, providing a comprehensive overview of
                            my educational journey and potential to prospective universities.</p>
                        <a href="https://mohitparmar.vercel.app/" target="_blank" rel="noopener noreferrer" class="view-btn">Read more</a>

                    </div>
                </div>
            </div>

        </section>
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