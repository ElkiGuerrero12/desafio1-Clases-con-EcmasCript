class ProductManager{
    products

    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbail, code, stock){
        if(title && description && price && thumbail && code && stock && this.validarCode(code)){
            let producto = {
                id: this.getNewId(),
                title,
                description,
                price,
                thumbail,
                code,
                stock
            }
            this.products.push(producto)
            console.log("producto agregado con éxito")
        } else{
            console.log("Validar campos")
        }
    }

    getProducts(){
        console.log(this.products)
    }
    getProductById(id){
        let producto = this.products.find(producto => producto.id == id)
        if(producto){
            console.log(producto)
        } else{ 
            console.log("producto no existe")
        }
    }

    getNewId(){
        return this.products.length + 1
    }
    validarCode(code){
        let resultado = true;
        let codeResult = this.products.find(elem => elem.code == code)
        if(codeResult){
            resultado = false
            console.log("código repetido")
        }
        return resultado;
    }
}

let productManager = new ProductManager()
productManager.addProduct("Maca", "Energizante", 69.90, "image", 5050, 20 )
productManager.addProduct("Algas", "Suplemento", 49.90, "image", 6050, 10 )

//productManager.getProducts()
//productManager.getProductById(3)