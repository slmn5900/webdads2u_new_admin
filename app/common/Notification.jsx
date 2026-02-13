import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Notification({ title, message, phone, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl max-w-xs"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
    >
      <div className="flex items-start space-x-3">
        <div className="text-2xl">💬</div>
        <div>
          {title && (
            <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
          )}
          <p className="text-sm text-gray-600">{message}</p>
          {phone && (
            <p className="text-teal-600 font-semibold mt-1">📞 {phone}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
