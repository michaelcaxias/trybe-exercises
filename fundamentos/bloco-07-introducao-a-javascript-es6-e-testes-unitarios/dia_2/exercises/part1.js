const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". */
// Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
  let theDeliveryPerson = order.order.delivery.deliveryPerson;
  let namePerson = order.name;
  let phone = order.phoneNumber;
  let addressPerson = Object.values(order.address);
  return `Òlá ${theDeliveryPerson}, entrega para: ${namePerson} Telefone: ${phone}, R. ${addressPerson[0]}" Nº: ${addressPerson[1]} AP: ${addressPerson[2]}.`

}

console.log(customerInfo(order));

/* 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00." */
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  let namePerson = order.name = 'Luiz Silva';
  let orderPizza = Object.keys(order.order.pizza);
  let drink = order.order.drinks.coke.type
  let discount = 10;
  let paymentTotal = order.payment.total - discount
  return `Olá ${namePerson}, o total do seu pedido de ${orderPizza} e ${drink} é R$ ${paymentTotal},00.`

}

console.log(orderModifier(order));