function calculateTotalReturn() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const additionalCosts = parseFloat(document.getElementById('additionalCosts').value);
    const rentalIncome = parseFloat(document.getElementById('rentalIncome').value);
    const rentalYears = parseFloat(document.getElementById('rentalYears').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);

    if (!investmentAmount || !additionalCosts || !rentalIncome || !rentalYears || !salePrice) {
        alert("Please fill out all fields!");
        return;
    }

    // Calculate total investment
    const totalInvestment = investmentAmount + additionalCosts;

    // Calculate total rental income
    const totalRentalIncome = rentalIncome * rentalYears;

    // Calculate sales profit
    const salesProfit = salePrice - totalInvestment;

    // Calculate total profit
    const totalProfit = totalRentalIncome + salesProfit;

    // Calculate total return percentage
    const totalReturnPercentage = (totalProfit / totalInvestment) * 100;

    // Display results
    document.getElementById('results').innerHTML = `
        <p>Total Investment: $${totalInvestment.toLocaleString()}</p>
        <p>Total Rental Income: $${totalRentalIncome.toLocaleString()}</p>
        <p>Sales Profit: $${salesProfit.toLocaleString()}</p>
        <p>Total Profit: $${totalProfit.toLocaleString()}</p>
        <p>Total Return: ${totalReturnPercentage.toFixed(2)}%</p>
    `;
}
