import Buyable from '../interfaces/Buyable';

export default class Cart {
  private pvtItems: Buyable[] = [];

  add(item: Buyable): void {
    this.pvtItems.push(item);
  }

  calculationTotalCost(): number {
    return this.pvtItems.reduce((total: number, item: Buyable): number => total + item.price, 0);
  }

  calculationTotalCostWithDiscount(discount: number): number {
    const percent: number = discount / 100;

    return this.pvtItems.reduce(
      (total: number, item: Buyable): number => total + (item.price * percent),
      0,
    );
  }

  delete(itemId: number): boolean {
    const handler = (item: Buyable): boolean => item.id === itemId;

    const itemIndex: number = this.pvtItems.findIndex(handler);

    if (itemIndex === -1) {
      return false;
    }

    this.pvtItems.splice(itemIndex, 1);

    return this.pvtItems.findIndex(handler) === -1;
  }

  get items(): Buyable[] {
    return [...this.pvtItems];
  }
}
