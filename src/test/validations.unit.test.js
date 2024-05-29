const validations = require("../utils/validations");

describe("Pegar primeiro nome => firstname(fullName)", () => {
  const firstName = validations.firstName;
  test("Usuario passa apenas o primeiro nome", () => {
    const nome = "Juvenal";
    expect(firstName(nome)).toEqual(nome);
  });

  test("Usuario passa o nome completo", () => {
    const nome = "Juvenal Silva de Linhais";
    expect(firstName(nome)).toEqual("Juvenal");
  });
  test("Usuario passa o primeiro e o segundo nome", () => {
    const nome = "Juvenal Silva";
    expect(firstName(nome)).toEqual("Juvenal");
  });
  test("Usuario passa o nome com espacos no inicio", () => {
    const nome = "           Juvenal Silva de Linhais";
    expect(firstName(nome)).toEqual("Juvenal");
  });
  test("Usuario passa o nome com espacos no fim", () => {
    const nome = "Juvenal Silva de Linhais           ";
    expect(firstName(nome)).toEqual("Juvenal");
  });
});

describe("verifica se há itens disponiveis no estoque => verifyStockAvailability(productType, qty)", () => {
  const verifyStockAvailability = validations.verifyStockAvailability;
  test("verifica quantidade de notebocks", () => {
    expect(verifyStockAvailability("notebook", 10)).toBe(true);
  });
  test("verifica quantidade de smartphone", () => {
    expect(verifyStockAvailability("smartphone", 20)).toBe(true);
  });
  test("verifica quantidade de headphone", () => {
    expect(verifyStockAvailability("headphone", 4)).toBe(true);
  });
  test("verifica quantidade de tablet", () => {
    expect(verifyStockAvailability("tablet", 15)).toBe(true);
  });
  test("verifica quantidade de book", () => {
    expect(verifyStockAvailability("book", 0)).toBe(true);
  });
});

describe("calcula o preco total dos produtos de uma lista => calculateTotalPrice(products)", () => {
  const calculateTotalPrice = validations.calculateTotalPrice;

  test("o valor do carrinho com 4 intens", () => {
    const listaProdutos = [
      { name: "Molho de Tomate", price: 5, quantity: 3 },
      { name: "Maizena", price: 10, quantity: 2 },
      { name: "Feijao", price: 15, quantity: 2 },
      { name: "Banana kg", price: 5, quantity: 2 },
    ];
    expect(calculateTotalPrice(listaProdutos)).toBe(40);
  });

  test("o valor do carrinho com 2 intens", () => {
    const listaProdutos = [
      { name: "Molho de Tomate", price: 5, quantity: 3 },
      { name: "Banana kg", price: 5, quantity: 2 },
    ];
    expect(calculateTotalPrice(listaProdutos)).toBe(25);
  });

  test("o valor do carrinho com 1 item", () => {
    const listaProdutos = [{ name: "Molho de Tomate", price: 5, quantity: 3 }];

    expect(calculateTotalPrice(listaProdutos)).toBe(15);
  });

  test("o valor do carrinho vazio", () => {
    const listaProdutos = [];

    expect(calculateTotalPrice(listaProdutos)).toBe(0);
  });
});
