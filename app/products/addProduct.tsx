"use client";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!title || !price || !brand) {
      alert("Mohon isi semua bidang sebelum mengirim!");
      return; // Menghentikan eksekusi lebih lanjut jika ada bidang yang kosong
    }
    try {
      await axios.post("/api/products", {
        title: title,
        price: price,
        brandId: Number(brand),
      });
      setTitle("");
      setPrice("");
      setBrand("");
      router.refresh();
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      // Menangani kesalahan permintaan POST
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputEmail1">Nama</label>
          <input type="text" value={title}
            onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nama" />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputPassword1">Ucapan</label>
          <input type="text" value={price}
            onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Ucapan" />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="selectKehadiran">Konfirmasi Kehadiran</label>
          <select value={brand}
            onChange={(e) => setBrand(e.target.value)} className="form-control" id="selectKehadiran">
            <option value="" disabled>Konfirmasi Kehadiran</option>
            {brands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#4F1E08', borderColor: '#CE9E87' }}>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
