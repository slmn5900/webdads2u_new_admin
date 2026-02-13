import { motion } from "framer-motion";
export const MenuToggle = ({ isOpen, toggle }) => (
  <motion.button
    onClick={toggle}
    className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
  >
    <div className="relative w-6 h-5">
      <motion.span
        className="absolute left-0 top-0 w-full h-[3px] bg-white rounded-full"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
      />
      <motion.span
        className="absolute left-0 top-1/2 w-full h-[3px] bg-white rounded-full"
        animate={{ opacity: isOpen ? 0 : 1 }}
      />
      <motion.span
        className="absolute left-0 bottom-0 w-full h-[3px] bg-white rounded-full"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
      />
    </div>
  </motion.button>
);
