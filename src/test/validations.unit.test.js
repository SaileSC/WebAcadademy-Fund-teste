const validations = require("../utils/validations");

//Testes funcao que pega primeiro nome
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

  test("Usuario passa o nome com espacos demasiados entre os nomes", () => {
    const nome = "Juvenal   Silva   de     Linhais";
    expect(firstName(nome)).toEqual("Juvenal");
  });

  test("Usuario passa o nome com espacos no fim", () => {
    const nome = "Juvenal Silva de Linhais           ";
    expect(firstName(nome)).toEqual("Juvenal");
  });
});

//Testes funcao para avaliar quantidade de itens do stock
describe("valida se há quantidade do item no stock => verifyStockAvailability(productType, qty)", () => {
  const verifyStockAvailability = validations.verifyStockAvailability;
  // Dados na funcao
  // const stock = {
  //   laptop: 10,
  //   smartphone: 20,
  //   headphone: 5,
  //   tablet: 15,
  //   book: 0,
  // };
  describe("validacoes para objeto existente (para este caso usaremos o", () => {
    describe("validacoes para item laptop", () => {
      test("quando o valor é o que tem no stock", () => {
        expect(verifyStockAvailability("laptop", 10)).toEqual(true);
      });
      test("quando o valor é o maior do que há no stock", () => {
        expect(verifyStockAvailability("laptop", 15)).toEqual(false);
      });
      test("quando o valor é o menor do que há no stock", () => {
        expect(verifyStockAvailability("laptop", 5)).toEqual(true);
      });
    });

    describe("validacoes para item headphone", () => {
      test("quando o valor é o que tem no stock", () => {
        expect(verifyStockAvailability("headphone", 5)).toEqual(true);
      });
      test("quando o valor é o maior do que há no stock", () => {
        expect(verifyStockAvailability("headphone", 10)).toEqual(false);
      });
      test("quando o valor é o menor do que há no stock", () => {
        expect(verifyStockAvailability("headphone", 3)).toEqual(true);
      });
    });
  });

  describe("validacao para quanto item nao exitir no stock", () => {
    test("quando o item não existe no stock", () => {
      expect(verifyStockAvailability("ficticio", 5)).toEqual(false);
      expect(verifyStockAvailability("ficticio", 5)).toEqual(false);
      expect(verifyStockAvailability("ficticio", 0)).toEqual(false);
    });
  });
});

//Testes funcao para avaliar o valor toral de uma lista de produtos
describe("calcula o preco total dos produtos de uma lista => calculateTotalPrice(products)", () => {
  const calculateTotalPrice = validations.calculateTotalPrice;

  test("o valor do carrinho com 4 intens", () => {
    const listaProdutos = [
      { name: "Molho de Tomate", price: 5, quantity: 3 },
      { name: "Maizena", price: 10, quantity: 2 },
      { name: "Feijao", price: 15, quantity: 2 },
      { name: "Banana kg", price: 5, quantity: 2 },
    ];
    expect(calculateTotalPrice(listaProdutos)).toBe(75);
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
