document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Form validation
        if (!nama || !email || !phone || !password || !confirmPassword) {
            showError('Semua field harus diisi');
            return;
        }
        
        if (!isValidEmail(email)) {
            showError('Format email tidak valid');
            return;
        }
        
        if (!isValidPhone(phone)) {
            showError('Format nomor handphone tidak valid');
            return;
        }
        
        if (password.length < 8) {
            showError('Kata sandi minimal 8 karakter');
            return;
        }
        
        if (password !== confirmPassword) {
            showError('Konfirmasi kata sandi tidak cocok');
            return;
        }
        
        // If all validations pass, proceed with registration
        const userData = {
            nama,
            email,
            phone,
            password
        };
        
        // Here you would typically make an API call to your backend
        console.log('Registration data:', userData);
        showSuccess('Pendaftaran berhasil!');
    });
    
    // Validation helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[0-9]{10,13}$/;
        return phoneRegex.test(phone);
    }
    
    // Error handling functions
    function showError(message) {
        alert(message);
    }
    
    function showSuccess(message) {
        alert(message);
        registerForm.reset();
    }
    
    // Google Sign-in handler
    const googleBtn = document.querySelector('.google-btn');
    googleBtn.addEventListener('click', function() {
        // Here you would implement Google OAuth
        console.log('Google sign-in clicked');
    });
});