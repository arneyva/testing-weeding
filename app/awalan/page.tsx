import CalonPengantin from "../products/kirimike"
import styles from "./Awalan.module.css"
const Awalan = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles["card-body"]}>
                        <div className={styles["weeding-day"]}>
                            Wedding Day
                        </div>
                        <div className={styles["ratih-adi"]}>
                            Ratih & Adi
                        </div>
                        <div className={styles.date}>
                            Minggu,24 June 2024
                        </div>
                        <div className={styles["kepada-yth"]}>
                            Kepada Yth. Bapak/Ibu/Saudara/i
                        </div>
                        <CalonPengantin />
                        <div className={styles.calonpengantin}>
                            Open Invitation
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awalan