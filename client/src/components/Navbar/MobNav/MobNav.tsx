import React from "react";
import MobNavButton from "./MobNavButton";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiFolder, FiCoffee } from "react-icons/fi";

interface MobNavProps {
  open: boolean;
  shouldShowActions: boolean;
  handleNavClick: (val: string) => void;
}

export default function MobNav({
  open,
  shouldShowActions,
  handleNavClick,
}: MobNavProps) {
  const buttons: { name: string; icon: JSX.Element }[] = [
    { name: "about", icon: <FiUser /> },
    { name: "projects", icon: <FiFolder /> },
    { name: "contact", icon: <FiCoffee /> },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            width: "100px",
            height: "0px",
          }}
          animate={{
            opacity: open ? 1 : 0,
            borderRadius: open && "0px",
            width: open ? "100%" : "0px",
            height: open ? "180px" : "0px",
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            width: 0,
            padding: "0px",
            height: 0,
            transition: {
              duration: 0.2,
              delay: 0.3,
            },
          }}
          style={{
            position: "absolute",
            zIndex: 10000,
            top: "80px",
            right: 0,
            width: "100%",
            padding: "40px",
            minHeight: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 6px 10px 3px rgba(0,0,0,0.1)",
            background: "#5686F5",
            // backdropFilter: "blur(7px)",
            // WebkitBackdropFilter: "blur(7px)",
            borderBottom: "2px solid #23272F",
            borderTop: !shouldShowActions ? "2px solid #23272F" : "none",
          }}
        >
          {buttons.map((button, i) => (
            <MobNavButton
              name={button.name}
              icon={button.icon}
              handleNavClick={handleNavClick}
              i={i}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
