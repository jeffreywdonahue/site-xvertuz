import Image from "next/image";

const GALLERY_PHOTOS = [
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEGNdr6ker7LCDNGxitIwPOUJdg4stN8n3aVb8wSm3_3OEkwOlMhNMpkuwq8e8O89GW-k5Gjcrb4k7v3e7ZMSMnHYFmjg15xWlf2mRYCkWMWbGaurfzmxNxxOjJc3PgjraFaDFcgQV44me_-xawuoWEQea2L5fcfj-lNwprVoolL7jXqie4Q4UpHKQxcAyixcsqD3WssTRfw6Hd9lgLGQ-QqFnta04QazA2UlCXzztSHY1PvgmvEpWrKtUs6pPS1HbYDOFq0Coph101A82Hbi7cE5EcYpGMplkj8GmxakBR54g/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEGOwPLusJMANlBGB1mvfDspGiuIh28XnD5C9cT6USozrxz9RvNs5byvucDlhKYBSyOeP2bEvR82UrUbLMeD0FDeYFpSKKbE4PS3RrR2ANtvVi40ufyn4cPeTrqdOwHg_tDiPBmzvPefLJgQa_YdKswgR8Wj_rCTJNX157T-0rE2mvp1HonrO0Sqk1w4Izc0Kd6-njZDAhvNveLvaplxtQQDR93GBlat6CPmRA40umVGN5SBiQZoyOOJwsAHV2qi4jZEtBvvuWfa2NO_tbHQCX-ID2kJNPK8_8Coz0PwaC3jEQ/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEEjcdXxjAuCOq5vJSwuA4sGPn-vhqjqIG1y9Jkc45MZZgKS5lwI-FGxgf4OTB88pdRRX9VIqQSFtMbcdJXKzMAjfkG9ArOHlS9DkiErc-HGbCRG9OvMK_jOAV4I6dcDXk8kCkBuykV4gCp-0RCLs0AamdDPJNFhCV7HkOVqVEiHjKwMMDEA57LFfHDZFHZ-kerRgrXFrnMgLMcMuqDBk7482hg_hzuRZIbPmEq1pjTBMtfu_SZ_OqDgNyaJg8PouQiZBPFxdRDG025XJosf9SoF1CMFSIm5xwXOxNViyu7RtA/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEG-2qMzMNoyZb2PP2jsQDrdXISa6qOWjpfysd28lPUapaYRaaTEbMjshZXW0J98tGVqVfsCtrH7Dr16HxmhXv6T-x7LPxT0FTFrZ8WFA_3O7ienJi1AGbfglYKyOb7_W6cuJIRX6oKpuO-9d0dCIWYyBFXWazZzQR8fM1cbLb99_JkwAX8Zht8youcJuKmLC5c6J-iiAcC9sCaPIGJGP6xDASM-VMMeb5OQGN5OyAskHgBx8vwmnfohh43UsocK6S-XzW67_mZDOVu7_GFSfhgP6LlVBf9EZ11I1zfbBx7eZg/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEHvjNIPhzeVp91DZNWIqR0b8ocw6l-mv51_LUOu6mO5c4gjhJFaAeDfXGlcWirHPtjXUfEqQ46WMBIE6PhAPv_022dSSDCEh4ar58crgxN1pzH7jFq5kwUY7CeW5GoVe1omASkRs75y2OHwsUB1A2iL5n2fC3-9hUHcS_uLt58I-LKJDg4t0KDIDWPsusELcXx00Ihj2T_sOwKzh3qA1pM7zYXo1K2rNfD37Ox1RL5I6wNcuEv-J5SQVg6SB90k2jZ-APuJim1xCS7mYZ1fRijAUhtV7u0doCi5__ONyqBFew/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJ6bpd3P5PVVMRyU5fbiQbI0A/photos/AU_ZVEGZiseya-ck6621nb1mxsc-7T-aHnb2lQdiNDzMMySSXof1vybmJG1d517Q0LR7qL-GRjJ_CoWqNpxLFXFERTU5UwokFL1adVIBMcS521Moo7m-k6jkzaCFV_LGVooNSgehhTo4aIT1qGdNTLVJokk8cnqhfkWIKnJPouMt8QkXvThCe_X-YvTsgwYhKXL16fEJSryc80K2i08orHW8js7YuBGepCnczUV_8THVV3NhcE5j6HXISHBZFHf3bgOmyGGK_h6IbWz1UtAh1mibnSW6H2C-9CZZOmR5gT7vtFFT7g/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJ4Qihy4xhWocRgfcghrF0uRw/photos/AU_ZVEEqjGoa3aOY6wIgw6f3Pa4ZAmT_X6EQ7d3Ljf9eh09QnnsaDQRdMD64Vrnia4xjjCwUeTXTtp1G5A9SwkDu62IDT0lLz4IQyU-7hpVfrruxFMUIkvWqJDbfyUC4Czv5X2X08l62C0EiM4-rIL7WpM25A89UeK5OD1aMwtu87KqVtLa3cgfip1E2brTr5oBZZcOfbaj7lgEL_i8ieYf_wasoAWu1_bgJ8lC0KMLrtIHp0MzFxsLl-sl9ZBiZhSE_MDS-pqqMA3FwYfahydygfw6JQIIARPg2RTDCUbF9rZqiTIiW8tUKN5qUxWTCEtRBXQib4eigE5qvTZnIhts5RytKjzw6Nt47EHo-DX8pk0z6nd9kQD_zG31wwREH2sRw8s25ezsXFpuQ-y6g0rHbfHXj98AFUFWI1uozRf0StVQ/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJ4Qihy4xhWocRgfcghrF0uRw/photos/AU_ZVEGu5TAzlvU4vTPxvxNlwkYT1XozId-IObpYMKiOnUgaa22it46HlSpyhA8ibqiKAgi1jK9bLgq8i3iAdnVuilIjJ_IJNXr6dqOyE7ubdPy7y1rOVoG5Ov29bYLrAlvyZu0ye4mmtx3KoSjFU0-QpMQ745CJ184aC9P8_tj4jCbilaQW-haiwVLvDkDDWDDkJ6XAYtZPmMw27PH9y-AJESesZuAdD4f-yPSkqndDSjKlwWZHgIvEnPuAM_WmjjWwn82JKnzIyqevq7geSU4hNY96hYFdK-mxC7lhrrPkG0D8tb-uRWldr7z6sDBfhrvXJxEANtT9xAw8ui5Xpj7nk6idx81dO80Gwlk5iC4RVHD-1u3hlR_xGDzDGPmCoGSQ8rRZRf3Z3CtCO9DRRg3Fdkz2_VKhZN_B51BQi7TXnDb52Mi5/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
  "https://places.googleapis.com/v1/places/ChIJfzx78Q-lRYcRCWUL-52Uhcc/photos/AU_ZVEHypA6eujimBDxbZ0dnatYZvN6CLABj0Mqr4Vy25wigk4pDMQXoXcvTdZDFd-Rs_O4_gnAhKBOeFAa5flL6KpLB7K9V-TrdblJUtMJ4UNG0yZ3Pi5eQuj36_Enb2TNRCG97Ql-YHlXCyiJ0IatonZRZVeXdo2YCfCeqSTKCCo3OKrA-dZFw9Ywb0QESXc7fnPGEpfMUXayyZYmTIf3GnUGR7Ap_vkXKMa3B9ST5cSUs6LfGIiig9_l8bMzw3_O01cKhtBkgHF-h5u_wwg4SqgX-xReGNaczrbUvXotj2qUrew/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-[#101B2E]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8A2BE2] text-sm font-semibold tracking-widest uppercase mb-3">
            Inside the Shop
          </p>
          <h2
            className="text-6xl sm:text-7xl text-[#F2F6FF] mb-4"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            See What&apos;s In Store
          </h2>
          <p className="text-[#A9B4C7] text-lg">
            Real photos from our locations across UT, CO, ID & WY.
          </p>
        </div>

        {/* Gallery grid — asymmetric layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-zoom-in ${
                i === 0 || i === 4 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 || i === 4 ? "16/9" : "1/1" }}
            >
              <Image
                src={photo}
                alt={`Xvertuz store photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8A2BE2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
