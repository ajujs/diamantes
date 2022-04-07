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

  const deepth = letters.findIndex((l) => l === letter);

  const array = Array.from(new Array(deepth)).fill();

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

generateDiamond("A");
