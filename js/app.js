class Despesa {
    constructor(year, month, day, type, description, value) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.value = value
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        //acessar local storage
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {
    const year = document.querySelector("#year")
    const month = document.querySelector("#month")
    const day = document.querySelector("#day")
    const type = document.querySelector("#type")
    const description = document.querySelector("#description")
    const value = document.querySelector("#value")

    let despesa = new Despesa(year.value, month.value,
        day.value, type.value, description.value, value.value)

    if (despesa.validarDados()) {
        alert("dados válidos")
    } else {
        alert("dados inválidos")
    }
}