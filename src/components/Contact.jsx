import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-20 bg-brandAccent text-brandDark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-10">
            Let's Talk
          </h2>
          <p className="text-xl font-medium mb-10 max-w-md">
            Tell us about your project — whether it's a website, SEO, or marketing.
          </p>
          
          <div className="space-y-4 text-sm font-medium uppercase tracking-widest">
            <p>Work and general inquiries</p>
            <p className="text-xl font-bold">+123 456 789 00</p>
            <p className="mt-8 text-gray-700">541 Melville Ave, Palo Alto, CA</p>
          </div>
        </div>

        <form className="space-y-8 text-xl font-light">
          <div className="border-b border-black pb-4">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent focus:outline-none placeholder-brandDark/50" />
          </div>
          <div className="border-b border-black pb-4">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent focus:outline-none placeholder-brandDark/50" />
          </div>
          <div className="border-b border-black pb-4">
            <textarea placeholder="Project Details" rows="3" className="w-full bg-transparent focus:outline-none placeholder-brandDark/50 resize-none"></textarea>
          </div>
          <button className="bg-brandDark text-brandAccent px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors w-full md:w-auto text-sm">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;