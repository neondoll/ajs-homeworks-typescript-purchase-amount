import Buyable from '../../interfaces/Buyable';
import Cart from '../Cart';

const testBuyable1: Buyable = { id: 1, name: 'Test 1', price: 300 };
const testBuyable2: Buyable = { id: 2, name: 'Test 2', price: 500 };
const testBuyable3: Buyable = { id: 3, name: 'Test 3', price: 25.5 };

test('Testing the creation of a Cart class object', (): void => {
  const result: Cart = new Cart();

  expect(result).toBeInstanceOf(Cart);
  expect(result).toEqual({ pvtItems: [] });
});

test('Testing adding items to a Cart class object and getting them', (): void => {
  const cart: Cart = new Cart();

  cart.add(testBuyable1);

  const result: Buyable[] = cart.items;

  expect(result).toEqual([testBuyable1]);
});

test('Testing the calculation of the total cost of objects of the Cart class', (): void => {
  const cart: Cart = new Cart();

  cart.add(testBuyable1);
  cart.add(testBuyable2);
  cart.add(testBuyable3);

  const result: number = cart.calculationTotalCost();

  expect(result).toBeCloseTo(825.5);
});

test('Testing the calculation of the total cost taking into account the discount of objects of the Cart class', (): void => {
  const cart: Cart = new Cart();

  cart.add(testBuyable1);
  cart.add(testBuyable2);
  cart.add(testBuyable3);

  const result: number = cart.calculationTotalCostWithDiscount(50);

  expect(result).toBeCloseTo(412.75);
});

test('Testing the removal of a Cart class object', (): void => {
  const cart: Cart = new Cart();

  cart.add(testBuyable1);
  cart.add(testBuyable2);
  cart.add(testBuyable3);

  expect(cart.items).toEqual([testBuyable1, testBuyable2, testBuyable3]);
  expect(cart.delete(testBuyable2.id)).toBeTruthy();
  expect(cart.items).toEqual([testBuyable1, testBuyable3]);
  expect(cart.delete(testBuyable2.id)).toBeFalsy();
});
