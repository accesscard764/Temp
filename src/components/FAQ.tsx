import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleOpen}
      >
        <h3 className={`font-medium text-lg ${isOpen ? 'text-[#1E2A78]' : 'text-gray-700'}`}>
          {question}
        </h3>
        <span className="ml-6 flex-shrink-0 text-gray-500">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What do I get in the trial?",
      answer: "The 14-day free trial includes the full TableLoyalty system: the pre-configured tablet, SMS notification system, customer database, and optional POS integration. You'll be able to collect customer data, award points, and test the entire customer experience with no limitations."
    },
    {
      question: "Do I need internet at my restaurant?",
      answer: "Yes, you'll need a Wi-Fi connection for the tablet to function. However, the system can operate on a cellular connection as a backup, which we can provide for an additional fee if your internet is unreliable."
    },
    {
      question: "Is POS integration required?",
      answer: "No, POS integration is optional. The system works perfectly well in standalone mode, where your staff can manually award points or have customers scan a QR code. However, integration with your POS allows for automatic printing of QR codes on receipts and streamlines the process."
    },
    {
      question: "Can customers sign up without staff help?",
      answer: "Absolutely! Customers can scan a QR code displayed on your table tents or at the checkout to sign up on their own. This self-service option works well for busy restaurants and reduces staff involvement in the signup process."
    },
    {
      question: "What if I don't have a modern POS?",
      answer: "No problem at all. Our system is designed to work with or without POS integration. The standalone tablet mode is perfect for restaurants with legacy POS systems or even those using only paper receipts."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8F9FA] px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A78] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our restaurant loyalty system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;