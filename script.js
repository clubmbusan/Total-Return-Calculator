function calculateInvestmentYield() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const acquisitionTax = parseFloat(document.getElementById('acquisitionTax').value);
    const registrationFee = parseFloat(document.getElementById('registrationFee').value);
    const brokerFee = parseFloat(document.getElementById('brokerFee').value);
    const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);
    const rentalYears = parseFloat(document.getElementById('rentalYears').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);

    if (!purchasePrice || !acquisitionTax || !registrationFee || !brokerFee || !monthlyRent || !rentalYears || !salePrice) {
        alert("모든 값을 입력해주세요!");
        return;
    }

    // Calculate total additional costs
    const totalAdditionalCosts = acquisitionTax + registrationFee + brokerFee;

    // Calculate total investment cost
    const totalInvestmentCost = purchasePrice + totalAdditionalCosts;

    // Calculate rental income
    const totalRentalIncome = monthlyRent * 12 * rentalYears;

    // Calculate sales profit
    const salesProfit = salePrice - totalInvestmentCost;

    // Calculate total profit
    const totalProfit = totalRentalIncome + salesProfit;

    // Calculate yield
    const totalYield = (totalProfit / totalInvestmentCost) * 100;

    // Display results
    document.getElementById('results').innerHTML = `
        <p>총 투자 금액: ${totalInvestmentCost.toLocaleString()} 원</p>
        <p>임대 수익: ${totalRentalIncome.toLocaleString()} 원</p>
        <p>매매 차익: ${salesProfit.toLocaleString()} 원</p>
        <p>총 수익: ${totalProfit.toLocaleString()} 원</p>
        <p>총 수익률: ${totalYield.toFixed(2)}%</p>
    `;
}
