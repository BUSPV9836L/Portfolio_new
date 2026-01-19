// import { useState } from "react";
// import { createFeedback } from "../../service";

// const AddFeedbackForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     role: "",
//     review: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [toast, setToast] = useState({ type: "", message: "" });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const showToast = (type, message) => {
//     setToast({ type, message });
//     setTimeout(() => setToast({ type: "", message: "" }), 4000);
//   };

//   const validate = (e) => {
//     e.preventDefault();

//     if (form.name.trim().length < 2) {
//       showToast("error", "Name must contain at least 2 characters.");
//       return;
//     }

//     if (form.role.trim().length < 2) {
//       showToast("error", "Role must contain at least 2 characters.");
//       return;
//     }

//     if (form.review.trim().length < 10) {
//       showToast("error", "Review must be at least 10 characters.");
//       return;
//     }

//     submitFeedback();
//   };

//   const submitFeedback = async () => {
//     setIsLoading(true);

//     try {
//       const res = await createFeedback(form);
//       if (res.success) {
//         setForm({ name: "", role: "", review: "" });
//         showToast("success", "Feedback submitted successfully!");
//       } else {
//         throw new Error(res.message);
//       }
//     } catch (error) {
//       showToast("error", error.message || "Failed to submit feedback.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       {toast.message && (
//         <div
//           className={`
//             fixed top-20 sm:top-5 right-5 z-50 w-[320px]
//             rounded-xl px-4 py-3
//             backdrop-blur-md shadow-lg border animate-toast
//             ${
//               toast.type === "success"
//                 ? "bg-green-500/10 border-green-400/30 text-green-300"
//                 : "bg-red-500/10 border-red-400/30 text-red-300"
//             }
//           `}
//         >
//           <div className="flex items-start gap-3">
//             <span
//               className={`mt-1 h-2.5 w-2.5 rounded-full ${
//                 toast.type === "success" ? "bg-green-400" : "bg-red-400"
//               }`}
//             />
//             <p className="text-sm leading-relaxed">{toast.message}</p>
//           </div>
//         </div>
//       )}
//       <div
//         className="noise-bg mt-8 rounded-2xl p-6"
//         style={{ "--bg-base": "#1c1c1c" }}
//       >
//         <h3 className="text-xl font-semibold mb-4">Add Feedback</h3>

//         <form onSubmit={validate} className="space-y-5">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleOnChange}
//             placeholder="Your Name"
//             className="w-full rounded-xl bg-white/10 px-4 py-3 text-white
//                        outline-none focus:ring-2 focus:ring-violet-500"
//           />

//           <input
//             name="role"
//             value={form.role}
//             onChange={handleOnChange}
//             placeholder="Your Role"
//             className="w-full rounded-xl bg-white/10 px-4 py-3 text-white
//                        outline-none focus:ring-2 focus:ring-violet-500"
//           />

//           <textarea
//             rows="4"
//             name="review"
//             value={form.review}
//             onChange={handleOnChange}
//             placeholder="Your Feedback"
//             className="w-full rounded-xl bg-white/10 px-4 py-3 text-white
//                        resize-none outline-none focus:ring-2 focus:ring-violet-500"
//           />

//           <div className="flex gap-4">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="flex-1 cursor-pointer rounded-xl bg-violet-600 py-3 text-white
//                          hover:bg-violet-700 transition disabled:opacity-60
//                          flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <svg
//                     className="h-5 w-5 animate-spin"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       className="opacity-25"
//                     />
//                     <path
//                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                       fill="currentColor"
//                       className="opacity-75"
//                     />
//                   </svg>
//                   Submitting...
//                 </>
//               ) : (
//                 "Submit"
//               )}
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 setForm({
//                   name: "",
//                   role: "",
//                   review: "",
//                 })
//               }
//               className="flex-1 cursor-pointer rounded-xl bg-zinc-700 py-3 text-white hover:bg-zinc-600"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddFeedbackForm;
