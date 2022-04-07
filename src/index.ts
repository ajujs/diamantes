/**
 *

 # Diamantes

Dado uma letra ('A' a 'Z'), exiba um diamante iniciando em 'A' e tendo a letra fornecida com o ponto mais distante.

Por exemplo, dado a letra 'E' temos:

```

    A   

   B B

  C   C

 D     D

E       E 

 D     D 

  C   C

   B B

    A

```

Dado a letra 'C' temos:

```

  A

 B B

C   C

 B B

  A  

```

Traduzido de: http://www.cyber-dojo.com/
 */

function generateEmptyLine (size: number) {
  return Array.from({ length: size }, (_, i) => " ");
}

function indexToLetter (index: number) {
  return String.fromCharCode("A".charCodeAt(0) + index);
}

function letterToIndex (letter: string) {
  return letter.charCodeAt(0) - "A".charCodeAt(0) + 1;
}

function calcMiddle (num: number) { 
  return Math.round(num / 2) + (num % 2);
}

export const generateDiamond = (letter: string) => {
  const depth: number = letterToIndex(letter);
  const middle: number = calcMiddle(depth);
  const lineSize: number = depth * 2 - 1;

  let letterIndexPivot: number = 0;
  let diamondResult: string = "";

  for (var i = 0; i < lineSize; i++) {
    const diamondLine: Array<string> = generateEmptyLine(lineSize);
    const isBeforeMiddle: boolean = i < depth;

    letterIndexPivot = isBeforeMiddle ? i : letterIndexPivot - 1;
    const currentLetter: string = indexToLetter(letterIndexPivot);

    diamondLine[middle + letterIndexPivot] = currentLetter;
    diamondLine[middle - letterIndexPivot] = currentLetter;

    diamondResult += "\n";
    diamondResult += diamondLine.join("").trimRight();
    diamondResult += "\n";
  }

  return diamondResult;
};
