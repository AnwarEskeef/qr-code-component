
import styles from './styles.module.css'
const { mainContainer, defalut } = styles
const Containers = ({ children, style, bootstarpClass }) => {
    const combinedClasses = `   ${bootstarpClass ? `${bootstarpClass} ${defalut} ` : mainContainer}  `
    return (
        <div className={combinedClasses} style={style} >
            {children}
        </div>
    )
}
export default Containers;
