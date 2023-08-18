document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('statusChart').getContext('2d');
    var statusChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['ด้านกายภาพ', 'ความเร็วy', 'ภูมิคุ่้มกันต่าง', 'ความฉลาด', 'ความแม่นยำ', 'โชคดี'],
            datasets: [{
                label: 'ค่าสเตตัส',
                data: [95, 73, 80, 40, 68, 50], // ข้อมูลความสามารถ
                backgroundColor: 'rgba(231, 76, 60, 0.5)', // สีพื้นหลังกราฟ
                borderColor: 'rgba(231, 76, 60, 1)', // สีเส้นกราฟ
                pointBackgroundColor: 'rgba(231, 76, 60, 1)', // สีจุดกราฟ
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100 // กำหนดค่าสูงสุดบนแกน
                }
            }
        }
    });
});
