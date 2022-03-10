import { motion } from "framer-motion"

const Layout = ({children}) => (
  <motion.main 
    id="app"
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={{}}
    transition={{ type: 'linear' }}
  >
    {children}
  </motion.main>
)

export default Layout