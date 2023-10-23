import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0 mb-5">
      <div className="w-5/6 max-w-2xl lg:max-w-4xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is the standard delivery time for your products?",
    answer: "Our standard delivery time is 5 to 7 business days, but we offer express shipping options for faster deliveries if you prefer.",
  },
  {
    question: "How can I contact your customer service?",
    answer: "You can reach our customer service by calling our toll-free number at 1-800-123-4567 or by sending an email to support@example.com. We are available Monday through Friday from 9:00 a.m. to 5:00 p.m.",
  },
  {
    question: "What are the accepted payment methods on your online platform? ",
    answer:
      "We accept major credit cards such as Visa, MasterCard, and American Express. We also offer payment options through PayPal and bank transfers.",
  },
  {
    question: "Do you offer warranties on your products?",
    answer:
      "Yes, we offer a 100% satisfaction guarantee. If you are not satisfied with your purchase, you can return the product within 30 days, and we will refund the full purchase price. Additionally, many of our products also come with manufacturer-specific warranties for added peace of mind.",
  },
];

export default Faq;