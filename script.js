function compute()
{
    const valueAmount  = document.querySelector(".item-input-calculator input#principal").value,
          range        = document.querySelector("input#rate").value,
          select       = document.querySelector(".item-input-calculator select"),
          valueOption  = select.options[select.selectedIndex].text,
          DateFullYear = new Date().getFullYear() + parseInt(valueOption)

    if(valueAmount > 0)
    {
        document.querySelector("p.amount-calculator").innerHTML     = `If you deposit <mark>${valueAmount}</mark>`
        document.querySelector("p.percentage-calculator").innerHTML = `at an interest rate of <mark>${range}%</mark>`
        document.querySelector("p.final-calculator").innerHTML      = `You will receive an amount of <mark>${((valueAmount * range) / 100) * valueOption}</mark>`
        document.querySelector("p.year-calculator").innerHTML       = `in the year <mark>${DateFullYear}</mark>`
    }
    else if(!valueAmount || valueAmount <= 0)
    {
        document.querySelectorAll(".result-calculator p").forEach(element =>
        {
            element.innerHTML = ""
        })

        document.querySelector("p.amount-calculator").innerHTML = "enter a positive number!"
        document.querySelector(".item-input-calculator input#principal").focus()
    }


    document.querySelector(".result-calculator").style.display  = "block"
}

const range = document.querySelector("input#rate")

range.addEventListener("change", () =>
{
    if(range.value > 0)
        document.querySelector(".item-input-calculator span").innerHTML = `${range.value}%`
    else
        document.querySelector(".item-input-calculator span").innerHTML = `1%`
})

