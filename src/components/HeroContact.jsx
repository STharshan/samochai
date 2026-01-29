import React, { useState, useEffect } from "react";
import { Plus, Trash2, Utensils } from "lucide-react";
import { categories, allItems } from "../components/MenuData";

const HeroContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [menuItems, setMenuItems] = useState([
    { id: 1, category: "", item: "", quantity: 1 },
  ]);

  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      errs.email = "Email is invalid";
    if (!form.phone.trim()) errs.phone = "Phone is required";

    const hasValidItem = menuItems.some(
      (item) => item.category && item.item
    );
    if (!hasValidItem)
      errs.menuItems = "Please select at least one menu item";

    return errs;
  };

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleMenuChange = (id, field, value) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id
          ? { ...item, [field]: value, ...(field === "category" && { item: "" }) }
          : item
      )
    );
  };

  const addMenuItem = () => {
    const newId = Math.max(...menuItems.map((i) => i.id)) + 1;
    setMenuItems([...menuItems, { id: newId, category: "", item: "", quantity: 1 }]);
  };

  const removeMenuItem = (id) => {
    if (menuItems.length > 1) {
      setMenuItems(menuItems.filter((item) => item.id !== id));
    }
  };

  const getFilteredItems = (category) =>
    allItems.filter((item) => item.category === category);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    const orderDetails = menuItems
      .filter((i) => i.category && i.item)
      .map((i) => `${i.quantity}x ${i.item}`)
      .join("\n");

    const message = `*New Order Request*

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

*Order Details*
${orderDetails}

*Message*
${form.message || "None"}`;

    window.open(
      `https://wa.me/+447955363123?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setForm({ name: "", email: "", phone: "", message: "" });
    setMenuItems([{ id: 1, category: "", item: "", quantity: 1 }]);
    setErrors({});
  };

  /* ---------------- JSX ---------------- */
  return (
    <section
      className=" relative overflow-hidden px-4 py-5"
    >

      {/* FORM */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-[#12392c] to-[#0e2a20] rounded-xl p-6 md:p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#C8A950] mb-6">
            Place Your Order
          </h3>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                value={form[field]}
                onChange={handleChange}
                className="w-full bg-[#0a1f17] border border-green-700/50 text-white rounded-lg p-3 outline-none"
              />
            ))}
          </div>

          {/* MENU ITEMS */}
          <h4 className="text-[#C8A950] font-semibold flex items-center gap-2 mb-4">
            <Utensils size={18} /> Select Menu Items
          </h4>

          <div className="space-y-4">
            {menuItems.map((m, i) => (
              <div key={m.id} className="bg-[#0a1f17] p-4 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="text-green-400">Item #{i + 1}</span>
                  {menuItems.length > 1 && (
                    <button onClick={() => removeMenuItem(m.id)}>
                      <Trash2 className="text-red-400" size={18} />
                    </button>
                  )}
                </div>

                <select
                  value={m.category}
                  onChange={(e) =>
                    handleMenuChange(m.id, "category", e.target.value)
                  }
                  className="w-full mb-2 bg-[#12392c] text-white rounded-lg p-2"
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={m.item}
                  disabled={!m.category}
                  onChange={(e) =>
                    handleMenuChange(m.id, "item", e.target.value)
                  }
                  className="w-full mb-2 bg-[#12392c] text-white rounded-lg p-2"
                >
                  <option value="">Select Item</option>
                  {getFilteredItems(m.category).map((it) => (
                    <option key={it.title}>
                      {it.title} – {it.price}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  min="1"
                  value={m.quantity}
                  onChange={(e) =>
                    handleMenuChange(m.id, "quantity", +e.target.value)
                  }
                  className="w-24 bg-[#12392c] text-white rounded-lg p-2"
                />
              </div>
            ))}
          </div>

          <button
            onClick={addMenuItem}
            className="w-full mt-4 bg-green-700 text-white py-3 rounded-lg"
          >
            <Plus className="inline mr-2" /> Add More Items
          </button>

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            rows="3"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-4 bg-[#0a1f17] text-white rounded-lg p-3"
          />

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-gradient-to-r from-[#C8A950] to-[#b89840] text-black font-bold py-3 rounded-lg"
          >
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
