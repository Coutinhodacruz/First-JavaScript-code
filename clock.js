class Clock{

    constructor(hour, minute, second) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
    }
    get hour() {
        return this._hour;
    }

    set hour(hour) {
        if(hour > 23){
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
        }else {
            this.hour = hour;
        }

    }

    get minute() {
        return this._minute;
    }

    set minute(minute) {
        if(minute > 59){
            this.minute = 0;
            this.second = 0;
            this.hour = 0;
        }else {
            this.minute = minute;
        }

    }

    get second() {
        return this._second;
    }

    set second(second) {
        if (second > 59){
            this.second = 0;
            this.hour = 0;
            this.minute = 0;
        }else {
            this.second = second;
        }
    }

    displayTime(){
        return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}:${String(this.second).padStart(2, '0')}`;
    }



}