import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Award, Sparkles, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email)
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-luxury py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gold text-center mb-16">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-gold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+91 12345 67890</p>
                  <p className="text-gray-300">Mon - Sat: 10 AM - 8 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">info@luxuryjewelry.com</p>
                  <p className="text-gray-300">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">123 Luxury Street</p>
                  <p className="text-gray-300">Mumbai, Maharashtra 400001</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-300">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/911234567890" 
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism p-8 rounded-lg"
          >
            <h2 className="text-3xl font-semibold text-gold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-gold focus:outline-none transition-colors resize-none"
                  rows="6"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-gold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-6 rounded-lg">
              <Award className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-300">Only the finest materials and craftsmanship</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <Sparkles className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-300">Personalized attention and expert advice</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <Crown className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-semibold mb-2">Trusted Heritage</h3>
              <p className="text-gray-300">Generations of jewelry excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;