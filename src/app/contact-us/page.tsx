import styles from "./page.module.css"
export default function Contact(){
    return(
        <div className={styles.parentdiv}>
        <div className={styles.contacts}>
            <h1 className={styles.title}>Contacts</h1>
                <ul>
                    <li><a href="mailto:jiyaprincess2905@gmail.com" className={styles.links}>Email</a></li>
                    <li><a href="https://www.linkedin.com/in/javeria-zabit-2594472b7" target="_blank" className={styles.links}>LinkedIn</a></li>
                    <li><a href="https://github.com/jiyakhan098" target="_blank" className={styles.links}>Github</a></li>
                </ul>
        </div>
        </div>
    )
}