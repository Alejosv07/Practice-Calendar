const calendario__month = document.getElementById("calendario__month");
const calendario = document.getElementById("calendario");
const btnPreview = document.getElementById("btnPreview");
const btnNext = document.getElementById("btnNext");
const darkMode = document.getElementById("darkMode");



let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let modeDark = true;



//constructor init
const init = () => {
    calendario__month.innerText = months[month - 2] + " " + year;
    btnPreview.addEventListener("click", () => { chageDate(-1) });
    btnNext.addEventListener("click", () => { chageDate(1) });
    darkMode.addEventListener("click", () => {
        modeDarkF();
    });
    chageDate(0);
}

function chageDate(btn) {
    month += btn;
    if (month > 12) {
        month = 1;
        year++;
    } else if (month < 1) {
        month = 12;
        year--;
    }
    calendario__month.innerText = year + " " + months[month - 1];
    let template = document.createElement("template");
    let quantityDay = new Date(year, month, 0).getDate() + 1;


    let today = new Date(new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" + new Date().getFullYear());
    let event;
    let options = { weekday: 'long' };

    let headerDay = "";
    for (let index = 1; index < quantityDay; index++) {
        event = new Date(month + "-" + index + "-" + year);

        //If is today back special color
        if (event.getTime() == today.getTime()) {
            headerDay = `<div class="calendario__celda active-day">`;
        } else {
            headerDay = `<div class="calendario__celda">`;
        }
        template.innerHTML += `
        ${headerDay}
        <!-- day -->
        <h3 class="calendario__celda__day">${event.getDate()}</h3>
        <h4 class="calendario__celda__week__day">${weekDays[event.getDay()]}</h4>
        <!-- end day -->
        <!-- calendario footer -->
        <div class="calendario__celda__footer">
        <span class="material-icons-outlined">
        favorite
        </span>
        <span class="material-icons-outlined">
        description
        </span>
        <span class="material-icons-outlined">
        done
        </span>
        </div>
        <!-- end calendario footer -->
        </div>`;
    }
    calendario.innerHTML = template.innerHTML;
}

const modeDarkF = () => {
    if (modeDark) {
        document.documentElement.style.setProperty("--color-oscuro", "white");
        document.documentElement.style.setProperty("--color-fondo", "black");
        document.documentElement.style.setProperty("--color-claro", "#1F1E24");
        modeDark = false;
    } else {
        document.documentElement.style.setProperty("--color-oscuro", "black");
        document.documentElement.style.setProperty("--color-fondo", "#ededed");
        document.documentElement.style.setProperty("--color-claro", "white");
        modeDark = true;
    }
}

init();