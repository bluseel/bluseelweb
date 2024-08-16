import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Do I need a website?',
      answer:
        "Yes, a website is essential in today's digital age. It serves as your online storefront, allowing potential customers to find and learn about your business 24/7. A professionally designed website enhances your credibility, expands your reach, and can significantly boost your sales and customer engagement.",
    },
    {
      question: 'Why should I trust you (or Bluseel)?',
      answer:
        'At Bluseel, we pride ourselves on our commitment to quality, transparency, and customer satisfaction. Our team of experienced developers and designers work closely with you to understand your needs and deliver solutions that exceed your expectations. Our portfolio of successful projects and positive client testimonials speaks to our dedication and reliability.',
    },
    {
      question: 'Which package is best for me?',
      answer:
        'Choosing the right package depends on your business needs. Presence is great for a simple, professional online presence with essential features. Startup suits growing businesses needing more pages and unique design elements. Business is ideal for established brands requiring extensive functionality, including a content management system and business email. For personalized advice, contact us for a consultation to determine the best fit for your goals.',
    },
    {
      question: 'What if I cannot find a package for me?',
      answer:
        "If our predefined packages don't meet your needs, don't worry! We offer custom solutions tailored to your unique requirements. Contact us to discuss your specific needs, and we'll create a bespoke package that aligns perfectly with your goals and budget.",
    },
    {
      question: 'What requirements should I gather?',
      answer:
        'To start the process smoothly, gather information about your business goals, target audience, preferred design style, key functionalities you need (like e-commerce, booking systems, etc.), and any specific content or media you want to include. Our team will guide you through this process and help you refine your requirements.',
    },
    {
      question: 'What if I change requirements later?',
      answer:
        'We understand that requirements can evolve. Our agile development process allows for flexibility. If changes are needed, we’ll discuss them with you, assess their impact, and implement them in a way that keeps your project on track and within budget.',
    },
    {
      question: 'What if a problem occurs in the future?',
      answer:
        'We offer ongoing support and maintenance services to ensure your website remains functional and up-to-date. If any issues arise, our dedicated support team is available to resolve them promptly. Our goal is to provide you with peace of mind, knowing that your website is in good hands.',
    },
    {
      question: 'Do you provide any other services?',
      answer:
        'Yes, we offer a wide range of services to help your business thrive online. These include digital marketing, SEO, content creation, branding, graphic design, and more. Our comprehensive solutions are designed to help you succeed in all aspects of your online presence.',
    },
    {
      question: 'I want to ask something else',
      answer:
        'We’re here to help with any questions you may have. Feel free to contact us directly via phone, email, or our website contact form. Our friendly and knowledgeable team is ready to assist you and provide all the information you need.',
    },
  ];

  return (
    <div className="h-[100svh] pt-[12svh]">
      <div className="flex w-full place-content-center">
        <header className="px-3 py-2 text-center font-anton text-2xl sm:px-2 sm:text-3xl">
          FAQ
        </header>
      </div>

      <div className="flex flex-col gap-2 px-8 pb-4 sm:overflow-auto">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-[1px]"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-primary"
            >
              <AccordionTrigger className="bg-secondary p-2 text-start text-primary sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-2 text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
