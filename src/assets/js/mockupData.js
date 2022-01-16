const data = [{
        'id': 1,
        'category': 'guitar',
        'manufacturer': 'Guild',
        'model': 'Jetstar',
        'img': 'https://www.knightonmusiccentre.com/photos/1542983854-jetstar_seafoam_front_PG.jpg'
    },
    {
        'id': 2,
        'category': 'guitar',
        'manufacturer': 'PRS Guitars',
        'model': 'S2 Custom',
        'img': 'https://www.malaga8.com/255750-large_default_2x/prs-s2-custom-24-wb-p-22510.jpg'
    },
    {
        'id': 3,
        'category': 'guitar',
        'manufacturer': 'Jackson',
        'model': 'JS11 Dinky',
        'img': 'https://d1aeri3ty3izns.cloudfront.net/media/45/455718/600/preview_1.jpg'
    },
    {
        'id': 4,
        'category': 'guitar',
        'manufacturer': 'Eastman Guitars',
        'model': 'Thinline T486',
        'img': 'https://auvisa.com/84263-thickbox_default/eastman-t486-cl-archtop-thinline-guitarra-electrica.jpg'
    },
    {
        'id': 5,
        'category': 'guitar',
        'manufacturer': 'Fender',
        'model': 'Telecaster',
        'img': 'https://d1aeri3ty3izns.cloudfront.net/media/62/620086/600/preview.jpg'
    },
    {
        'id': 6,
        'category': 'bass',
        'manufacturer': 'Gibson',
        'model': 'Thunderbird',
        'img': 'https://musicopolix.com/118062-large_default/bat400tbch1.jpg'
    },
    {
        'id': 7,
        'category': 'bass',
        'manufacturer': 'Fleabass',
        'model': 'Model 32',
        'img': 'http://4.bp.blogspot.com/-pflHAIWw0BY/VqvoAXuFwlI/AAAAAAAAAPo/7r1hW0xQGhQ/s1600/4605101_640px.jpg'
    },
    {
        'id': 8,
        'category': 'bass',
        'manufacturer': 'Höfner',
        'model': 'Ignition SB',
        'img': 'https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/437305/13041929_800.jpg'
    },
    {
        'id': 9,
        'category': 'bass',
        'manufacturer': 'Ibanez',
        'model': 'Mikro',
        'img': 'https://d1aeri3ty3izns.cloudfront.net/media/58/585362/600/preview.jpg'
    },
    {
        'id': 10,
        'category': 'bass',
        'manufacturer': 'Kramer Guitars',
        'model': 'D-1',
        'img': 'https://d1aeri3ty3izns.cloudfront.net/media/55/556330/600/preview.jpg'
    },
    {
        'id': 11,
        'category': 'piano',
        'manufacturer': 'Yamaha',
        'model': 'Avantgrand N3',
        'img': 'https://es.yamaha.com/es/files/N3X_540x540_735x735_d5138869643db511e31f48ccc934839b.jpg'
    },
    {
        'id': 12,
        'category': 'piano',
        'manufacturer': 'Korg',
        'model': 'C1 Air',
        'img': 'https://www.klavier.es/3163-large_default/piano-digital-korg-c1-air-bk-negro.jpg'
    },
    {
        'id': 13,
        'category': 'piano',
        'manufacturer': 'Casio',
        'model': 'Celiviano',
        'img': 'https://www.unionmusical.es/media/catalog/product/6/3/637489-piano-digital-casio-celviano-grand-hybrid-ap-7100637489.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        'id': 14,
        'category': 'percussion',
        'manufacturer': 'Fame',
        'model': 'FS20B',
        'img': 'https://images.musicstore.de/images/1280/fame-blaze-studio-set-5201-red_1_DRU0032725-000.jpg'
    },
    {
        'id': 15,
        'category': 'percussion',
        'manufacturer': 'Pearl',
        'model': 'EXX705NBR',
        'img': 'https://cdn2.tamtampercusion.com/6963-thickbox_default/pearl-export-studio-exx705-jet-black.jpg'
    },
    {
        'id': 16,
        'category': 'percussion',
        'manufacturer': 'Mapex Drums',
        'model': 'Mars',
        'img': 'https://cdn1.tamtampercusion.com/24365-thickbox_default/mapex-mars-crossover-ma528sf-bloodwood.jpg'
    },
    {
        'id': 17,
        'category': 'fx',
        'manufacturer': 'Vox',
        'model': 'V845',
        'img': 'https://th.static-thomann.de/thumb/thumb600x600/pics/bdb/236282/7867791_800.jpg'
    },
    {
        'id': 18,
        'category': 'fx',
        'manufacturer': 'Joyo',
        'model': 'JF-01',
        'img': 'https://www.pronorte.es/_files/product/15016/image/joyo-jf-01-vintage-overdrive.jpg'
    },
    {
        'id': 19,
        'category': 'headphones',
        'manufacturer': 'Sennheiser',
        'model': 'HD 559',
        'img': 'https://th.static-thomann.de/thumb/thumb600x600/pics/bdb/458313/13898306_800.jpg'
    },
    {
        'id': 20,
        'category': 'ampli',
        'manufacturer': 'Fender',
        'model': 'Mustand LT25',
        'img': 'https://www.musik-produktiv.es/pic-010111236xl/fender-mustang-lt-25.jpg'
    }
];

export const invokeData = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(data)
    },1500)
})