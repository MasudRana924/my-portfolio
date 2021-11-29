import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Email.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Email = () => {
    AOS.init({
        duration:400,
          offset: 420,
          
      })
    const tostify = () => {
        toast.success('Message Send Successfull ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
    }

    const sendEmail = (e) => {
        e.preventDefault()
         emailjs.sendForm('service_74q30d3', 'template_fbn1zdw', e.target, 'user_AEBd3Ukge2S5SripPAeyU')
            .then((result) => {
                tostify()
                e.target.reset()

            }, (error) => {
             console.log(error.text);
             });

    }
   

    return (
        <div id="contact">
            <Container fluid className="mt-5 pt-5">
                <Row xs={1} md={3}>
                    <Col md={2} className="mt-5 pt-5"></Col>
                    <Col md={8} className="mt-5 pt-5">
                        <div className="contact-form w-75 mx-auto ">
                            <div data-aos="zoom-in" className="get-touch w-75 mx-auto">
                                <p className="text-white text-start pt-3 fs-2">Get in touch</p>
                                <form className="row" onSubmit={sendEmail}>
                                    <label className="text-white text-start">Name</label>
                                    <input type="text" name="name" className="form-control" />
                                    <label className="text-white text-start">Email</label>
                                    <input type="email" name="user_email" className="form-control" />
                                    <label className="text-white text-start">Message</label>
                                    <textarea name="message" cols="12" rows="3" className="form-control"></textarea>
                                    <input  type="submit" value="Send" className="form-control btn btn-warning mt-3" />
                                </form>
                              
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className="mt-5 pt-5"></Col>
                </Row>
            </Container>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    );
};

export default Email;