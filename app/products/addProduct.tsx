"use client";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { TailSpin } from 'react-loader-spinner';

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!title || !price || !brand) {
      alert("Mohon isi semua bidang sebelum mengirim!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/products", {
        title: title,
        price: price,
        brandId: Number(brand),
      });
      setTitle("");
      setPrice("");
      setBrand("");
      alert("Data berhasil dikirim!");
      router.refresh();
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-animation">
            <TailSpin height="50" width="50" color="#4F1E08" ariaLabel="loading" />
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputEmail1">Nama</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nama"
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputPassword1">Ucapan</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ucapan"
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="selectKehadiran">Konfirmasi Kehadiran</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="form-control"
            id="selectKehadiran"
          >
            <option value="" disabled>
              Konfirmasi Kehadiran
            </option>
            {brands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: '#4F1E08', borderColor: '#CE9E87' }}
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Submit"}
        </button>
      </form>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .loading-animation {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default AddProduct;
