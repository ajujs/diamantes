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
const { log } = console;

export const generateDiamond = (letter: string) => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  // const deep = letter.charCodeAt(0) - 'A'.charCodeAt(0);

  const deepth = letters.findIndex((l) => l === letter) + 1;

  const genSpaces = (n: number) => {
    let spaces = "";
    for (let index = 0; index < n; index++) {
      spaces += "#";
    }
    return Array.from(new Array(n)).fill("#");
  };

  const array = Array.from(new Array(2 * deepth - 1)).map((_, i) => {
    return genSpaces(deepth + 1);
  });

  log(array);

  const center = Math.floor(deepth / 2) + (deepth % 2);
  for (let j = 0; j < 2 * deepth - 1; j++) {
    for (let i = 0; i < deepth; i++) {
      array[j][center + i] = letters[i];
      array[j][center - i] = letters[i];
      log(array[j].join(""));
    }
  }

  if (letter === "A") {
    return "A";
  }

  if (letter === "B") {
    return `
 A

B B

 A

 `;
  }
};

generateDiamond("C");
