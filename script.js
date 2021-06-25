function compute()
{
    const valueAmount  = document.querySelector(".item-input-calculator input#principal").value,
          range        = document.querySelector("input#rate").value,
          select       = document.querySelector(".item-input-calculator select"),
          valueOption  = select.options[select.selectedIndex].text,
          DateFullYear = new Date().getFullYear() + parseInt(valueOption)

    document.querySelector("p.amount-calculator").innerHTML     = `If you deposit <mark>${valueAmount}</mark>`
    document.querySelector("p.percentage-calculator").innerHTML = `at an interest rate of <mark>${range}%</mark>`
    document.querySelector("p.final-calculator").innerHTML      = `You will receive an amount of <mark>${((valueAmount * range) / 100) * valueOption}</mark>`
    document.querySelector("p.year-calculator").innerHTML       = `in the year <mark>${DateFullYear}</mark>`
    document.querySelector(".result-calculator").style.display  = "block"
}

const range = document.querySelector("input#rate")

range.addEventListener("change", () =>
{
    document.querySelector(".item-input-calculator span").innerHTML = `${range.value}%`
    console.log(range.value)
})

