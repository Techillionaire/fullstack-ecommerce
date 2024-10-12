export const getGreeting = () => {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour < 12) {
        return "Good morning, Lee!";
    } else if (currentHour < 18) {
        return "Good afternoon, Lee!";
    } else {
        return "Good evening, Lee!";
    }
};
