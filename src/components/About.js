import {React} from 'react'
import {useNavigate} from 'react-router-dom'
import "./About.css"

const About = () => {

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/userprofile');
  }

  return (
    <div className='about'>
    <div className='aboutpage'>
      <button className='btn' onClick={navigateToDashboard}>&larr;&nbsp;&nbsp;Back</button>
      <h2>Parking System</h2><br/>
      <div className='ctre'>
        <div className='abtus'>
          <h4>About Us:-</h4>
          <p>We are a state-of-the-art parking system that aims to revolutionize the way you park your vehicle. With our user-friendly interface and advanced QR code technology, we offer a seamless parking experience that saves you time and eliminates the hassle of finding a parking spot.</p>
          <div className='h_line'></div>
        </div>
        <div className='works'>
          <h4>How It Works:-</h4>
          <p>Our parking system is designed to be simple and efficient. You can generate a unique QR code by entering your vehicle and contact details through our intuitive mobile application or website. Once you have generated the QR code, simply scan it at any of our designated parking lots to secure your parking slot.</p>
          <div className='h_line'></div>
        </div>
        <div className='generate'>
          <h4>Generating a QR:-</h4>
          <p>To get started, download our mobile application or visit our website. Create an account or log in if you already have one. Once you're in, navigate to the parking section and select "Generate QR Code." Fill in the necessary information, such as your vehicle's license plate number, your contact details, and the desired duration of parking. Upon submission, our system will generate a unique QR code specifically tailored to your parking request.</p>
          <div className='h_line'></div>
        </div>
        <div className='scan'>
          <h4>Scanning the QR Code:-</h4>
          <p>Upon arrival at our parking lot, locate the designated QR code scanning stations. These stations are conveniently placed at the entrance and throughout the parking facility for easy access. Take out your mobile device with the generated QR code and scan it using the scanning station's built-in QR code reader. The system will then validate the code and confirm your parking slot.</p>
          <div className='h_line'></div>
        </div>
        <div className='book'>
          <h4>Booking a Slot:-</h4>
          <p>Our parking system provides real-time updates on available parking slots, allowing you to book a slot even before you arrive at the parking facility. Through our mobile application or website, you can view the current occupancy status of each parking lot and reserve a slot in advance. Simply select the desired time and parking location, and our system will allocate a slot for you.</p>
          <div className='h_line'></div>
        </div>
        <div className='benefits'>
          <h4>Benifits of our Parking System:-</h4><br/>
          <p>Convenience: Our user-friendly interface and seamless QR code scanning process make parking hassle-free. Say goodbye to long queues and wasted time searching for parking spots.</p>
          <p>Time-Saving: By pre-booking a slot and generating a QR code, you can bypass the hassle of manually paying for parking and searching for available spots, ensuring a smooth parking experience.</p>
          <p>Enhanced Security: Our advanced QR code technology ensures that only authorized individuals can access the parking facility. The unique QR codes prevent fraudulent entry and provide an added layer of security for your vehicle.</p>
          <p>Real-Time Updates: Stay informed about the availability of parking slots in real-time. Our system continuously updates the occupancy status of each parking lot, giving you the flexibility to plan your parking in advance.</p>
          <p>Cost-Effective: Our parking system offers competitive pricing options, ensuring that you get value for your money. With the ability to reserve parking slots, you can avoid paying exorbitant prices during peak hours.</p>
          <p>Environmentally Friendly: By streamlining the parking process and reducing the time spent searching for spots, our system helps reduce vehicle congestion and emissions, contributing to a greener environment.</p>
          <div className='h_line'></div>
        </div>
        <div className='support'>
          <h4>Customer Support:-</h4>
          <p>We understand that parking needs can vary, and we are committed to providing excellent customer support. Our dedicated support team is available 24/7 to assist you with any queries or concerns you may have. You can reach us via phone, email, or through our mobile application's in-app chat feature.</p>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default About
