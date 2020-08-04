async function todo () {
  await cooking()
  console.log('吃早饭')
}

function cooking () {
  setTimeout(() => {
    console.log('i spent 2000ms on cooking')
  }, 2000)
}

todo()
 