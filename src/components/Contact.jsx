import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Plus, Trash2, Utensils } from 'lucide-react';

const categories = [
  "Hot & Cold Sandwiches",
  "Street Food",
  "Mishti Milkshakes",
  "Cold Drinks",
  "Ice Coffee",
  "Tea & Coffee",
  "Weekly Specials"
];

const allItems = [
  {
    "title": "Cheese & Tomato Baguette",
    "price": "£3.50",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Tuna mayo cob",
    "price": "£2.00",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Chicken Baguette",
    "price": "£3.50",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Tuna Baguette",
    "price": "£3.50",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Chilli Cheese Toastie",
    "price": "£2.50",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Mushroom & Cheese toastie",
    "price": "£3.35",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Double Cheese Baget",
    "price": "£2.00",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Cheese & Tomato Baget",
    "price": "£2.25",
    "category": "Hot & Cold Sandwiches"
  },
  {
    "title": "Samosas (veg/pot)",
    "price": "£1.00",
    "category": "Street Food"
  },
  {
    "title": "Samosas (chicken/meat)",
    "price": "£1.50",
    "category": "Street Food"
  },
  {
    "title": "Jaal muri",
    "price": "£2.50",
    "category": "Street Food"
  },
  {
    "title": "Mishti Phan",
    "price": "£1.00",
    "category": "Street Food"
  },
  {
    "title": "Jaal muri",
    "price": "£2.50",
    "category": "Street Food"
  },
  {
    "title": "Pani Puri Fruit bombs (6pcs)",
    "price": "£5.00",
    "category": "Street Food"
  },
  {
    "title": "Spicy chana chatt",
    "price": "£3.50",
    "category": "Street Food"
  },
  {
    "title": "Samosa Chatt",
    "price": "£5.00",
    "category": "Street Food"
  },
  {
    "title": "Masala Omelette Parata",
    "price": "£3.00",
    "category": "Street Food"
  },
  {
    "title": "Hash brown cob",
    "price": "£1.50",
    "category": "Street Food"
  },
  {
    "title": "Masala Omlette",
    "price": "£2.00",
    "category": "Street Food"
  },
  {
    "title": "Muglai Parata",
    "price": "£3.95 / £7",
    "category": "Street Food"
  },
  {
    "title": "Chicken & Spinach pasty",
    "price": "£3.50",
    "category": "Street Food"
  },
  {
    "title": "Chicken kebab bap",
    "price": "£3.50",
    "category": "Street Food"
  },
  {
    "title": "Croissant butter",
    "price": "£1.50",
    "category": "Street Food"
  },
  {
    "title": "Almond Croissant",
    "price": "£2.00",
    "category": "Street Food"
  },
  {
    "title": "Choc’n’nut Granola Bowl",
    "price": "£3.49",
    "category": "Street Food"
  },
  {
    "title": "Fruit ’n’nut Granola Bowl",
    "price": "£3.49",
    "category": "Street Food"
  },
  {
    "title": "Home baked",
    "price": "£2.50",
    "category": "Street Food"
  },

  {
    "title": "Gulap Jam Milkshake",
    "price": "£3.50",
    "category": "Mishti Milkshakes"
  },
  {
    "title": "Kala Jam Milkshake",
    "price": "£3.50",
    "category": "Mishti Milkshakes"
  },
  {
    "title": "House Special Milkshake",
    "price": "£4.00",
    "desc": "Pistachio & salted caramel",
    "category": "Mishti Milkshakes"
  },

  {
    "title": "Mango Lassi",
    "price": "£3.50",
    "category": "Cold Drinks"
  },
  {
    "title": "Brazilian Lemonade",
    "price": "£3.95",
    "category": "Cold Drinks"
  },
  {
    "title": "Strawberry Lemonade",
    "price": "£3.95",
    "category": "Cold Drinks"
  },

  {
    "title": "House Ice Coffee",
    "price": "£3 (small) / £3.95 (large)",
    "category": "Ice Coffee"
  },
  {
    "title": "Caramel Ice Coffee",
    "price": "£3 / £3.95",
    "category": "Ice Coffee"
  },

  {
    "title": "Rice Pudding",
    "price": "£4.95",
    "category": "Weekly Specials"
  },
  {
    "title": "Fruit Salad",
    "price": "£4.95",
    "category": "Weekly Specials"
  },
  {
    "title": "Coconut Crepes",
    "price": "£3.50",
    "category": "Weekly Specials"
  },

  {
    "title": "Chai (House Special)",
    "price": "£2.00",
    "category": "Tea & Coffee"
  },
  {
    "title": "Double Choc House Mocha",
    "price": "£2.40",
    "category": "Tea & Coffee"
  },
  {
    "title": "Pink Chai",
    "price": "£2.20",
    "category": "Tea & Coffee"
  },
  {
    "title": "Caramel Chai",
    "price": "£2.20",
    "category": "Tea & Coffee"
  },
  {
    "title": "Moroccan Tea",
    "price": "£2.75",
    "category": "Tea & Coffee"
  },
  {
    "title": "English Tea",
    "price": "£1.75",
    "category": "Tea & Coffee"
  },
  {
    "title": "Herbal Blue Tea",
    "price": "£4.19",
    "category": "Tea & Coffee"
  },
  {
    "title": "Mango Flower Tea",
    "price": "£4.19",
    "category": "Tea & Coffee"
  },
  {
    "title": "Karak Coffee (House Special)",
    "price": "£2.00",
    "category": "Tea & Coffee"
  },
  {
    "title": "Chai Latte",
    "price": "£2.20",
    "category": "Tea & Coffee"
  },
  {
    "title": "Espresso",
    "price": "£1.50",
    "category": "Tea & Coffee"
  },
  {
    "title": "Black Coffee / Flat White",
    "price": "£2.85",
    "category": "Tea & Coffee"
  },
  {
    "title": "Cappuccino",
    "price": "£2.85",
    "category": "Tea & Coffee"
  },
  {
    "title": "Hot Chocolate",
    "price": "£2.00",
    "category": "Tea & Coffee"
  }
]


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [menuItems, setMenuItems] = useState([
    { id: 1, category: '', item: '', quantity: 1 }
  ]);

  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.phone.trim()) errs.phone = "Phone is required";

    const hasValidItem = menuItems.some(item => item.category && item.item);
    if (!hasValidItem) {
      errs.menuItems = "Please select at least one menu item";
    }

    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMenuChange = (id, field, value) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, [field]: value, ...(field === 'category' ? { item: '' } : {}) } : item
    ));
  };

  const addMenuItem = () => {
    const newId = Math.max(...menuItems.map(item => item.id), 0) + 1;
    setMenuItems([...menuItems, { id: newId, category: '', item: '', quantity: 1 }]);
  };

  const removeMenuItem = (id) => {
    if (menuItems.length > 1) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const getFilteredItems = (category) => {
    return allItems.filter(item => item.category === category);
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const orderDetails = menuItems
        .filter(item => item.category && item.item)
        .map(item => `${item.quantity}x ${item.item}`)
        .join('\n');

      const whatsappMessage = `*New Order Request*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n*Order Details:*\n${orderDetails}\n\n*Additional Message:*\n${form.message || 'None'}`;

      const phoneNumber = '+447850053653';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');

      // Clear form data after successful submission
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setMenuItems([
        { id: 1, category: '', item: '', quantity: 1 }
      ]);
      setErrors({});
    }
  };

  return (
    <div id='contact' className="scroll-m-5 min-h-screen w-full bg-white text-white font-sans p-4 md:p-12 relative overflow-hidden">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#CCFF66 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-green-300/15 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-green-400/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Heading */}
      <div className={`text-center mb-10 relative z-10 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Order & Get In Touch</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold max-w-xl mx-auto">
          Place your order or send us a message via WhatsApp!
        </p>
      </div>

      {/* Order Form + Info */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Form */}
        <div className={`bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-6 md:p-8 shadow-2xl transition-all duration-1000 hover:shadow-green-900/50 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#C8A950]">Place Your Order</h2>

          {/* Customer Info */}
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className={`bg-[#0a1f17] border ${errors.name ? 'border-red-500' : 'border-green-700/50'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-white outline-none`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                className={`bg-[#0a1f17] border ${errors.email ? 'border-red-500' : 'border-green-700/50'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-white outline-none`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                className={`bg-[#0a1f17] border ${errors.phone ? 'border-red-500' : 'border-green-700/50'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-white outline-none`}
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Menu Items Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#C8A950] flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#C8A950]" />
              Select Menu Items
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {menuItems.map((menuItem, index) => (
                <div
                  key={menuItem.id}
                  className="bg-[#0a1f17] rounded-lg p-4 border border-green-700/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 font-semibold text-sm bg-green-900/30 px-3 py-1 rounded-full">
                      Item #{index + 1}
                    </span>
                    {menuItems.length > 1 && (
                      <button
                        onClick={() => removeMenuItem(menuItem.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/30 transition-all p-2 rounded-full"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <select
                      value={menuItem.category}
                      onChange={(e) => handleMenuChange(menuItem.id, 'category', e.target.value)}
                      className="bg-[#12392c] border border-green-700/50 text-white rounded-lg p-2.5 w-full focus:ring-2 focus:ring-green-500 transition-all cursor-pointer outline-none"
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>

                    <select
                      value={menuItem.item}
                      onChange={(e) => handleMenuChange(menuItem.id, 'item', e.target.value)}
                      disabled={!menuItem.category}
                      className="bg-[#12392c] border border-green-700/50 text-white rounded-lg p-2.5 w-full focus:ring-2 focus:ring-green-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                    >
                      <option value="">Select Item</option>
                      {menuItem.category && getFilteredItems(menuItem.category).map(item => (
                        <option key={item.title} value={item.title}>
                          {item.title} - {item.price}
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center gap-3">
                      <label className="text-sm text-gray-300 font-medium">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={menuItem.quantity}
                        onChange={(e) => handleMenuChange(menuItem.id, 'quantity', parseInt(e.target.value) || 1)}
                        className="bg-[#12392c] border border-green-700/50 text-white rounded-lg p-2 w-20 focus:ring-2 focus:ring-green-500 transition-all text-center outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {errors.menuItems && <p className="text-red-400 text-sm mt-2">{errors.menuItems}</p>}

            <button
              onClick={addMenuItem}
              className="w-full mt-4 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add More Items
            </button>
          </div>

          {/* Additional Message */}
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Additional Message (Optional)"
              rows="3"
              className="bg-[#0a1f17] border border-green-700/50 placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-white resize-none outline-none"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-[#C8A950] to-[#b89840] hover:from-[#b89840] hover:to-[#C8A950] text-black font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] text-lg"
          >
            Send Order via WhatsApp
          </button>
        </div>

        {/* Right Info Section */}
        <div className={`flex flex-col gap-6 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-5 flex gap-4 items-center shadow-xl hover:shadow-green-900/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Location</h3>
              <a
                href="https://maps.app.goo.gl/UjXrLfUgafhjnzmQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-5 flex gap-4 items-center shadow-xl hover:shadow-green-900/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Phone</h3>
              <a href="tel:+447850053653" className="text-gray-300 hover:text-white transition-colors">
                07850 053653
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-5 flex gap-4 items-center shadow-xl hover:shadow-green-900/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Email</h3>
              <a href="mailto:samochaihouse@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                samochaihouse@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-5 flex gap-4 items-start shadow-xl hover:shadow-green-900/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-2">Hours</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Monday – Thursday: 9 AM – 5 PM <br />
                Friday: 9 AM – 4:30 PM <br />
                Saturday : 11 AM – 3 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className={`max-w-7xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <iframe
          className="w-full h-96 border-4 border-[#12392c]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6893738819927!2d-1.2001815207987023!3d52.76809914651751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e115c27f66d1%3A0xf453b623c1af34a6!2sSamochai!5e0!3m2!1sen!2slk!4v1758995069989!5m2!1sen!2slk"
          allowFullScreen
          loading="lazy"
          title="Samochai Location Map"
        ></iframe>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a1f17;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #346909;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a8c0f;
        }
      `}</style>
    </div>
  );
};

export default Contact;