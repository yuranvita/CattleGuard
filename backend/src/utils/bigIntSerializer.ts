

export const bigIntSerializer = (data : any) => {
  return JSON.stringify(
    data,
  (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
)
}