export const formatCurrency = (amount) => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}