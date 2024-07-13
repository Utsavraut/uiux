import { faChevronDown, faChevronUp, faCircle, faMapMarkerAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DescriptionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [faqs, setFaqs] = useState([
    {
      question: "How fit do I need to be to do this trek?",
      answer: "Annapurna Base Camp is a Grade B or a moderately difficult trekking route. So any fit person can do this trek, even if you do not have any previous experience. You should be aware of what to expect and mentally prepare for it. Then, as long as you are willing, you can.",
      isOpen: false
    },
    {
      question: "How long do we walk every day when doing Annapurna Base Camp trekking?",
      answer: "On average, you walk about 4 to 6 hours per day. One or two days can be as less as 3hrs and one or two days can be as long as 7hrs.",
      isOpen: false
    }
  ]);

  const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      }
      return faq;
    }));
  };

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Breadcrumb */}
      
      <h1 className="text-4xl font-bold mb-4">Annapurna Base Camp</h1>
      <img src="assets/images/desc.png" alt="Annapurna Base Camp" className="w-full rounded-lg shadow-lg mb-6" />

      {/* Tabs */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-around mb-6">
          <button
            className={`py-2 px-6 font-semibold rounded-md ${activeTab === 'overview' ? 'bg-[#54A15D] text-white' : 'text-gray-600 hover:bg-green-100'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`py-2 px-6 font-semibold rounded-md ${activeTab === 'itinerary' ? 'bg-[#54A15D] text-white' : 'text-gray-600 hover:bg-green-100'}`}
            onClick={() => setActiveTab('itinerary')}
          >
            Itinerary
          </button>
          <button
            className={`py-2 px-6 font-semibold rounded-md ${activeTab === 'cost' ? 'bg-[#54A15D] text-white' : 'text-gray-600 hover:bg-green-100'}`}
            onClick={() => setActiveTab('cost')}
          >
            Cost
          </button>

          <button
            className={`py-2 px-6 font-semibold rounded-md ${activeTab === 'faqs' ? 'bg-[#54A15D] text-white' : 'text-gray-600 hover:bg-green-100'}`}
            onClick={() => setActiveTab('faqs')}
          >
            Faqs
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="mt-6 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements.
            </p>
            <p className="mb-4">
              The origin of the word “travel” is most likely lost to history. The term “travel” may originate from the Old French word travail, which means ‘work’. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century.
            </p>
            <p className="mb-4">
              It also states that the word comes from Middle English travelen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil). In English we still occasionally use the words “travail”, which means struggle. According to Simon Winchester in his book The Best Travelers’ Tales (2004), the words “travel” and “travail” both share an even more ancient root: a Roman instrument of torture called the tripalium (in Latin it means “three stakes”, as in to impale).
            </p>
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="mt-6 text-gray-700 leading-relaxed">
            <div className="space-y-8">
              {[
                {
                  day: 'Day 1',
                  title: 'Pokhara to Nayapul to Ghandruk',
                  description:
                    'Starting early morning, you’ll drive from Pokhara to Nayapul, a journey of about 1.5 hours. From Nayapul, the trek to Ghandruk begins, taking approximately 5-6 hours. Ghandruk, a beautiful Gurung village, offers stunning views of Annapurna South and Machhapuchhare. You’ll spend the night in a guesthouse in Ghandruk.',
                  icon: faMapMarkerAlt,
                },
                {
                  day: 'Day 2',
                  title: 'Ghandruk to Chhomrong',
                  description:
                    'The trek from Ghandruk to Chhomrong takes around 5-6 hours. Along the way, you’ll pass through scenic terraces and Rhododendron forests, and cross the Kimrong Khola. Chhomrong, perched at 2170 meters, is a charming village with spectacular mountain views. Overnight accommodation will be in a guesthouse in Chhomrong.',
                },
                {
                  day: 'Day 3',
                  title: 'Chhomrong to Dovan',
                  description:
                    'Leaving Chhomrong, the trail descends to the Chhomrong Khola before climbing up through forests of bamboo, Rhododendron, and oak to reach Dovan at 2500 meters. This segment of the trek takes about 6-7 hours. You’ll stay overnight in a guesthouse in Dovan.',
                },
                {
                  day: 'Day 4',
                  title: 'Dovan to Deurali',
                  description:
                    'The trek from Dovan to Deurali, which takes around 4-5 hours, passes through dense forests and the famous Hinku Cave. As you ascend, the landscape starts to change, offering new and captivating views. Deurali, located at 3230 meters, is where you’ll spend the night in a guesthouse.',
                },
                {
                  day: 'Day 5',
                  title: 'Deurali to Annapurna Base Camp (ABC) via Machapuchare Base Camp (MBC)',
                  description:
                    'From Deurali, you’ll trek to Annapurna Base Camp, passing through Machapuchare Base Camp. This segment, taking about 5-6 hours, offers stunning views of Machapuchare, Annapurna I, and other peaks, as you walk through the alpine landscape. At 4130 meters, ABC provides breathtaking panoramas. You’ll spend the night in a guesthouse at ABC.',
                },
                {
                  day: 'Day 6',
                  title: 'ABC to Bamboo',
                  description:
                    'Retracing your steps, you’ll trek from ABC to Bamboo, a journey of about 6-7 hours. This descent allows you to enjoy different perspectives of the landscape you saw on the way up. Overnight accommodation will be in a guesthouse in Bamboo at 2310 meters.',
                },
                {
                  day: 'Day 7',
                  title: 'Bamboo to Jhinu Danda and drive to Pokhara',
                  description:
                    'On the final day of trekking, you’ll hike from Bamboo to Jhinu Danda, which takes around 5-6 hours. Jhinu Danda is known for its hot springs, where you can relax and rejuvenate. From Jhinu Danda, a jeep will take you back to Pokhara. You’ll spend the night in a hotel in Pokhara, reflecting on the incredible journey you’ve just completed.',
                  icon: faMapMarkerAlt,
                },
              ].map((item, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="flex flex-col items-center">
                    {item.icon ? (
                      <FontAwesomeIcon icon={item.icon} className="text-[#54A15D] text-2xl" />
                    ) : (
                      <FontAwesomeIcon icon={faCircle} className="text-[#54A15D] text-2xl" />
                    )}
                    {index < 6 && <div className="h-full border-l-2 border-[#54A15D]"></div>}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{item.day}: {item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="mt-6 text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-bold mb-4">The Trip Cost Includes</h3>
            <ul className="mb-6">
              {[
                'Pick-up or Drop-off service from and to Airport(in our own vehicle)',
                'Transportation to and from!!',
                'Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment',
                'Transportation, food, accommodation and insurance of Guide during the trip',
                'Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don’t have your own. Down jacket, sleeping bag and duffel bag must be returned after completion of the trip)',
                'First Aid Medical Kit(Your guide will carry the Medical Kit but we also advise to bring yourself for your own use, as far as possible)',
                'All the required permits and paperwork',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#54A15D]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-4">The Trip Cost Excludes</h3>
            <ul>
              {[
                'International Airfare',
                'Visa Charges',
                'Hotel Expenses(In Kathmandu, some packages do include hotel expenses)',
                'Your travel and medical insurance',
                'Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc',
                'Food and accommodations in Kathmandu',
                'Services not mentioned or not promised by the agent/agency',
                'Emergency expenses such as expenses on chartered helicopter.',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2 mb-2">
                  <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}


         {/* FAQs Section */}
         {activeTab === 'faqs' && (
          <div className=" mb-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full p-4 text-left text-gray-800 bg-white rounded-lg shadow">
                  <span>{faq.question}</span>
                  <FontAwesomeIcon icon={faq.isOpen ? faChevronUp : faChevronDown} />
                </button>
                {faq.isOpen && (
                  <div className="mt-2 p-4  text-gray-700 rounded-b-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Inquiry Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold mb-4">You can send your enquiry via the form below.</h3>
          <form className='flex flex-col'>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">Enter Your Name *</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">Enter Your Email *</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block mb-2 font-semibold">Enter Your Contact *</label>
              <input type="text" id="contact" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-semibold">Enquiry Subject</label>
              <input type="text" id="subject" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">Enter Your Message *</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-[#54A15D]  hover:bg-[#54A15D] text-white py-2 px-4 rounded-md">SEND EMAIL</button>
          </form>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow-lg md:w-1/2'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.282107702496!2d83.86815086350525!3d28.53008399552189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995f588b6a4922d%3A0xbaf344120520a16c!2sAnnapurna%20Sanctuary!5e0!3m2!1sen!2snp!4v1719111581125!5m2!1sen!2snp"
            width="100%" // Set width to 100% to fill the container
            height="100%" // Adjust height as needed
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

{/* Book Now Button */}
<div className="flex justify-center my-8">
  <button className="bg-[#54A15D] hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
    Book Now
  </button>
</div>


      {/* You Might Also Like */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-center mb-4">You Might Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={rec.image} alt={rec.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{rec.name}</h4>
                <p className="text-gray-700 mb-2">{rec.location}</p>
                <p className="text-[#54A15D] font-semibold">Starting From Rs. {rec.price}</p>
                <button className="mt-4 bg-[#54A15D] hover:bg-[#54A15D] text-white py-2 px-4 rounded-md">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const recommendations = [
  { name: 'Fewa Tal', location: 'Pokhara', price: '7000', image: 'assets/images/fewa.png' },
  { name: 'Rara Lake', location: 'Mugu', price: '7000', image: 'assets/images/rara.png' },
  { name: 'Mustang', location: 'Manang', price: '7000', image: 'assets/images/mus.png' },
];

export default DescriptionPage;
