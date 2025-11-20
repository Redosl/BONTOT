// Jalankan saat DOM fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Cek jika halaman adalah testimoni.html (dengan memeriksa elemen form)
    const testimonialForm = document.getElementById('testimonial-form');
    const testimonialList = document.getElementById('testimonial-list');
    
    if (testimonialForm && testimonialList) {
        // Event listener untuk form submit
        testimonialForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah reload halaman
            
            // Ambil nilai dari form
            const name = document.getElementById('name').value.trim();
            const comment = document.getElementById('comment').value.trim();
            
            if (name && comment) {
                // Kirim data ke Google Sheets via POST
                fetch('https://script.google.com/macros/s/AKfycbz4hwzETx7YOcLpoquraY9TI0k6jCoDvawQOVqcCbFWraiRWOVhLYwmxOxE3NXqBonF7w/exec', {  // GANTI DENGAN URL WEB APP KAMU (dari Langkah 1)
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        comment: comment
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        alert('Terima kasih! Testimoni Anda telah dikirim dan disimpan.');
                        testimonialForm.reset(); // Reset form
                    } else {
                        alert('Gagal mengirim: ' + data.message);
                    }
                })
                .catch(error => {
                    alert('Error: ' + error.message);
                });
            } else {
                alert('Harap isi nama dan komentar.');
            }
        });
    }
});


