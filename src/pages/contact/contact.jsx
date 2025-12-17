import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: "", message: "" }), 4000);
  };

  const validate = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim().length < 2) {
      showToast("error", "Name must contain at least 2 characters.");
      return;
    }

    if (!emailRegex.test(form.email)) {
      showToast("error", "Please enter a valid email.");
      return;
    }

    if (form.phone.trim().length !== 10) {
      showToast("error", "Enter a valid 10-digit phone number.");
      return;
    }

    if (!form.message.trim()) {
      showToast("error", "Message cannot be empty.");
      return;
    }

    sendEmail();
  };

  const sendEmail = () => {
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_REACT_APP_MAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_MAILJS_TEMPLET_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_MAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          contact_number: form.phone,
          message: form.message,
        },
        publicKey
      )
      .then((res) => {
        if (res.text === "OK") {
          setForm({ name: "", email: "", phone: "", message: "" });
          showToast("success", "Message sent successfully!");
        } else {
          showToast("error", "Something went wrong. Try again.");
        }
      })
      .catch(() => {
        showToast("error", "Failed to send message.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {toast.message && (
        <div
          className={`
      fixed top-20 sm:top-5 right-5 z-50 w-[320px]
      rounded-xl px-4 py-3
      backdrop-blur-md
      shadow-lg
      border
      animate-toast
      ${
        toast.type === "success"
          ? "bg-green-500/10 border-green-400/30 text-green-300"
          : "bg-red-500/10 border-red-400/30 text-red-300"
      }
    `}
        >
          <div className="flex items-start gap-3">
            
            <span
              className={`mt-1 h-2.5 w-2.5 rounded-full
          ${toast.type === "success" ? "bg-green-400" : "bg-red-400"}
        `}
            />

            <p className="text-sm leading-relaxed">{toast.message}</p>
          </div>
        </div>
      )}

      <section className="flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-tight text-center sm:text-start">
            Let’s Create <br />
            Something <span className="text-violet-500">Amazing</span>
          </h1>

          <form
            onSubmit={validate}
            className="noise-bg rounded-2xl sm:p-8 space-y-5 mt-10 p-4"
            style={{ "--bg-base": "#1c1c1c" }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleOnChange}
              placeholder="Your Name"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-violet-500"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleOnChange}
              placeholder="your@email.com"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-violet-500"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleOnChange}
              placeholder="10-digit phone"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-violet-500"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleOnChange}
              placeholder="Your Message"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white resize-none outline-none focus:ring-2 focus:ring-violet-500"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer  rounded-xl bg-violet-600 py-3 text-white
                         hover:bg-violet-700 transition disabled:opacity-60
                         flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      fill="currentColor"
                      className="opacity-75"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
