import React from "react";

const Testimonial = () => {
    return (
        <div id="testimonial">
            <h2>Testimonial</h2>

            <section>
                <TestimonialCard
                    name={"subhash"}
                    feedback={"Your humor level is top class !."}
                />

                <TestimonialCard
                    name={"ankit"}
                    feedback={
                        "Wow what a portfolio,so empresive!"
                    }
                />

                <TestimonialCard
                    name={"Sundar Pichai"}
                    feedback={"Amazing seems like you should the Google CEO"}
                />
            </section>
        </div>
    );
};

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
);

export default Testimonial;