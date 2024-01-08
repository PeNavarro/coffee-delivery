import { v4 as uuidv4 } from 'uuid'

export const coffeeListData = [
    {
        "id": uuidv4(),
        "name": "Expresso Tradicional",
        "description": "O tradicional café feito com água quente e grãos moídos",
        "price": 9.90,
        "categories": ["Tradicional"],
        "image": "/assets/expresso-tradicional.png"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Americano",
        "description": "Expresso diluído, menos intenso que o tradicional",
        "price": 9.90,
        "categories": ["Tradicional"],
        "image": "/assets/expresso-americano.png"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Cremoso",
        "description": "Café expresso tradicional com espuma cremosa",
        "price": 9.90,
        "categories": ["Tradicional"],
        "image": "/assets/expresso-cremoso.png"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Gelado",
        "description": "Bebida preparada com café expresso e cubos de gelo",
        "price": 9.90,
        "categories": ["Tradicional", "gelado"],
        "image": "/assets/expresso-gelado.png"
    },
    {
        "id": uuidv4(),
        "name": "Café com Leite",
        "description": "Meio a meio de expresso tradicional com leite vaporizado",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/cafe-com-leite.png"
    },
    {
        "id": uuidv4(),
        "name": "Latte",
        "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/latte.png"
    },
    {
        "id": uuidv4(),
        "name": "Capuccino",
        "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/capuccino.png"
    },
    {
        "id": uuidv4(),
        "name": "Macchiato",
        "description": "Café expresso misturado com um pouco de leite quente e espuma",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/macchiato.png"
    },
    {
        "id": uuidv4(),
        "name": "Mocaccino",
        "description": "Café expresso com calda de chocolate, pouco leite e espuma",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/mocaccino.png"
    },
    {
        "id": uuidv4(),
        "name": "Chocolate Quente",
        "description": "Bebida feita com chocolate dissolvido no leite quente e café",
        "price": 9.90,
        "categories": ["Tradicional", "com leite"],
        "image": "/assets/chocolate-quente.png"
    },
    {
        "id": uuidv4(),
        "name": "Cubano",
        "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "price": 9.90,
        "categories": ["especial", "alcoólico", "gelado"],
        "image": "/assets/cubano.png"
    },
    {
        "id": uuidv4(),
        "name": "Havaiano",
        "description": "Bebida adocicada preparada com café e leite de coco",
        "price": 9.90,
        "categories": ["especial"],
        "image": "/assets/havaiano.png"
    },
    {
        "id": uuidv4(),
        "name": "Árabe",
        "description": "Bebida preparada com grãos de café árabe e especiarias",
        "price": 9.90,
        "categories": ["especial"],
        "image": "/assets/arabe.png"
    },
    {
        "id": uuidv4(),
        "name": "Irlandês",
        "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        "price": 9.90,
        "categories": ["especial", "alcoólico"],
        "image": "/assets/irlandes.png"
    }
]