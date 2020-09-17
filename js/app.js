class Despesa {
    constructor(year, month, day, type, description, value) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.value = value
    }
}

function cadastrarDespesa() {
    const year = document.querySelector("#year")
    const month = document.querySelector("#month")
    const day = document.querySelector("#day")
    const type = document.querySelector("#type")
    const description = document.querySelector("#description")
    const value = document.querySelector("#value")

    let despesa = new Despesa(year.value, month.value,
        day.value, type.value, description.value, value.value)

    console.log(despesa)
}