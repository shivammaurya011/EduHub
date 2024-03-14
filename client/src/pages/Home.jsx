import React from 'react';
import { FaUserGraduate, FaMoneyBillWave, FaChalkboardTeacher, FaHandshake, FaBriefcase, FaFlask, FaDesktop } from 'react-icons/fa'; // Import relevant icons
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const testimonialData = [
        {
          image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
          text: 'I am incredibly thankful for the exceptional guidance and support provided by the team at EduHub. Their dedication to delivering high-quality education and personalized mentorship has been instrumental in my journey towards success. I highly recommend their platform to anyone looking to excel in the field of technology.',
          name: 'Priya Maurya',
          role: 'Our Student',
        },
        {
          image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
          text: 'I extend my sincere gratitude to the EduHub team for their exceptional commitment to providing top-notch learning resources and mentorship. Their platform has been invaluable in expanding my skills and knowledge in the tech industry. I am proud to be a part of such an inspiring community of learners.',
          name: 'Yadunath Kushwaha',
          role: 'Our Student',
        },
        {
          image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
          text: 'My experience with EduHub has been nothing short of exceptional. The platform provided me with access to comprehensive learning materials and a supportive community of peers and mentors. Thanks to EduHub, I have gained valuable skills and confidence in pursuing my career goals in technology.',
          name: 'Shivangi Gupta',
          role: 'Our Student',
        },
        // Add more testimonial data as needed
      ];
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i, active) {
            return (
                <div className={`h-3 w-3 rounded-full ${active ? 'bg-blue-600' : 'bg-gray-400'} mx-1`}></div>
            );
        },
    };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex items-center justify-center h-96 bg-cover bg-center text-white" style={{ backgroundImage: `url('https://media.istockphoto.com/id/1305012465/vector/internet-connection-abstract-sense-of-science-and-technology-graphic-design-background.jpg?s=612x612&w=0&k=20&c=WC7evuE5zPhwRv8hk9uiydDAQGca-WKKRHlTrFjEOD8=')` }}>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Tech Learning Platform</h1>
            <p className="text-lg mb-6">Start your journey towards success with our expertly crafted courses.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaUserGraduate className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg font-semibold">Happy Students</p>
            <p className="text-xl">25,000+</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaMoneyBillWave className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg font-semibold">Salary Hike</p>
            <p className="text-xl">65%</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaChalkboardTeacher className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg font-semibold">Instructors</p>
            <p className="text-xl">25+</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaHandshake className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg font-semibold">Hiring Partners</p>
            <p className="text-xl">450+</p>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 1</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 2</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 3</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 4</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 5</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Course Title 6</h3>
                <p className="text-gray-700 mb-4">Description of the course goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
            </div>
            {/* Add more course cards as needed */}
        </div>
        </section>


      {/* Explore Our Ecosystem Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore Our Ecosystem</h2>
        <p className="mb-8">A one-stop destination for all your learning to placement needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaBriefcase className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Job Portal</h3>
            <p>Use exceptional templates for a stand-out resume minus the sign-up process.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaFlask className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Experience Portal</h3>
            <p>Self-paced portal prioritizes hands-on training with 570+ internship projects.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaDesktop className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Online Lab</h3>
            <p>Buying a new PC is no longer required. Access unlimited computing power!</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className=" py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">Success Stories</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">Discover inspiring stories from our students who have overcome challenges and achieved success through our platform.</p>

                <Slider className='' {...settings}>
                    {testimonialData.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 mb-4 md:flex md:items-center">
                            <div className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32">
                                <img
                                    src={testimonial.image}
                                    className="rounded-full shadow-md mx-auto"
                                    alt="avatar"
                                />
                            </div>
                            <div className="md:ml-6 text-center">
                                <p className="mb-6 font-normal text-gray-700">{testimonial.text}</p>
                                <p className="mb-2 text-xl font-semibold text-blue-800">{testimonial.name}</p>
                                <p className="mb-0 text-sm font-semibold text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

      {/* Frequently Asked Questions Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <ul className="list-disc pl-8">
            <li className="mb-4">What is the refund policy?</li>
            <li className="mb-4">I need to purchase a course. Whom should I contact?</li>
            <li className="mb-4">I am not able to view my enrolled course. What to do/whom to contact?</li>
            <li className="mb-4">What is an experience portal? How to use it?</li>
            <li>How to get Placements and Job assistance?</li>
        </ul>
        </section>
    </div>
  );
};

export default Home;
