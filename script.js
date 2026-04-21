document.addEventListener('DOMContentLoaded', () => {

    // ১. কাউন্টার এনিমেশন (Numbers increase from 0)
    const stats = {
        students: 450,
        teachers: 28,
        tests: 156,
        trainings: 12,
        courses: 34
    };

    const animateCount = (id, target) => {
        let count = 0;
        let speed = target / 50; 
        let element = document.getElementById(id);
        
        let update = setInterval(() => {
            count += speed;
            if (count >= target) {
                element.innerText = Math.floor(target);
                clearInterval(update);
            } else {
                element.innerText = Math.floor(count);
            }
        }, 30);
    };

    animateCount('count-students', stats.students);
    animateCount('count-teachers', stats.teachers);
    animateCount('count-tests', stats.tests);
    animateCount('count-trainings', stats.trainings);
    animateCount('count-courses', stats.courses);

    // ২. Chart.js দিয়ে গ্রাফ তৈরি
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Student Growth',
                data: [10, 25, 45, 30, 60, 85],
                borderColor: '#4318FF',
                backgroundColor: 'rgba(67, 24, 255, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    // ৩. সার্চ বার ইন্টারঅ্যাকশন
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keyup', (e) => {
        console.log("Searching for: " + e.target.value);
    });

});
