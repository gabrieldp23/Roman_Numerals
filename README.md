# Roman Numerals with JS

The Roman Numerals is a numeric system created by the romans two thousand years ago. Despite be a very old representation of the numbers, that system still is used in the modern days to indicate centurys, book chapters, names of imperators, kings, popes and a lot of other things.

## How does it works? 

In this numeric system the numbers are represented by the letters **I, V, X, L, C, D, M**

1 - The letters I, X, C, M only can be repeated three consecutive times (Example: III = 3)

2 - When two letters are different and lowest number is in front of the highest, it's a **subtraction** (Example: IV = 4)

3 - When two letters are different and highest number is in front of the lowest, it's a **sum** (Example: VI = 6)  

|   I  |  1 |  XI  |  11  |
|:----:|:--:|:----:|:----:|
|  II  |  2 |  XII |  12  |
|  III |  3 | XIII |  13  |
|  IV  |  4 |  XIV |  14  |
|   V  |  5 |  XV  |  15  |
|  VI  |  6 |  ... |  ... |
|  VII |  7 |   L  |  50  |
| VIII |  8 |   C  |  100 |
|  IX  |  9 |   D  |  500 |
|   X  | 10 |   M  | 1000 |


# My JS code

This code is able to convert a integer number onto roman numerals, and vice versa, with the functions `ConvertToRoman(int)` and `ConvertToInteger(string)`

```
ConvertToRoman(2022) //-> "MMXXII"
---
ConvertToInteger("MMXXII") //-> 2022
```

Be free to contribute with my learning doing a PR to show your way to do that conversion. There is a lot to improve, but is a good logic test to start coding with JS.

---
<img width=300 src="./papa.png"/>
