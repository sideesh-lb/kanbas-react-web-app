
const ImpliedReturn = () => {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
  return (
    <div>
        <h3>Implied Return</h3>
        fourTimesFive = {fourTimesFive}<br />
        multiply(3, 1) = {multiply(3, 1)}<br />
    </div>
  )
}

export default ImpliedReturn