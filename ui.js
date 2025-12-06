export class UI {
  constructor(manager) {
    this.manager = manager;
    this.tableBody = document.querySelector("#financeTable tbody");
  }

  render() {
    this.tableBody.innerHTML = "";
    this.manager.transactions.forEach(t => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${t.type}</td>
        <td>${t.category}</td>
        <td>Rp ${t.amount.toLocaleString()}</td>
        <td>${t.description}</td>
      `;
      this.tableBody.appendChild(row);
    });

    document.getElementById("totalIncome").textContent =
      this.manager.getTotal("income").toLocaleString();
    document.getElementById("totalOutcome").textContent =
      this.manager.getTotal("outcome").toLocaleString();
    document.getElementById("balance").textContent =
      this.manager.getBalance().toLocaleString();
  }
}