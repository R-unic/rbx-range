import { Assert, Fact, InlineData, Theory } from "@rbxts/runit";
import { Range } from "../../src";


class RangeTest {
  @Fact
  public clamp(): void {
    const range = new Range(0, 10);
    Assert.equal(5, range.clamp(5));
    Assert.equal(0, range.clamp(-1));
    Assert.equal(10, range.clamp(11));
  }

  @Fact
  public isNumberWithin(): void {
    const range = new Range(0, 10);
    Assert.false(range.isNumberWithin(-1));
    Assert.false(range.isNumberWithin(11));
    Assert.true(range.isNumberWithin(0));
    Assert.true(range.isNumberWithin(5));
    Assert.true(range.isNumberWithin(10));
  }

  @Fact
  public isNumberExclusivelyWithin(): void {
    const range = new Range(0, 10);
    Assert.false(range.isNumberExclusivelyWithin(-1));
    Assert.false(range.isNumberExclusivelyWithin(11));
    Assert.false(range.isNumberExclusivelyWithin(0));
    Assert.false(range.isNumberExclusivelyWithin(10));
    Assert.true(range.isNumberExclusivelyWithin(1));
    Assert.true(range.isNumberExclusivelyWithin(9));
  }

  @Fact
  public center(): void {
    Assert.equal(5, new Range(0, 10).center());
  }

  @Fact
  public size(): void {
    Assert.equal(5, new Range(5, 10).size());
  }

  @Fact
  public toString(): void {
    Assert.equal("5..10", new Range(5, 10).toString());
  }

  @Fact
  public union(): void {
    const result = new Range(1, 3).union(new Range(6, 10));
    Assert.equal(1, result.minimum);
    Assert.equal(10, result.maximum);
  }

  @Fact
  public intersection(): void {
    const result = new Range(0, 10).intersection(new Range(5, 20));
    Assert.notUndefined(result);
    Assert.equal(5, result!.minimum);
    Assert.equal(10, result!.maximum);
  }

  @Theory
  @InlineData(new Range(0, 10), new Range(0, 10), true)
  @InlineData(new Range(0, 10), new Range(3, 7), true)
  @InlineData(new Range(0, 10), new Range(10, 20), true)
  @InlineData(new Range(0, 10), new Range(11, 20), false)
  public isRangeWithin(a: Range, b: Range, within: boolean): void {
    Assert.equal(within, a.isRangeWithin(b));
  }

  @Theory
  @InlineData(new Range(0, 10), new Range(0, 10), true)
  @InlineData(new Range(0, 10), new Range(3, 7), true)
  @InlineData(new Range(0, 10), new Range(10, 20), false)
  @InlineData(new Range(0, 10), new Range(0, 11), false)
  public isRangeExclusivelyWithin(a: Range, b: Range, within: boolean): void {
    Assert.equal(within, a.isRangeExclusivelyWithin(b));
  }
}

export = RangeTest;