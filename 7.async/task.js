class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, func, id) {
    if (isNaN(id)) {
      throw new Error("Введите название будильника");
    } else if (this.alarmCollection.some((element) => element.id == id)) {
      console.error("Название будильника уже существует");
      return;
    }
    this.alarmCollection.push({ id, time, func });
  }
  removeClock(id) {
    let startLenght = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(
      (element) => element.id != id
    );
    let endLenght = this.alarmCollection.length;
    return startLenght != endLenght;
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  start() {
    if (this.timerId != null) {
      return;
    }
    let interval = setInterval(() => {
      this.alarmCollection.forEach((element) => checkClock(element));
    }, 2000);
    this.timerId = interval;
    let checkClock = (element) => {
      if (this.getCurrentFormattedTime() === element.time) {
        return element.callback();
      }
    };
  }
  stop() {
    if (this.timerId == null) {
      return;
    }
    clearInterval(this.timerId);
    this.timerId = null;
  }
  printAlarms() {
    this.alarmCollection.forEach((clock) => console.log(clock.time, clock.id));
    console.log("Колличество будильников:" + this.alarmCollection.length);
  }
  clearAlarms() {
    this.alarmCollection = [];
    this.stop();
  }
}
