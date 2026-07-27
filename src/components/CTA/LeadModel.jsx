import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect , useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import { CheckCircle2 } from "lucide-react";


const LeadModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  project: "",
 });

 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const [success, setSuccess] = useState(false)

 const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbwUwadi9JSGCVfIFYkoyMRTPkCJfJtTNUsfMC3i2cANc3Eh4eAME242OwJ0n5KxnxzsDA/exec";


  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
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
    newErrors.email = "Invalid email";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  if (!formData.service) {
    newErrors.service = "Please select a service";
  }

  if (!formData.project.trim()) {
    newErrors.project = "Project details required";
  } else if (formData.project.length < 20) {
    newErrors.project = "Minimum 20 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

try {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  setLoading(false);
  setSuccess(true);

  setFormData({
    name: "",
    email: "",
    phone: "",
    service: "",
    project: "",
  });

  setErrors({});
} catch (error) {
  console.error(error);
  setLoading(false);
  alert("Failed to submit the form. Please try again.");
}
};

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
    
  }, [open, onClose]);

  

const handleClose = () => {
  setSuccess(false);

  setFormData({
    name: "",
    email: "",
    phone: "",
    service: "",
    project: "",
  });

  setErrors({});

  onClose();
};

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 overflow-y-auto flex items-start sm:items-center justify-center p-4 bg-black/70 backdrop-blur-md mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto mt-20 sm:mt-0 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-white/10  bg-white dark:bg-[#0B1023] p-4 sm:p-8 shadow-2xl mx-4"
          >
       
            <div className="flex items-start justify-between gap-4">
  <div>
    <h2 className="text-3xl font-bold text-black dark:text-white">
      Start Your Growth
    </h2>

    <p className="mt-2 text-gray-400">
      Let's discuss your project and help your business grow.
    </p>
  </div>

  <button
    onClick={handleClose}
    className="p-2 rounded-full hover:bg-white/10 transition"
  >
    <X size={22} 
    className="text-gray-700 dark:text-white" />
  </button>
</div>

            {/* Form */}
           <div className="mt-6">
            {success ? (

        <div className="text-center py-10">
      {/* <div className="text-6xl mb-4">✅</div> */}
      <CheckCircle2 size={80}
      className="mx-auto mb-6 text-green-500"/>

      <h2 className="text-3xl font-bold dark:text-white text-gray-900">
        Thank You!
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
        Your consultation request has been received.
        <br />
        We'll contact you within 24 hours.
      </p>

      <button
        onClick={() => {
          setSuccess(false);
          onClose();
        }}
        className="mt-8 rounded-xl bg-[#D5D93B] px-6 py-3 font-semibold text-black cursor-pointer"
      >
        Close
      </button>
    </div>

  ) : (

     <form 
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 sm:space-y-5">
              <>
               <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base outline-none focus:border-[#D5D93B] dark:border-white/10"
                
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                    {errors.name}

                </p>
              )}
              </>

              <>
                 <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base outline-none focus:border-[#D5D93B] dark:border-white/10"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">
                    {errors.email}

                </p>
              )}
              
              </>

              <>
              <input
                type="tel"
                 name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base outline-none focus:border-[#D5D93B] dark:border-white/10"
              />

               {errors.phone && (
                <p className="text-red-500 text-sm">
                    {errors.phone}

                </p>
              )}

              </>

              <>
  <ServiceDropdown
    value={formData.service}
    onChange={(value) => {
      setFormData((prev) => ({
        ...prev,
        service: value,
      }));

      setErrors((prev) => ({
        ...prev,
        service: "",
      }));
    }}
  />

  {errors.service && (
    <p className="text-red-500 text-sm">
      {errors.service}
    </p>
  )}
</>

           <>
              <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base outline-none focus:border-[#D5D93B] dark:border-white/10"
              />
              {errors.project && (
                <p className="text-red-500 text-sm">
                    {errors.project}

                </p>
              )}
           </>

             
             <button
              type="submit"
              disabled={loading}
             className="w-full rounded-xl bg-[#D5D93B] py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
             >
             {loading ? "Sending..." : "Book Free Consultation"}
             </button>
             
            </form>
  )}

</div>
          </motion.div>
        </motion.div>
      )}


    </AnimatePresence>
  );
};

export default LeadModal;