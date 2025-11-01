document.addEventListener('DOMContentLoaded', function () {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let errors = [];
            
            if (!name.value.trim() || name.value.length < 3) {
                errors.push('Preencha seu nome (mínimo 3 caracteres).');
            }
            if (!email.value.includes('@') || email.value.length < 6) {
                errors.push('Preencha um e-mail válido.');
            }
            if (!subject.value.trim()) {
                errors.push('Preencha o assunto.');
            }
            if (!message.value.trim() || message.value.length < 10) {
                errors.push('A mensagem deve ter pelo menos 10 caracteres.');
            }
            
            const oldAlert = document.querySelector('.form-alert');
            if (oldAlert) {
                oldAlert.remove();
            }

            const alertBox = document.createElement('div');
            alertBox.className = 'form-alert';

            if (errors.length > 0) {
                alertBox.classList.add('error');
                alertBox.innerHTML = '<ul>' + errors.map(e => '<li>' + e + '</li>').join('') + '</ul>';
                form.prepend(alertBox);
                return;
            }
            
            const submissions = JSON.parse(localStorage.getItem('conexao_submissions') || '[]');
            submissions.push({
                name: name.value.trim(),
                email: email.value.trim(),
                subject: subject.value.trim(),
                message: message.value.trim(),
                date: new Date().toISOString()
            });
            localStorage.setItem('conexao_submissions', JSON.stringify(submissions));
            
            alertBox.classList.add('success');
            alertBox.innerHTML = '<p>Mensagem enviada com sucesso! (Salva no localStorage)</p>';
            form.prepend(alertBox);
            
            form.reset();
        });
    }

    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        const h3 = card.querySelector('h3');
        if (h3) {
            h3.style.cursor = 'pointer';
            h3.setAttribute('tabindex', '0');
            const info = card.querySelector('.member-info');
            if (info) {
                info.style.display = 'none'; 
            }

            const toggleInfo = () => {
                if (info) {
                    info.style.display = info.style.display === 'none' ? 'block' : 'none';
                }
            };

            h3.addEventListener('click', toggleInfo);
            
            h3.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleInfo();
                }
            });
        }
    });
});