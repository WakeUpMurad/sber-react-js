import classes from './MyFooter.module.css'

const MyFooter = () => {
  return <div className={classes.footer}>Sber React JS course ©{new Date().getFullYear()} Created by Murad Gakhramanov</div>
}

export default MyFooter
