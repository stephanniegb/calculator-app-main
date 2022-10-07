const INTER_FORMATTER = new Intl.NumberFormat("en-US", {
    maximumFractionDigits:0,
})
export function formatOperand(operand){
    if(operand == null) return
    const [integer, decimal] = operand.toString().split('.')
    if(decimal == null) return INTER_FORMATTER.format(integer)
    return `${INTER_FORMATTER.format(integer)}.${decimal}`
}
