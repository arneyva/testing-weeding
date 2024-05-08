"use client";

import React, { useState, useEffect } from 'react';
import styles from './Gaya.module.css';

const Countdown = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date('Jun 24, 2024 08:00:00').getTime();

        const updateCountdown = () => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the countdown state
            setCountdown({ days, hours, minutes, seconds });
        };

        // Update the countdown immediately
        updateCountdown();

        const interval = setInterval(() => {
            updateCountdown();

            // If the count down is over, clear the interval
            if (countDownDate - new Date().getTime() < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className={styles['time-section']}>
                <div className={styles.value} id="days">
                    {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
                </div>
                <div className={styles["time-label"]}>Days</div>
            </div>
            <div className={styles['time-section']}>
                <div className={styles.value} id="hours">
                    {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
                </div>
                <div className={styles["time-label"]}>Hours</div>
            </div>
            <div className={styles['time-section']}>
                <div className={styles.value} id="minutes">
                    {countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}
                </div>
                <div className={styles["time-label"]}>Minutes</div>
            </div>
        </div>
    );
};

export default Countdown;