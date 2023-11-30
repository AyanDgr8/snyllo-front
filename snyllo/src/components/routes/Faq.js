// src/components/routes/Faq.js

import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const faqData = [
        {
            question: "How can I book my LHR appointment?",
            answer: `Follow these simple steps to book your appointment: Step 1 - Book your appointment for a video consultation with our Dermatologist by clicking on the "Book Your Appointment" button on our website
            Step 2 - Select the date, time and service you want
            Step 3 - Make payment
            Step 4 - Your Appointment will get booked
            Step 5 - Our team will arrive at your location on the scheduled day and time
            Step 6 - Sit back, relax and get safe laser hair reduction treatment at your home.`
        },
        {
            question: "Is Laser Hair Reduction painful?",
            answer: `Laser Hair Reduction is generally well-tolerated by most individuals, 
            and any discomfort experienced during the procedure is usually minimal. Some people may feel a slight heat sensation or tingling during the treatment, but this can vary depending on individual pain thresholds.`
        },
        {
            question:"Is Laser Hair Reduction safe?",
            answer:`Yes, Laser Hair Reduction is a safe and FDA-approved procedure. It doesn't have long-term side effects. In fact, rarely, there might be redness in sensitive skin types post-treatment which is for 
            a short time, usually for a few hours.`
        },
        {
            question: "How many sessions are needed for optimal results?",
            answer:`The number of sessions required for optimal results can vary 
            depending on factors such as hair type, skin tone, and the targeted area. 
            Typically, multiple sessions are necessary to target hair follicles in different growth cycles. 
            Your hair reduction specialist will assess your specific needs and provide a personalised treatment plan.`
        },
        {
            question:"Are there any side effects associated with Laser Hair Reduction?",
            answer:`Temporary side effects such as redness, mild swelling, or slight skin sensitivity in the 
            treated area are possible but typically subside within a few hours or days. It is important to 
            follow the aftercare instructions provided by the Ilika to minimise the risk of complications.`
        },
        {
            question:"Are the results of Laser Hair Reduction permanent?",
            answer:`Laser Hair Reduction can lead to a significant hair growth reduction. But it is 
            important to note that results may vary. While some individuals experience long-lasting 
            hair reduction, others may require occasional maintenance sessions to sustain the desired outcome.`
        },
        {
            question:"Can Laser Hair Reduction be performed on all skin types?",
            answer:`Advances in laser technology have made it possible to perform hair reduction treatments on a 
            wide range of skin types. However, the effectiveness and safety of the procedure may vary depending on 
            factors such as hair and skin colour. It is advisable to consult with a Dermatologist to determine the 
            most suitable treatment options for your specific skin type.`
        },
        {
            question:"Can Laser Hair Reduction be performed on any body part?",
            answer:`Laser hair reduction is performed on various body parts, like face, legs, arms, underarms, 
            bikini line, back and more. Therefore it depends upon you which areas you desire to get treated.`
        },
        {
            question:"Are there any pre-treatment preparations required?",
            answer:`Prior to your Laser Hair Reduction sessions, you should avoid sun exposure, tanning beds, 
            and certain hair reduction methods such as waxing or plucking. Your specialist will provide specific 
            guidelines to ensure optimal treatment outcomes and minimise the risk of complications.`
        },
        {
            question:"Is Laser Hair Reduction Safe for Pregnant Women?",
            answer:`Dermatologists advise avoiding the procedure during pregnancy due to the unavailability 
            of studies to prove its safety for the mother and the baby during pregnancy.`
        },
        {
            question:"What is the use of gel in Laser Hair Reduction?",
            answer:`1. It acts as a soothing agent and protects the skin.
            2. Helps in easy gliding of the laser over skin.`
        },
        {
            question:"Can Laser Hair Reduction be performed on tattoos or permanent makeup?",
            answer:`The laser targets the pigment to destroy the hair. Similarly, 
            it can also affect other pigments, leading to the scattering of pigment 
            from tattoos if performed on tattooed areas. Therefore, Laser Hair Reduction 
            is not recommended for body parts with tattoos and permanent makeup.`
        },
        {
            question:"What all precautions shall i take post Laser Hair Treatment?",
            answer:`Follow these practices after the Laser Hair Reduction Treatment:

            1.Protect the treated area from direct sunlight for at least a week after the treatment.
            2.For the first 24 to 48 hours after the treatment, avoid hot showers, baths, saunas, and steam rooms.
            3.Refrain from activities that generate excessive heat, such as heavy exercise, hot tubs, and hot yoga, 
            for a couple of days after the treatment.
            4.Avoid picking hair, scratching, or exfoliating the skin to prevent any complications or potential scarring.
            5.Use mild and gentle skincare products that are suitable for sensitive skin. Avoid using harsh chemicals or 
            abrasive scrubs on the treated area.`
        },
        {
            question:"How soon can I Expect to see results?",
            answer:`Results are typically visible immediately after treatment, although they may vary among 
            patients. Factors such as hair colour and thickness, treated area, laser type, and skin colour can 
            influence the results. Generally, a 10% to 25% hair reduction can be expected after the first treatment.

            Most patients require 2 to 6 laser treatments to reduce hair drastically. After completing the 
            treatments, patients often experience hair-free skin for several months or even years. When hair regrows, 
            it tends to be less in quantity, finer, and lighter in colour.`
        },
        {
            question:"When is it safe to another Laser Hair Treatment for Hair Reduction?",
            answer:`The frequency of Laser Hair Reduction treatments varies from patient to patient. Typically, 
            one should get treatment every 4 to 6 weeks.`
        },
        {
            question:"How to can and reschedule appointments?",
            answer:`Appointments are not subject to cancellation! Also, they are not transferable. But they are 
            rescheduled only by contacting us 24 hours prior. If not informed, your session will begin at the 
            previously booked time.`
        }

    ];

    const handleQuestionClick = (index) => {
        setOpenQuestion((prevOpenQuestion) => (prevOpenQuestion === index ? null : index));
    };

    return (
        <div>
            <div className="faq-page-content">
                <span className='big-heading-faq'>
                    <h2>FREQUENTLY </h2>
                    <h3>ASKED QUESTIONS</h3>
                </span>
                <div className="fa-questions">
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <button class ="faq-button" onClick={() => handleQuestionClick(index)}>
                                {faq.question}
                            </button>
                            {openQuestion === index && <p>{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
