import { PrismaClient } from "@prisma/client";
import styles from "./products/Gaya.module.css";
import AddProduct from "./products/addProduct";
import CalonPengantin from "./products/kirimike";
import Countdown from "./products/countdown";
import Image from 'next/image'
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    },
  });
  return res;
};

const getBrands = async () => {
  const res = await prisma.brand.findMany();
  return res;
};

const Product = async () => {
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-body"]}>
          <div className={styles["card-title"]}>
            Wedding Day
          </div>
          <div className={styles["card-subtitle"]}>
            Ratih & Adi
          </div>
          <div className={styles.img}>
            <Image
              src="/car2.png"
              alt="mobile"
              width={500} // Menetapkan lebar maksimum
              height={225} // Menetapkan tinggi maksimum
            />
          </div>
          <div className={styles["card-title"]}>
            Kepada Yth. Bapak/Ibu/Saudara/i
          </div>
          <CalonPengantin />
          <div className={styles.date}>
            Minggu,24 June 2024
          </div>
          <Countdown />
        </div>
      </div>
      <div className={styles.card}>
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
            Bismillahirrahmanirrahim <br />
            Assalamualaikum Warahmatullahi Wabarakatuh
          </div>
          <div className={styles["sub-judul"]}>
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan
            putra-putri kami:
          </div>
          <div className={styles.pembatas}>
          </div>
          <div className={styles.img}>
            <Image
              src="/ratih.png"
              alt="mobile"
              width={200}
              height={200}
            />
          </div>
          <div className={styles["nama-pengantin"]}>
            Khoirunisa Ratih Islami
          </div>
          <div className={styles.judul}>
            Putri dari bapak Sukamta & Ibu Sri Hartati
          </div>
          <div className={styles["nama-pengantin"]}>
            .... & ....
          </div>
          <div className={styles.img}>
            <Image
              src="/adifix.png"
              alt="mobile"
              width={200}
              height={200}
            />
          </div>
          <div className={styles["nama-pengantin"]}>
            Adi septian
          </div>
          <div className={styles.judul}>
            Putra dari bapak Baiman Kusyono & Ibu Kasinah
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
      <div className={styles.card}>
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
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu
            rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
            Allah) bagi kaum yang berpikir. (Q.S. Ar-Ruum : 21)
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
      <div className={styles.card}>
        <div className={styles.top}>
          <Image
            src="/cropatas.png"
            alt="mobile"
            width={500} // Menetapkan lebar maksimum
            height={225} // Menetapkan tinggi maksimum
          />
        </div>
        <div className={styles["card-body"]}>
          <div className={styles["card-lokasi"]}>
            <div className={styles["card-lokasi-body"]}>
              <div className={styles.ijab}>
                <strong>Ijab Qabul</strong>
              </div>
              <div className={styles["sub-ijab"]}>
                Minggu, 24 June 2024,08:00 WIB
              </div >
              <div className={styles.ijab}>
                <strong> Resepsi Pernikahan</strong >
              </div >
              <div className={styles["sub-ijab"]}>
                Minggu, 24 June 2024,08:00 WIB
              </div >
            </div >
          </div >
          <div className={styles["card-lokasi"]}>
            < div className={
              styles["card-lokasi-body"]}>
              <div className={styles["sub-ijab"]}>
                Scan atau Klik Qr dibawah untuk menuju Lokasi
              </div>
              <div className={styles.img}>
                <Image
                  src="/qrfix1.png"
                  alt="mobile"
                  width={100}
                  height={100}
                />
              </div >
              <div className={styles["sub-ijab"]} style={{ fontSize: "0.7rem", marginTop: "10px" }}>
                Karanaggawang, Jumoyo, Salam, Magelang
              </div >
            </div >
          </div >

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
      <div className={styles.card}>
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
      <div className={styles.card}>
        < div className={
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
        </div >
      </div >
    </main >
  );
};

export default Product;