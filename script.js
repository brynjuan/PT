document.addEventListener('DOMContentLoaded', () => {
    // --- Halaman Login ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form submit
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('loginError');

            if (username === "" || password === "") {
                errorElement.textContent = "Username dan Password tidak boleh kosong!";
            } else {
                // Simulasi login berhasil
                errorElement.textContent = "";
                alert('Login Berhasil!');
                // Arahkan ke dashboard
                window.location.href = 'dashboard.html';
            }
        });
    }

    // --- Halaman Dashboard ---
    const btnDetail = document.getElementById('btnDetail');
    const detailPengumuman = document.getElementById('detailPengumuman');
    if (btnDetail) {
        btnDetail.addEventListener('click', () => {
            // Toggle tampilan detail
            if (detailPengumuman.style.display === 'block') {
                detailPengumuman.style.display = 'none';
                btnDetail.textContent = 'Lihat Detail';
            } else {
                detailPengumuman.style.display = 'block';
                btnDetail.textContent = 'Sembunyikan';
            }
        });
    }

    // --- Halaman Transkrip ---
    const btnHitungIPK = document.getElementById('btnHitungIPK');
    if (btnHitungIPK) {
        btnHitungIPK.addEventListener('click', () => {
            const bobotNilai = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'E': 0 };
            const barisNilai = document.querySelectorAll('#tabelNilai tbody tr');
            
            let totalSKS = 0;
            let totalMutu = 0;

            barisNilai.forEach(baris => {
                const sks = parseInt(baris.querySelector('.sks').textContent);
                const nilaiHuruf = baris.querySelector('.nilai').textContent.trim();
                const mutu = bobotNilai[nilaiHuruf] * sks;

                totalSKS += sks;
                totalMutu += mutu;
            });

            const ipk = totalSKS > 0 ? (totalMutu / totalSKS).toFixed(2) : 0;
            
            const hasilIPKElement = document.getElementById('hasilIPK');
            hasilIPKElement.textContent = `IPK Anda: ${ipk}`;
        });
    }
});