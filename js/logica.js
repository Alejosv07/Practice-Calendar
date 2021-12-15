const calendario__month = document.getElementById("calendario__month");
const calendario = document.getElementById("calendario");
const btnPreview = document.getElementById("btnPreview");
const btnNext = document.getElementById("btnNext");
const darkMode = document.getElementById("darkMode");



let month = new Date().getMonth();
let year = new Date().getFullYear();
let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SaturDay", "Sunday"];
let modeDark = false;

//constructor init
const init = () => {
    calendario__month.innerText = months[month - 1] + " " + year;
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

    let event;
    let options = { weekday: 'long' };

    for (let index = 1; index < quantityDay; index++) {
        event = new Date(Date.parse(year + "-" + month + "-" + index));
        template.innerHTML += `
        <div class="calendario__celda">
        <!-- day -->
        <h3 class="calendario__celda__day">${index}</h3>
        <h4 class="calendario__celda__week__day">${event.toLocaleDateString('en-US', options)}</h4>
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
        console.log("Dia " + index);
        console.log("mes " + month);
        console.log("ano " + year);
        console.log(event);
    }
    calendario.innerHTML = template.innerHTML;
}

const modeDarkF = () => {
    if (modeDark) {
        document.documentElement.style.setProperty("--color--p", "black");
        document.documentElement.style.setProperty("--color--s", "white");
        modeDark = false;
    } else {
        document.documentElement.style.setProperty("--color--p", "white");
        document.documentElement.style.setProperty("--color--s", "black");
        modeDark = true;
    }
}

init();