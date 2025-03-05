import React from 'react';

const Contact = () => {
    return (
        <div className="bg-beige p-8">
            <h2 className="text-4xl font-serif text-center mb-8">Contact Amar</h2>
            <form className="max-w-lg mx-auto">
                <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded" rows="5"></textarea>
                <button type="submit" className="bg-terracotta text-white px-8 py-3 rounded-full hover:bg-opacity-90">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;