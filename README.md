# @rbxts/range

A TypeScript library for working with numerical ranges in Roblox TS.

## Installation

```sh
npm install @rbxts/range
```

## Usage

```typescript
import { Range } from "@rbxts/range";
const range = new Range(0, 10); // 0..10
```

## API

### `clamp(value: number): number`
Clamps a number within the range.
```typescript
const range = new Range(0, 10);
print(range.clamp(5)); // 5
print(range.clamp(-1)); // 0
print(range.clamp(11)); // 10
```

### `isNumberWithin(value: number): boolean`
Checks if a number is within the range (inclusive).
```typescript
print(range.isNumberWithin(5)); // true
print(range.isNumberWithin(-1)); // false
```

### `isNumberExclusivelyWithin(value: number): boolean`
Checks if a number is within the range (exclusive of the min/max values).
```typescript
print(range.isNumberExclusivelyWithin(5)); // true
print(range.isNumberExclusivelyWithin(0)); // false
```

### `center(): number`
Gets the center point of the range.
```typescript
print(new Range(0, 10).center()); // 5
```

### `size(): number`
Gets the size of the range.
```typescript
print(new Range(5, 10).size()); // 5
```

### `toString(): string`
Returns a string representation of the range.
```typescript
print(new Range(5, 10).toString()); // "5..10"
```

### `union(other: Range): Range`
Creates a new range encompassing both ranges.
```typescript
const result = new Range(1, 3).union(new Range(6, 10));
print(result.minimum, result.maximum); // 1, 10
```

### `intersection(other: Range): Range | undefined`
Gets the overlapping range between two ranges.
```typescript
const result = new Range(0, 10).intersection(new Range(5, 20));
if (result !== undefined) {
  print(result.minimum, result.maximum); // 5, 10
}
```

### `isRangeWithin(other: Range): boolean`
Checks if one range is entirely within another.
```typescript
print(new Range(0, 10).isRangeWithin(new Range(3, 7))); // true
```

### `isRangeExclusivelyWithin(other: Range): boolean`
Checks if one range is strictly within another (not touching boundaries).
```typescript
print(new Range(0, 10).isRangeExclusivelyWithin(new Range(3, 7))); // true
```

## Testing
This package uses `@rbxts/runit` for unit testing to ensure the library's functionally.