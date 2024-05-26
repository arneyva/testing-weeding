"use client";

import React, { useState } from "react";
import styles from "./products/Gaya.module.css";
import AddProduct from "./products/addProduct";
import CalonPengantin from "./products/kirimike";
import Countdown from "./products/countdown";
import Awalan from "./awalan/page";
import Image from 'next/image'
import MusicPlayer from "./products/MusicPlayer";

// export const dynamic = "force-dynamic";

interface Product {
    id: number;
    title: string;
    price: string;
    brandId: number;
    brand: {
        name: string;
    };
}

interface Brand {
    id: number;
    name: string;
}

const ClientComponent = ({ products, brands }: { products: Product[], brands: Brand[] }) => {
    const [showContainer, setShowContainer] = useState(false);

    const handleClick = () => {
        setShowContainer(true);
    };
    return (
        <div>
            {!showContainer && (
                <div onClick={handleClick}>
                    <Awalan />
                </div>
            )}
            {showContainer && (
                <div className={styles.container}>
                    <MusicPlayer />
                    <div className={styles.card} id="ayat-arum">
                        <div className={styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                        <div className={styles["card-body"]}>
                            <div className={styles.img}>
                                <Image
                                    src="/logo3.png"
                                    alt="mobile"
                                    width={106} // Menetapkan lebar maksimum
                                    height={141} // Menetapkan tinggi maksimum
                                />
                            </div>
                            <div className={styles.judul} style={{ marginTop: "15px", paddingLeft: "30px", paddingRight: "30px" }}>
                                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari
                                jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu
                                rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                                Allah) bagi kaum yang berpikir.
                                <br />
                                <br />
                                (Q.S. Ar-Ruum : 21)
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                    </div>
                    {/* mempelai */}
                    <div className={styles.card} id="mempelai">
                        <div className={styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                        <div className={styles["card-body"]}>
                            <div className={styles.pembatas}>
                            </div>
                            <div className={styles["nama-pengantin"]}>
                                Khoirunisa Ratih Islami
                            </div>
                            <div className={styles.judul}>
                                Putri dari bapak Sukamta & Ibu Sri Hartati
                            </div>
                            <div className={styles["nama-pengantin"]}>
                                &
                            </div>
                            <div className={styles["nama-pengantin"]}>
                                Adi Septian
                            </div>
                            <div className={styles.judul}>
                                Putra dari bapak Baiman Kusyono & Ibu Kasinah
                            </div>
                            <div className={styles.pembatas}>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                    </div>
                    {/* weddings day */}
                    <div className={styles.card} id="waktu">
                        <div className={styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                        <div className={styles["card-body"]}>
                            <div className={styles.judul}>
                                Minggu, 23 Juni 2024
                            </div>
                            <div className={styles.pembatas}></div>
                            <div className={styles["nama-pengantin"]} style={{ fontSize: "2.5rem" }}>
                                Akad Nikah
                            </div>
                            <div className={styles["card-title"]} style={{ fontSize: "0.7rem" }}>
                                Masjid Muhaibin,Karanggawang,Jumoyo,Salam
                                <br />
                                Pukul 06.00 - Selesai
                            </div>
                            <div className={styles["nama-pengantin"]}>
                                &
                            </div>
                            <div className={styles["nama-pengantin"]} style={{ fontSize: "2.5rem" }}>
                                Resepsi Pernikahan
                            </div>
                            <div className={styles["card-title"]} style={{ fontSize: "0.7rem" }}>
                                Rumah Bpk Sukamta,Karanggawang,Jumoyo,Salam
                                <br />
                                Pukul 08.00 - Selesai
                            </div>
                            <div className={styles.pembatas}></div>
                            <Countdown />
                        </div>
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                    </div>
                    <div className={styles.card} id="tempat">
                        <div className={styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div>
                        <div className={styles["card-body"]}>
                            <div className={styles["card-subtitle"]}>
                                Lokasi Acara
                            </div>
                            <div className={styles.pembatas}></div>
                            <div className={styles["card-lokasi-body"]}>
                                <div className={styles["img"]}>
                                    <Image
                                        src="/maps.png"
                                        alt="mobile"
                                        width={500} // Menetapkan lebar maksimum
                                        height={225} // Menetapkan tinggi maksimum
                                    />
                                </div>
                            </div >
                            <div className={styles.pembatas}></div>
                            <div className={styles["card-title"]} style={{ fontSize: "0.7rem" }}>
                                Rumah Bpk Sukamta,Karanggawang,Jumoyo,Salam
                            </div>
                            <a href="https://maps.app.goo.gl/qDzcUJRBAWXd3NsV8" target="_blank">
                                <div className={styles.calonpengantin}>
                                    Petunjuk ke Lokasi
                                </div>
                            </a>
                        </div >
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                    </div >
                    <div className={styles.card} id="rsvp">
                        <div className={
                            styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                        <div className={styles["card-body"]}>
                            < div className={
                                styles["nama-pengantin"]}>
                                Leave your wishes for us..
                            </div>
                            <div className={styles.pembatas}>
                            </div >
                            {/* milik tambah harapan */}
                            <AddProduct brands={brands} />
                            <div className={styles["card-pesan"]}>
                                <div className={
                                    styles["card-pesan-body"]}>
                                    {products.map((product, index) => (
                                        <div className={styles.comment} key={product.id}>
                                            <div className={styles.nama}>{product.title}</div>
                                            <div className={styles.konfirmasi}>{product.brand.name}</div>
                                            <div className={styles.pesan}>{product.price}</div>
                                        </div>
                                    ))}
                                </div >
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                    </div>
                    <div className={styles.card} id="closing">
                        <div className={
                            styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                        <div className={
                            styles["card-body"]}>
                            <div className={styles["card-title"]} style={{ marginTop: "20px" }}>
                                Merupakan suatu kebahagiaan bagi kami apabila Bapak/ Ibu / Saudara / i berkenan untuk hadir dan
                                memberikan doa restu.
                            </div >
                            <div className={styles["card-title"]}>
                                < strong > Terima Kasih</strong >
                            </div >
                            <div className={styles["card-title"]}>
                                Kami yang Berbahagia
                            </div >
                            <div className={styles["card-subtitle"]}>
                                Ratih & Adi
                            </div >
                            <div className={styles.img}>
                                <Image
                                    src="/logo3.png"
                                    alt="mobile"
                                    width={106} // Menetapkan lebar maksimum
                                    height={141} // Menetapkan tinggi maksimum
                                />
                            </div>
                        </div >
                        <div className={styles.bottom}>
                            <Image
                                src="/cropbawah.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                        <div className={
                            styles.top}>
                            <Image
                                src="/cropatas.png"
                                alt="mobile"
                                width={500} // Menetapkan lebar maksimum
                                height={225} // Menetapkan tinggi maksimum
                            />
                        </div >
                    </div >
                </div >
            )}
        </div>
    );
};

export default ClientComponent;