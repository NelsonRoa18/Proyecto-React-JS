import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
const firebaseConfig = {

  apiKey: "AIzaSyAheJNdGN11LKp1PCNLDXhQkWsBDkgL-m4",

  authDomain: "react-2024-nelson-roa.firebaseapp.com",

  projectId: "react-2024-nelson-roa",

  storageBucket: "react-2024-nelson-roa.appspot.com",

  messagingSenderId: "745307529818",

  appId: "1:745307529818:web:a9925200c675c112fc6e63"

};


const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/


const prods = 
  [
    {
        
        "title": "Aceite helix HX6 10w-40",
        "brand": "Shell",
        "price": 22500,
        "stock": 54,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/1.jpg?alt=media&token=9914899c-6ddc-4d9e-be7d-ba46b018f915",
        "category":"aceites"
    },
    {
        
        "title": "Aceite helix HX8 5w-40",
        "brand": "Shell",
        "price": 85000,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/2.jpg?alt=media&token=e14f848b-cb7f-49c8-b2f7-d7a793f5ba89",
        "category":"aceites"
    },
    {
        
        "title": "Aceite helix HX3 15w-60",
        "brand": "Shell",
        "price": 36874,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/3.jpg?alt=media&token=644f53a7-00af-4d2c-b02c-e3d346ea5159",
        "category":"aceites"
    },
    {
       
        "title": "Aceite helix HX7 10w-40",
        "brand": "Shell",
        "price": 28750,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/4.jpg?alt=media&token=13bd63bd-9697-4e92-a208-c1baec1a7375",
        "category":"aceites"
    },
    {
       
        "title": "Aceite extravida XV300 15w-40",
        "brand": "YPF",
        "price": 65412,
        "stock": 40,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/5.jpg?alt=media&token=b36444ba-4a22-4988-9286-3b6e7df283a0",
        "category":"aceites"
    },
    {
        
        "title": "Aceite elaion auro 5w-30",
        "brand": "YPF",
        "price": 32548,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/6.jpg?alt=media&token=2ec591cf-dde5-4e75-ae58-0997ca28ba80",
        "category":"aceites"
    },
    {
        
        "title": "Aceite elaion F50 E 5w-30",
        "brand": "YPF",
        "price": 74859,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/7.jpg?alt=media&token=7ee6d13c-cd05-4b2f-9b64-ec7063958506",
        "category":"aceites"
    },
    {
       
        "title": "Aceite elaion F40 12w-40",
        "brand": "YPF",
        "price": 21356,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/8.jpg?alt=media&token=5f54f355-6aab-4ac0-8e40-97f334f69749",
        "category":"aceites"
    },
    {
        
        "title": "Aceite elaion F50 J 2w-20",
        "brand": "YPF",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/9.jpg?alt=media&token=fb8a8bfb-752b-4b04-8132-182c76879d39",
        "category":"aceites"
    },
    {
        
        "title": "Aceite elaion F50 J 2w-20",
        "brand": "YPF",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/9.jpg?alt=media&token=fb8a8bfb-752b-4b04-8132-182c76879d39",
        "category":"aceites"
    },
    {
        
        "title": "Filtro de aire conico acero",
        "brand": "Grande auto",
        "price": 6875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/11.jpg?alt=media&token=3dc2ed5c-4a79-42d9-a449-253668e87e59",
        "category":"filtros de aire"
    },
    {
        
        "title": "Filtro de aire C",
        "brand": "Mann Filter",
        "price": 3975,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/12.jpg?alt=media&token=13e9fd5c-f062-498d-b53f-bb77ff0b03b5",
        "category":"filtros de aire"
    },
    {
        
        "title": "Filtro de aire rectangular",
        "brand": "Mann Filter",
        "price": 8175,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/13.jpg?alt=media&token=8ba08fbb-46e9-40c3-8fb1-3d062c884ccd",
        "category":"filtros de aire"
    },
    {
        
        "title": "Filtro de aire rectangular fino",
        "brand": "Bosch",
        "price": 7785,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/14.jpg?alt=media&token=67c6e7a0-948b-4d2b-8c77-06be5ae99827",
        "category":"filtros de aire"
    },
    {
        
        "title": "Filtro de aire conico acero deportivo",
        "brand": "Bosch",
        "price": 15548,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/15.jpg?alt=media&token=6fb83e3d-0bbe-42e3-9431-18ff0f911191",
        "category":"filtros de aire"
    },
    {
        
        "title": "Liquido refrigerante TIR Rosa",
        "brand": "TIR",
        "price": 1525,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/16.jpg?alt=media&token=f44d63d8-564e-4f80-b5b0-9e48dcd8442b",
        "category":"liquidos refrigerantes"
    },
    {
        
        "title": "Liquido refrigerante TOTAL",
        "brand": "TOTAL",
        "price": 3875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/17.jpg?alt=media&token=25ca5ea0-c958-441b-898f-0b593d9268d7",
        "category":"liquidos refrigerantes"
    },
    {
        
        "title": "Liquido refrigerante repsol",
        "brand": "Repsol",
        "price": 6175,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/18.jpg?alt=media&token=8fbe75f8-e9d3-4ccc-beb8-aba5bdd23b34",
        "category":"liquidos refrigerantes"
    },
    {
        
        "title": "Liquido refrigerante gulf",
        "brand": "Gulf",
        "price": 2875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/19.jpg?alt=media&token=3dd477db-81aa-43d2-b88c-061fd796bfd0",
        "category":"liquidos refrigerantes"
    },
    {
        
        "title": "Liquido refrigerante renium",
        "brand": "Renium",
        "price": 93687,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/20.jpg?alt=media&token=fc41bef9-fba2-4a7b-9c2e-7598329a5d04",
        "category":"liquidos refrigerantes"
    },
    {
        
        "title": "Filtro de aceite Naf",
        "brand": "FRAM",
        "price": 7875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/21.jpg?alt=media&token=649e6c31-d73e-4559-82a0-cb16f5f0eda8",
        "category":"filtros de aceite"
    },
    {
        
        "title": "Filtro de aceite Naf",
        "brand": "Bosch",
        "price": 8775,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/22.jpg?alt=media&token=22e7bf32-642a-4605-a57b-eadc6afa1c48",
        "category":"filtros de aceite"
    },
    {
        
        "title": "Filtro de aceite Gasolero",
        "brand": "K&N",
        "price": 9975,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/23.jpg?alt=media&token=3d0838a6-7753-40d3-8bab-c972cfa5f620",
        "category":"filtros de aceite"
    },
    {
        
        "title": "Filtro de aceite Gasolero",
        "brand": "Toyota",
        "price": 3575,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/24.jpg?alt=media&token=01753882-e203-40b0-8651-5da473cb0a07",
        "category":"filtros de aceite"
    },
    {
        
        "title": "Filtro de aceite Gasolero",
        "brand": "Gulf",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/25.jpg?alt=media&token=1d7a3a16-a934-4a45-9d23-012d01e59baa",
        "category":"filtros de aceite"
    },
    {
        
        "title": "Tuercas anitrobo 19",
        "brand": "IAM",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/26.jpg?alt=media&token=061f6d36-59e2-4305-ac9e-b1381131d409",
        "category":"accesorios"
    },
    {
        
        "title": "Escobillas limpiaparabrisas",
        "brand": "Bosch",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/27.jpg?alt=media&token=7ef6ac28-61b7-4ab1-b7d0-03b0fcc54add",
        "category":"accesorios"
    },
    {
        
        "title": "Escobillas limpiaparabrisas",
        "brand": "Brasen",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/28.jpg?alt=media&token=649ae5ad-3899-42b5-b47f-1cfba799d305",
        "category":"accesorios"
    },
    {
        
        "title": "Shampoo",
        "brand": "Silisur",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/29.jpg?alt=media&token=6f702110-96b2-445d-8a2b-52967b0863be",
        "category":"accesorios"
    },
    {
    
        "title": "Autopolish",
        "brand": "Autopolish",
        "price": 36875,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/30.jpg?alt=media&token=2e45197a-6924-475d-8c0d-1db489fa54ab",
        "category":"accesorios"
    }

]
export const createProducts = async () => {
    prods.forEach(async (prod) => {
      await addDoc(collection(bdd, "productos"),{
        title: prod.title,
        brand: prod.brand,
        price: prod.price,
        stock: prod.stock,
        img: prod.img,
        category: prod.category
      })
    });

}


// Consultar productos
export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"))
  const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
  return items
}

//Consultar Producto
export const getProduct = async (id) => {
  const producto = await getDoc(doc(bdd, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
  await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
  await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}