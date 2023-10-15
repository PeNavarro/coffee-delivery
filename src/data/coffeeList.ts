import { v4 as uuidv4 } from 'uuid'

export const coffeeListData = [
    {
        "id": uuidv4(),
        "name": "Expresso Tradicional",
        "description": "O tradicional café feito com água quente e grãos moídos",
        "value": 9.90,
        "category": ["Tradicional"],
        "image": "../assets/expresso-tradicional.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Americano",
        "description": "Expresso diluído, menos intenso que o tradicional",
        "value": 9.90,
        "category": ["Tradicional"],
        "image": "../assets/expresso-americano.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Cremoso",
        "description": "Café expresso tradicional com espuma cremosa",
        "value": 9.90,
        "category": ["Tradicional"],
        "image": "../assets/expresso-cremoso.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Expresso Gelado",
        "description": "Bebida preparada com café expresso e cubos de gelo",
        "value": 9.90,
        "category": ["Tradicional", "gelado"],
        "image": "../assets/expresso-gelado.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Café com Leite",
        "description": "Meio a meio de expresso tradicional com leite vaporizado",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/cafe-com-leite.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Latte",
        "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/latte.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Capuccino",
        "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/capuccino.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Macchiato",
        "description": "Café expresso misturado com um pouco de leite quente e espuma",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/macchiato.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Mocaccino",
        "description": "Café expresso com calda de chocolate, pouco leite e espuma",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/mocaccino.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Chocolate Quente",
        "description": "Bebida feita com chocolate dissolvido no leite quente e café",
        "value": 9.90,
        "category": ["Tradicional", "com leite"],
        "image": "../assets/chocolate-quente.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Cubano",
        "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "value": 9.90,
        "category": ["especial", "alcoólico", "gelado"],
        "image": "../assets/cubano.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Havaiano",
        "description": "Bebida adocicada preparada com café e leite de coco",
        "value": 9.90,
        "category": ["especial"],
        "image": "../assets/havaiano.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Árabe",
        "description": "Bebida preparada com grãos de café árabe e especiarias",
        "value": 9.90,
        "category": ["especial"],
        "image": "../assets/arabe.jpg"
    },
    {
        "id": uuidv4(),
        "name": "Irlandês",
        "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        "value": 9.90,
        "category": ["especial", "alcoólico"],
        "image": "../assets/irlandes.jpg"
    }
]