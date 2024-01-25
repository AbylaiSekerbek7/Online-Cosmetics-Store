var productArray = [
    new Product("assets/img/Parfum_Armani_StrongerWithYou.jpg", "Armani Stronger With You", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 24999, 10.0, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_Chanel_BlueDeChanel.jpg", "Chanel Blue De Chanel", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 14999, 7.5, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_Chanel_Number5.jpg", "Chanel № 5", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 18999, 6.8, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_Gucci_Bloom.jpg", "Chanel Bloom", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 29999, 8.5, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_HugoBoss_Infinite.jpg", "Hugo Boss Infinite", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 21999, 7.9, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_PacoRabanne_1Million.jpg", "Paco Rabanne 1 Million", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 14990, 7.2, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Parfum_Versace_Eros.jpg", "Versace Eros", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "perfume", 22090, 9.0, "lorem lorem lorem", "хороший"),

    new Product("assets/img/Pomade_DeborahMelano_Red.png", "Deborah Melano Red", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "pomade", 5495, 7.5, "lorem lorem lorem", "отличный"),
    new Product("assets/img/Pomade_L'OREAL PARIS_ColorRiche.png", "L'OREAL PARIS Color Riche", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "pomade", 8999, 6.9, "lorem lorem lorem", "отличный"),
    new Product("assets/img/Pomade_MaxFactor_COLOUR ELIXIR.png", "MAX Factor COLOUR ELIXIR", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "pomade", 6799, 8, "lorem lorem lorem", "отличный"),
    new Product("assets/img/Pomade_Shik_SOFT_MATTE_LIPSTICK.png", "SHIK SOFT MATTE LIPSTICK", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "pomade", 7400, 9, "lorem lorem lorem", "отличный"),
    new Product("assets/img/Pomade_TomFord_LipColor.png", "Tom Ford Lip Color", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "pomade", 10090, 10, "lorem lorem lorem", "отличный"),

    new Product("assets/img/Shampoo_DAVIN_ES OI ABSOLUTE.png", "Davin ES OI ABSOLUTE", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 31000, 10, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Shampoo_GREYY_PLUMPING.png", "GREYY PLUMPING", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 18999, 8.2, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Shampoo_Kyoka_PURIFYING_REFRESHING.png", "KYOKA PURIFYING REFRESHING", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 14000, 7.6, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Shampoo_LADOR_MOISTURE BALANCING.png", "LADOR MOISTURE BALANCING", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 17000, 6.4, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Shampoo_ORGANICALS_SHAMPOO VITAMINS.png", "ORGANICALS SHAMPOO VITAMINS", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 21999, 7.4, "lorem lorem lorem", "хороший"),
    new Product("assets/img/Shampoo_SYSTEM 4_4 OIL.png", "SYSTEM 4 4 OIL", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laudantium nobis nostrum eveniet similique velit quam repud", "shampoo", 10000, 4.9, "lorem lorem lorem", "хороший"),
];

var productsList = (localStorage.getItem("Products") === null) ? productArray : localStorage.getItem("Products");
