const { clamp, min, max } = math;

type Maybe<T> = T | undefined;
export interface RangeJSON {
  minimum: number;
  maximum: number;
}

export class Range {
  public constructor(
    public readonly minimum: number,
    public readonly maximum: number
  ) { }

  public static fromJSON(data: RangeJSON): Range {
    return new Range(data.minimum, data.maximum);
  }

  public clamp(n: number): number {
    return clamp(n, this.minimum, this.maximum);
  }

  public randomInteger(): number {
    return (new Random).NextInteger(this.minimum, this.maximum);
  }

  public randomNumber(): number {
    return (new Random).NextNumber(this.minimum, this.maximum);
  }

  public isNumberWithin(n: number): boolean {
    return n >= this.minimum && n <= this.maximum;
  }

  public isNumberExclusivelyWithin(n: number): boolean {
    return n > this.minimum && n < this.maximum;
  }

  public isRangeWithin(other: Range): boolean {
    return this.maximum >= other.minimum && this.minimum <= other.maximum;
  }

  public isRangeExclusivelyWithin(other: Range): boolean {
    return this.minimum <= other.minimum && this.maximum >= other.maximum;
  }

  public union(other: Range): Range {
    return new Range(
      min(this.minimum, other.minimum),
      max(this.maximum, other.maximum)
    );
  }

  public intersection(other: Range): Maybe<Range> {
    const minimum = max(this.minimum, other.minimum);
    const maximum = min(this.maximum, other.maximum);
    return minimum <= maximum ? new Range(minimum, maximum) : undefined;
  }

  public center(): number {
    return (this.minimum + this.maximum) / 2;
  }

  public size(): number {
    return this.maximum - this.minimum;
  }

  public toJSON(): RangeJSON {
    return { minimum: this.minimum, maximum: this.maximum };
  }

  public toString(): string {
    return `${this.minimum}..${this.maximum}`;
  }
}