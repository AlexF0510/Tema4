document.querySelector(".verify1").addEventListener("click", function() {
  const loanAmount = document.querySelector(".inputLoanAmount").value;
  const loanTerm = (document.querySelector(".inputLoanTerm").value);
  const interestRate = (document.querySelector(".inputInterestRate").value);
  if ((loanAmount == '') || (loanTerm == '') || (interestRate == '')) {
    document.querySelector('.result1').innerHTML = `Please enter all the data.`
  }
  //parseInt = transform a string into a number
  else {
    let nrSumei = Number(loanAmount);
    let nrLuni = Number(loanTerm);
    let procentDobanda = Number(interestRate);
    sumatLunaraDobanda = (nrSumei * procentDobanda) / 100;
    let sumaTotalaDobanda = sumatLunaraDobanda + nrLuni ;
    let sumaLunaraDobanda = sumaTotalaDobanda  / nrLuni;
    let sumaTotalaCredit = sumaTotalaDobanda + nrSumei;
    document.querySelector('.result1').innerHTML = `Suma totala a dobanzii este <b>${sumaTotalaDobanda}</b> iar suma lunara a dobanzii este <b>${sumaLunaraDobanda}</b>. 
    <br> Suma depozitata dupa periada depozitarii este <b>${sumaTotalaCredit}</b>.`;
  }
});