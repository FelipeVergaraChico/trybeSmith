const mockInput = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 2
}

const mockCreate = {
  id: 2,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 2
}

const mockProductAll = [
  {
		"id": 1,
		"name": "Excalibur",
		"price": "10 peças de ouro",
		"orderId": 1
	},
	{
		"id": 2,
		"name": "Espada Justiceira",
		"price": "20 peças de ouro",
		"orderId": 1
	},
	{
		"id": 3,
		"name": "Lira de Orfeu",
		"price": "1 peça de ouro",
		"orderId": 2
	},
	{
		"id": 4,
		"name": "Armadura de Aquiles",
		"price": "1 peça de ouro",
		"orderId": 2
	},
	{
		"id": 5,
		"name": "Harpa de Dagda",
		"price": "15 peças de ouro",
		"orderId": 3
	}
]

const mockAllOrders = [
  {
    "id": 1,
    "userId": 1,
  },
]

const mockLogin = {
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password:'terrível',
}

export default {
  mockCreate,
  mockInput,
  mockProductAll,
  mockAllOrders,
  mockLogin,
}