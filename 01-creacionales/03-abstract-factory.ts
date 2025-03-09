/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburguer {
    prepare(): void;

}

interface Drink {
    pour(): void;
}

class ChickenHamburguer implements Hamburguer {
    prepare(): void {
        console.log('Preparing %cChicken Hamburguer', COLORS.yellow);
    }
}

class BeefHamburguer implements Hamburguer {
    prepare(): void {
        console.log('Preparing %cBeef Hamburguer', COLORS.red);
    }
}

class Water implements Drink {
  pour(): void {
    console.log('Pouring %cWater', COLORS.blue);
  }

}

class Soda implements Drink {
    pour(): void {
      console.log('Pouring %cSoda', COLORS.green);
    }
}

interface RestaurantFactory {
    createHamburguer(): Hamburguer;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburguer(): Hamburguer {
    return new BeefHamburguer();
  }
  createDrink(): Drink {
    return new Soda();
  }

}

class HealthyRestaurantFactory implements RestaurantFactory {
  createHamburguer(): Hamburguer {
    return new ChickenHamburguer();
  }
  createDrink(): Drink {
    return new Water();
  }

}

function main( factory: RestaurantFactory ) {
    const hamburguer = factory.createHamburguer();
    const drink = factory.createDrink();

    hamburguer.prepare();
    drink.pour();
}


main(new FastFoodRestaurantFactory());
main(new HealthyRestaurantFactory());