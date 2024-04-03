const reviewsData = [
    {
        id: 1,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 21,
        rating: 4,
        dislikes: 0,
    },
    {
        id: 23,
        title: "Muhteşem Kamera",
        content: "Bu telefonun kamerası gerçekten harika, fotoğraflar çok net çıkıyor!",
        username: "Fotoğrafçı",
        date: "14 Mart 2023",
        likes: 45,
        rating: 5,
        dislikes: 2,
        imageUrls: [ 
                    "https://productimages.hepsiburada.net/s/471/550/110000513083954.jpg/format:webp",
                    "https://productimages.hepsiburada.net/s/76/550/110000018213454.jpg/format:webp", // Gönderdiğiniz URL
                    "https://productimages.hepsiburada.net/s/542/550/110000600747692.jpg/format:webp"
                ]
                  
    },
   
    {
        id: 2,
        title: "Harika Ürün",
        content: "RE   ZA  LET...",
        username: "sabo",
        date: "11 Şubat 2024",
        likes: 125,
        rating: 1, // 1 ila 5 arası bir değer
        dislikes: 5,
    },
    {
        id: 3,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "AhmetK",
        date: "5 Mart 2024",
        likes: 3,
        rating: 4, // 1 ila 5 arası bir değer
        dislikes: 11,
    },
    {
        id: 4,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "Enes bahadır",
        date: "5 Mart 2024",
        likes: 82,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 5,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim,herkese tavsiye ederimherkese tavsiye ederim herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 8,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 6,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 21,
        rating: 5,
    },
   
    {
        id: 7,
        title: "Harika Ürün",
        content: "RE   ZA  LET...",
        username: "sabo",
        date: "11 Şubat 2024",
        likes: 125,
        rating: 1, // 1 ila 5 arası bir değer
        dislikes: 5,
    },
    {
        id: 8,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "AhmetK",
        date: "5 Mart 2024",
        likes: 3,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 11,
    },
    {
        id: 9,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "Enes bahadır",
        date: "5 Mart 2024",
        likes: 82,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 10,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim,herkese tavsiye ederimherkese tavsiye ederim herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 8,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 11,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 21,
        rating: 5,
    },
   
    {
        id: 12,
        title: "Harika Ürün",
        content: "RE   ZA  LET...",
        username: "sabo",
        date: "11 Şubat 2024",
        likes: 125,
        rating: 1, // 1 ila 5 arası bir değer
        dislikes: 5,
    },
    {
        id: 13,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "AhmetK",
        date: "5 Mart 2024",
        likes: 3,
        rating: 2, // 1 ila 5 arası bir değer
        dislikes: 11,
    },
    {
        id: 14,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "Enes bahadır",
        date: "5 Mart 2024",
        likes: 82,
        rating: 3, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 15,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim,herkese tavsiye ederimherkese tavsiye ederim herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 8,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 16,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 21,
        rating: 5,
    },
   
    {
        id: 17,
        title: "Harika Ürün",
        content: "RE   ZA  LET...",
        username: "sabo",
        date: "11 Şubat 2024",
        likes: 125,
        rating: 1, // 1 ila 5 arası bir değer
        dislikes: 5,
    },
    {
        id: 18,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "AhmetK",
        date: "5 Mart 2024",
        likes: 3,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 11,
    },
    {
        id: 19,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim, herkese tavsiye ederim.",
        username: "Enes bahadır",
        date: "5 Mart 2024",
        likes: 82,
        rating: 5, // 1 ila 5 arası bir değer
        dislikes: 1,
    },
    {
        id: 20,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim,herkese tavsiye ederimherkese tavsiye ederim herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 2,
        rating: 2, // 1 ila 5 arası bir değer
        dislikes: 2,
    },
    {
        id: 21,
        title: "Harika Ürün",
        content: "Ürünü çok beğendim,herkese tavsiye ederimherkese tavsiye ederim herkese tavsiye ederim.",
        username: "KullaniciAdi",
        date: "5 Mart 2024",
        likes: 2,
        rating: 2, // 1 ila 5 arası bir değer
        dislikes: 2,
    },
    {
        id: 22,
        title: "Muhteşem Kamera",
        content: "Bu telefonun kamerası gerçekten harika, fotoğraflar çok net çıkıyor!",
        username: "Fotoğrafçı",
        date: "14 Mart 2024",
        likes: 45,
        rating: 5,
        dislikes: 2,
        imageUrls: [ 
                    "https://productimages.hepsiburada.net/s/76/550/110000018213454.jpg/format:webp", // Gönderdiğiniz URL
                    "https://productimages.hepsiburada.net/s/76/550/110000018213454.jpg/format:webp", // Gönderdiğiniz URL
    
                ]
                  
    },

    {
        id: 24,
        title: "Ç-Ö-P",
        content: "kaçak şavmi kullanıyorum 5000 x zoom var 172 gb ram ve 20 tb hafızası var. yemek yapar, ateş yakar, evi temizler.",
        username: "Fotoğrafçı",
        date: "17 Mart 2024",
        likes: 127,
        rating: 1,
        dislikes: 8,
        imageUrls: [ 
                     "https://productimages.hepsiburada.net/s/472/550/110000514324670.jpg/format:webp",
                     "https://cdn.dsmcdn.com/ty1058/product/media/images/prod/SPM/PIM/20231122/20/c2ab6215-b3eb-3e35-b8b0-c6ce4292ffe4/1_org_zoom.jpg"
                    ]
                  
    },
    {
        id: 25,
        title: "yok dayı olmaz bu gereksiz bu parayı verene kadar",
        content: "kumara basar parayı katlarım .",
        username: "Fotoğrafçı",
        date: "12 Ocak 2023",
        likes: 97,
        rating: 1,
        dislikes: 22,
        imageUrls: [ 
                    "https://productimages.hepsiburada.net/s/542/550/110000600747692.jpg/format:webp",
                    "https://cdn.dsmcdn.com/ty732/product/media/images/20230215/16/281514998/111694438/2/2_org_zoom.jpg"
                   ]
                  
    },
    {
        id: 26,
        title: "KUMARA BULAŞMAYIN ",
        content: "kumara bastım hazır arabayı evide kaybettim olmadı bunu alayım baridedim  ",
        username: "Fotoğrafçı",
        date: "11 Ocak 2024",
        likes: 85,
        rating: 4,
        dislikes: 2,
        imageUrls: [ 
            "https://productimages.hepsiburada.net/s/542/550/110000600747692.jpg/format:webp",
            "https://productimages.hepsiburada.net/s/76/550/110000018213454.jpg/format:webp", // Gönderdiğiniz URL
          "https://cdn.dsmcdn.com/ty733/product/media/images/20230215/16/281514998/111694438/1/1_org_zoom.jpg",
        ]
                  
    },
    {
        id: 27,
        title: "aaaa ",
        content: "kumara bastım hazır arabayı evide kaybettim olmadı bunu alayım baridedim  ",
        username: "Fotoğrafçı",
        date: "11 Ocak 2024",
        likes: 85,
        rating: 4,
        dislikes: 2,
        imageUrls: [ 
          "https://cdn.dsmcdn.com/ty740/product/media/images/20230220/15/285095819/59809506/1/1_org_zoom.jpg",
          "https://productimages.hepsiburada.net/s/423/200-200/110000454148956.jpg"
                   ]
                  
    },
];
export default reviewsData;