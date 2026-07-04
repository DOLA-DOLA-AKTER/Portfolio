import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Button } from '../Button/Button'

export const Contacts = () => {

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // console.log(formData);

      alert("Message Sent Successfully!");

      setFormData({ name: "", email: "", subject: "", message: ""});
      setErrors({});
    }
  };

  return (
    <section>
      <Container>
        {/* Section Heading */}
        <div>
          <SectionHeading
            heading1="Contact"
            heading2="Me"
            peragraph="Feel free to contact me if you have any questions or project opportunities."
          />
        </div>
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">

            <div className="bg-orange-50 p-6 rounded-2xl flex items-center gap-5 border border-orange-100 hover:shadow-lg duration-300">
              <div className="bg-orange text-white p-4 rounded-xl">
                <HiOutlineMail size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Email
                </h3>

                <p className="text-slate-600">
                  dola.akter20320@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl flex items-center gap-5 border border-orange-100 hover:shadow-lg duration-300">
              <div className="bg-orange text-white p-4 rounded-xl">
                <HiOutlinePhone size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Phone
                </h3>

                <p className="text-slate-600">
                  +8801712977115
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl flex items-center gap-5 border border-orange-100 hover:shadow-lg duration-300">
              <div className="bg-orange text-white p-4 rounded-xl">
                <HiOutlineLocationMarker size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Location
                </h3>

                <p className="text-slate-600">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:border-orange-500"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:border-orange-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:border-orange-500"
              />

              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none resize-none focus:border-orange-500"
              />

              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <div>
                <Button type='submit'>Send Message</Button>
              </div>

            </form>

          </div>

        </div>
      </Container>
    </section>
  )
}
