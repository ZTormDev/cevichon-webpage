import React, { useState, useEffect } from "react";
import scheduleData from "../database/schedule.json";
import "../styles/components/Schedule.scss";

const Schedule: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showStatus) {
      timer = setTimeout(() => {
        setShowStatus(false);
      }, 3000); // 3 seconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showStatus]);

  const checkIfOpen = () => {
    const now = new Date();
    const currentDay = now
      .toLocaleDateString("es-ES", { weekday: "long" })
      .toLowerCase();
    const currentTime = now.getHours() * 100 + now.getMinutes();

    // Find the current day's schedule
    const todaySchedule = scheduleData.weekdays.find(
      (day) => day.day.toLowerCase() === currentDay
    );

    if (!todaySchedule) return false;

    // Convert schedule times to comparable numbers (e.g., "12:00 PM" -> 1200)
    const [openTime, closeTime] = todaySchedule.hours
      .split(" - ")
      .map((time) => {
        const [hours, minutes] = time.split(":");
        const isPM = time.includes("PM");
        let hour = parseInt(hours);
        if (isPM && hour !== 12) hour += 12;
        if (!isPM && hour === 12) hour = 0;
        return hour * 100 + parseInt(minutes);
      });

    return currentTime >= openTime && currentTime <= closeTime;
  };

  const handleCheckStatus = () => {
    setIsOpen(checkIfOpen());
    setShowStatus(true);
  };

  return (
    <section className="schedule">
      <h2>Horario de Atención</h2>
      <div className="schedule-container">
        <div className="weekdays">
          {scheduleData.weekdays.map((day, index) => (
            <div key={index} className="schedule-item">
              <span className="day">{day.day}</span>
              <span className="hours">{day.hours}</span>
            </div>
          ))}
        </div>
        <div className="holidays">
          <h3>Feriados</h3>
          <p className="message">{scheduleData.holidays.message}</p>
          <p className="hours">{scheduleData.holidays.hours}</p>
        </div>

        <div className="status-checker">
          <button onClick={handleCheckStatus} className="check-status-btn">
            ¿Estamos Atendiendo?
          </button>
          {showStatus && (
            <div className={`status-message ${isOpen ? "open" : "closed"}`}>
              {isOpen
                ? "¡Estamos Abiertos! 😊"
                : "Lo sentimos, estamos Cerrados 😴"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
