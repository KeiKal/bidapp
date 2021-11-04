import { Injectable } from "@angular/core";

@Injectable()

export class TimerService {

    timeLeft: number = 60;
    interval;

    startTimer() {
        this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
            this.timeLeft--;
        } else {
            this.timeLeft = 60;
        }
        },1000)
    }

    pauseTimer() {
        clearInterval(this.interval);
    }
} 