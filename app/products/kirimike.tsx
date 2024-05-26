"use client"; // Menandai file ini sebagai Client Component
import styles from "./Gaya.module.css";
import { useSearchParams } from "next/navigation";

const CalonPengantin = () => {
    const searchParams = useSearchParams();
    const toParam = searchParams.get("to");

    return (
        <div className={styles.kirimke}>{toParam || "Mohamad Wijdan Arif"}</div>
    );
};

export default CalonPengantin;