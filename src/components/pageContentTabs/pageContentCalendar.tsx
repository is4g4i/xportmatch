import { Scheduler } from "@aldabil/react-scheduler";

export type AvailabilityRule = {
    daysOfWeek: number[]; // 0=Sun ... 6=Sat
    startHour: number; // 0-23
    endHour: number;   // 0-23 (inclusive end boundary for display, we'll treat as exclusive in logic)
};

export type CourtAvailability = {
    courtId: string;
    timezone: string; // e.g. "America/Costa_Rica"
    slotMinutes: number; // 60
    rules: AvailabilityRule[];
    // optional future: blackoutDates, specialHours, holidays, etc
};

export const mockCourtAvailability: CourtAvailability = {
    courtId: "court_123",
    timezone: "America/Costa_Rica",
    slotMinutes: 60,
    rules: [
        { daysOfWeek: [1, 2, 3, 4, 5], startHour: 16, endHour: 23 }, // Mon-Fri 4pm-11pm
        { daysOfWeek: [0, 6], startHour: 7, endHour: 23 },          // Sun/Sat 7am-11pm
    ],
};

export const EVENTS: any[] = [
    /* ================= LUNES ================= */
    {
        event_id: 1,
        title: "Reservado",
        subtitle: "Equipo Halcones",
        start: new Date(new Date().setHours(16, 0, 0, 0)),
        end: new Date(new Date().setHours(18, 0, 0, 0)),
        color: "#4caf50",
    },
    {
        event_id: 2,
        title: "Reservado",
        subtitle: "Juan Pérez",
        start: new Date(new Date().setHours(18, 0, 0, 0)),
        end: new Date(new Date().setHours(19, 0, 0, 0)),
        color: "#2196f3",
    },
    {
        event_id: 3,
        title: "Reservado",
        subtitle: "Entrenamiento Libre",
        start: new Date(new Date().setHours(19, 0, 0, 0)),
        end: new Date(new Date().setHours(21, 0, 0, 0)),
        color: "#ff9800",
    },

    /* ================= MARTES ================= */
    {
        event_id: 4,
        title: "Reservado",
        subtitle: "Equipo Fénix",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(16, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(17, 0, 0, 0)
        ),
        color: "#9c27b0",
    },
    {
        event_id: 5,
        title: "Reservado",
        subtitle: "Partido Amistoso",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(17, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(19, 0, 0, 0)
        ),
        color: "#03a9f4",
    },
    {
        event_id: 6,
        title: "Reservado",
        subtitle: "Grupo Amigos",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(20, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 1)).setHours(22, 0, 0, 0)
        ),
        color: "#795548",
    },

    /* ================= MIÉRCOLES ================= */
    {
        event_id: 7,
        title: "Reservado",
        subtitle: "Escuela Deportiva",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(16, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(18, 0, 0, 0)
        ),
        color: "#607d8b",
    },
    {
        event_id: 8,
        title: "Reservado",
        subtitle: "Entrenamiento Técnico",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(18, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(19, 0, 0, 0)
        ),
        color: "#00bcd4",
    },
    {
        event_id: 9,
        title: "Reservado",
        subtitle: "Liga Nocturna",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(19, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 2)).setHours(21, 0, 0, 0)
        ),
        color: "#e91e63",
    },

    /* ================= JUEVES ================= */
    {
        event_id: 10,
        title: "Reservado",
        subtitle: "Equipo Juvenil",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(16, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(17, 0, 0, 0)
        ),
        color: "#8bc34a",
    },
    {
        event_id: 11,
        title: "Reservado",
        subtitle: "Partido Rápido",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(17, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(18, 0, 0, 0)
        ),
        color: "#ffc107",
    },
    {
        event_id: 12,
        title: "Reservado",
        subtitle: "Entrenamiento Avanzado",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(19, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 3)).setHours(21, 0, 0, 0)
        ),
        color: "#673ab7",
    },

    /* ================= VIERNES ================= */
    {
        event_id: 13,
        title: "Reservado",
        subtitle: "After Office",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 4)).setHours(16, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 4)).setHours(18, 0, 0, 0)
        ),
        color: "#009688",
    },
    {
        event_id: 14,
        title: "Reservado",
        subtitle: "Liga Empresarial",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 4)).setHours(18, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 4)).setHours(20, 0, 0, 0)
        ),
        color: "#ff5722",
    },

    /* ================= SÁBADO ================= */
    {
        event_id: 15,
        title: "Reservado",
        subtitle: "Academia Infantil",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 5)).setHours(8, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 5)).setHours(10, 0, 0, 0)
        ),
        color: "#3f51b5",
    },
    {
        event_id: 16,
        title: "Reservado",
        subtitle: "Torneo Amateur",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 5)).setHours(10, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 5)).setHours(12, 0, 0, 0)
        ),
        color: "#cddc39",
    },

    /* ================= DOMINGO ================= */
    {
        event_id: 17,
        title: "Reservado",
        subtitle: "Juego Familiar",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 6)).setHours(9, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 6)).setHours(11, 0, 0, 0)
        ),
        color: "#ffb300",
    },
    {
        event_id: 18,
        title: "Reservado",
        subtitle: "Cierre de Semana",
        start: new Date(
            new Date(new Date().setDate(new Date().getDate() + 6)).setHours(17, 0, 0, 0)
        ),
        end: new Date(
            new Date(new Date().setDate(new Date().getDate() + 6)).setHours(19, 0, 0, 0)
        ),
        color: "#9e9e9e",
    },
];


const PageContentCalendar = () => {
    return (
        <Scheduler
            events={EVENTS}
            view="week"
            day={null}
            month={null}
            agenda={false}

            /* 🔒 Visual flags */
            editable={false}
            draggable={false}
            deletable={false}

            /* 🔒 HARD READ-ONLY (compatible con tu versión) */
            onConfirm={async () => Promise.reject()}
            onEventDrop={async () => Promise.reject()}
            onEventClick={async () => { }}
            onCellClick={async () => { }}

            week={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 9,
                endHour: 24,
                step: 60,
            }}
        />
    );
};
export default PageContentCalendar;


// const PageContentCalendar = () => {
//     return (
//         <Scheduler
//             events={EVENTS}
//             view="week"
//             day={null}
//             month={null}
//             agenda={false}
//             week={{
//                 weekDays: [0, 1, 2, 3, 4, 5, 6],
//                 weekStartOn: 1,
//                 startHour: 9,
//                 endHour: 24,
//                 step: 60,
//                 cellRenderer: ({ height, start, onClick, ...props }) => {
//                     // Fake some condition up
//                     const hour = start.getHours();
//                     const disabled = hour === 14;
//                     const restProps = disabled ? {} : props;
//                     return (
//                         <button
//                             style={{
//                                 height: "100%",
//                                 background: disabled ? "#eee" : "transparent",
//                                 cursor: disabled ? "not-allowed" : "pointer",
//                                 border: "none",
//                             }}
//                             onClick={() => {
//                                 if (disabled) {
//                                     return alert("Opss");
//                                 }
//                                 onClick();
//                             }}
//                             // disableRipple={disabled}
//                             // disabled={disabled}
//                             {...restProps}
//                         ></button>
//                     );
//                 }
//             }}
//         />
//     );
// };
