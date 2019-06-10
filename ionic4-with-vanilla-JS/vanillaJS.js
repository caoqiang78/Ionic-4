const input_reason = document.getElementById("expense-reason");
const input_amount = document.getElementById("expense-amount");
const btn_clear = document.getElementById("btn-clear");
const btn_confirm = document.getElementById("btn-confirm");
const expense_list = document.getElementById("expense-list");
const totoal_expense_element = document.getElementById("total-expense");
const alert_controller = document.querySelector("ion-alert-controller");

let total_expense = 0;

const clear = () => {
    input_reason.value = "";
    input_amount.value = "";
}


btn_confirm.addEventListener("click", () => {
    const entered_reason = input_reason.value;
    const entered_amount = input_amount.value;

    if(entered_reason.trim().length <=0 || entered_amount <=0 || entered_amount.trim().length <= 0) {
        alert_controller.create({
            message: "please input the valide data!",
            header: "Invalidated Data",
            buttons: ["Cancel", "OK"]
        }).then(alertElement => {
            alertElement.present();
        })
        return;
    }

    const new_item = document.createElement("ion-item");
    new_item.textContent = entered_reason + " is $: " + entered_amount;
    expense_list.appendChild(new_item);

    clear();

    total_expense += +entered_amount;

    totoal_expense_element.textContent = total_expense;
}, false);

btn_clear.addEventListener("click", clear, false);