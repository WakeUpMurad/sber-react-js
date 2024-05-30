import classes from './Footer.module.css'

const Footer = () => {
  return <div className={classes.footer}>Sber React JS course ©{new Date().getFullYear()} Created by Murad Gakhramanov</div>
}

export default Footer
