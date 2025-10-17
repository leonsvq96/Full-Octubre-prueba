function staircase(n) {
  let item = "*";

  for (let i = 1; i <= n; i++) {
    console.log(item.repeat(i).padStart(n))
  }
}

staircase(5);