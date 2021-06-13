interface product{
    type: String,
    id: String,
    name: String, 
    detail: String,
    quantity: Number,
    price: Number,
    file: String,
    img: String,
}

export type productsModel = product[];