const i = [
  {name: 'test', value: 5},
  {name: 'test2', value: 2}
]

const o = i.reduce((acc, v) => {
  const name = v.name
  const val = v.value
  const o = {}
  o[`${name}`] = val
  return {...acc, ...o}
}, {})
console.log(o);