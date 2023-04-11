class ClockTest {
    static run() {
        const clock = new Clock(23, 59, 58);
        console.assert(clock.getHour() === 23);
        console.assert(clock.getMinute() === 59);
        console.assert(clock.getSecond() === 58);
        console.assert(clock.displayTime() === '23:59:58');



        clock.setHour(24);
        console.assert(clock.getHour() === 0);
        console.assert(clock.getMinute() === 0);
        console.assert(clock.getSecond() === 0);
        console.assert(clock.displayTime() === '00:00:00');

        clock.setMinute(60);
        console.assert(clock.getHour() === 0);
        console.assert(clock.getMinute() === 0);
        console.assert(clock.getSecond() === 0);
        console.assert(clock.displayTime() === '00:00:00');

        clock.setSecond(61);
        console.assert(clock.getHour() === 0);
        console.assert(clock.getMinute() === 0);
        console.assert(clock.getSecond() === 0);
        console.assert(clock.displayTime() === '00:00:00');

        clock.setHour(12);
        clock.setMinute(34);
        clock.setSecond(56);
        console.assert(clock.getHour() === 12);
        console.assert(clock.getMinute() === 34);
        console.assert(clock.getSecond() === 56);
        console.assert(clock.displayTime() === '12:34:56');

    }
}
ClockTest.run()
