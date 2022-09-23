'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('produtos', [{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_737187-MLA50580341363_072022-O.webp',
      descricao: "Um notebook muito bom",
      categoria_id:1,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://images.kabum.com.br/produtos/fotos/308366/notebook-acer-aspire-5-intel-core-i5-10210u-geforce-mx-250-8gb-ram-512gb-ssd-nvme-15-6-ips-fhd-windows-11-home-prata-a515-54g-52fy_1643915921_gg.jpg',
      descricao: "Um notebook muito bom",
      categoria_id:1,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://images.kabum.com.br/produtos/fotos/308366/notebook-acer-aspire-5-intel-core-i5-10210u-geforce-mx-250-8gb-ram-512gb-ssd-nvme-15-6-ips-fhd-windows-11-home-prata-a515-54g-52fy_1643915924_gg.jpg',
      descricao: "Um notebook muito bom",
      categoria_id:1,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://images.kabum.com.br/produtos/fotos/308366/notebook-acer-aspire-5-intel-core-i5-10210u-geforce-mx-250-8gb-ram-512gb-ssd-nvme-15-6-ips-fhd-windows-11-home-prata-a515-54g-52fy_1643915925_gg.jpg',
      descricao: "Um notebook muito bom",
      categoria_id:1,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_737187-MLA50580341363_072022-O.webp',
      descricao: "Um notebook muito bom",
      categoria_id:2,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_737187-MLA50580341363_072022-O.webp',
      descricao: "Um notebook muito bom",
      categoria_id:2,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_737187-MLA50580341363_072022-O.webp',
      descricao: "Um notebook muito bom",
      categoria_id:2,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Notebook Acer",
      preco: 1000,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_737187-MLA50580341363_072022-O.webp',
      descricao: "Um notebook muito bom",
      categoria_id:2,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Iphone 11",
      preco: 3229,
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L.__AC_SY445_SX342_QL70_ML2_.jpg',
      descricao: "Um celular muito bom",
      categoria_id:3,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Iphone 11",
      preco: 3229,
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L.__AC_SY445_SX342_QL70_ML2_.jpg',
      descricao: "Um celular muito bom",
      categoria_id:3,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Iphone 11",
      preco: 3229,
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L.__AC_SY445_SX342_QL70_ML2_.jpg',
      descricao: "Um celular muito bom",
      categoria_id:3,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      nome: "Iphone 11",
      preco: 3229,
      imagem: 'https://images-na.ssl-images-amazon.com/images/I/71kZfQA-Y7L.__AC_SY445_SX342_QL70_ML2_.jpg',
      descricao: "Um celular muito bom",
      categoria_id:3,
      quantidade:2,
      usuarioId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('produtos', null, {});

  }
};
