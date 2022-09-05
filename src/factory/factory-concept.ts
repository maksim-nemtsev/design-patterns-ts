interface IProduct {
  name: string | undefined;
}

enum ProductName {
  PRODUCT_A = "Concrete_Product_A",
  PRODUCT_B = "Concrete_Product_B",
  PRODUCT_C = "Concrete_Product_C",
}

class ConcreteProduct implements IProduct {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = ProductName.PRODUCT_A;
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = ProductName.PRODUCT_B;
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = ProductName.PRODUCT_C;
  }
}

class Creator {
  static createObject(name: string): IProduct {
    if (name === ProductName.PRODUCT_A) {
      return new ConcreteProductA();
    } else if (name === ProductName.PRODUCT_B) {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

const PRODUCT = Creator.createObject(ProductName.PRODUCT_A);
console.log("PRODUCT.name: ", PRODUCT.name);
